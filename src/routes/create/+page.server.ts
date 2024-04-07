import { type Actions, fail, redirect } from '@sveltejs/kit';
import * as helpers from '$lib/db/helpers'
import { db } from '$lib/db/db';
import { zonesTable, linksTable } from '$lib/db/schema';
import { z } from 'zod'
import { superValidate, message, setError } from 'sveltekit-superforms/server';

async function generateCode(customCode?: string) {
    let code: string = ''
    if(!customCode) {
        code = Math.random().toString(36).substring(2, 8) + Math.random().toString(36).substring(2, 10)
    } else {
        code = customCode
    }

    let codeExists = await helpers.checkCodeExists(code)

    if(codeExists) {
        generateCode()
    } else {
        console.log('Code: ' + code)
        return code
    }
    
}

const codeSchema = z.object({
    customCodeb: z.boolean(),
    customCode: z.string()
})

const zoneSchema = z.object({
    linkzone_intro: z.string(),
    linkzone_customCode: z.string().optional(),
    linkUrl: z.string().array(),
    linkDsc: z.string().array().optional()
})

export const load = (async () => {
    const codeForm = await superValidate(codeSchema)
    const zoneForm = await superValidate(zoneSchema)

    return { codeForm, zoneForm }
})

export const actions: Actions = {
    checkCode: async ({ request }) => {
        const codeForm = await superValidate(request, codeSchema)
        //console.log(formData)
        if(!codeForm.valid) return fail(400, { codeForm })

        const code = codeForm.data.customCode

        const codeExists = await helpers.checkCodeExists(code)
        console.log('CustomCode: ' + codeExists)

        if(codeExists) {
            return message(codeForm, 'Not available!')

        } else {
            return message(codeForm, 'Available!')

        }
    },

    createZone: async ({ request }) => {
        const zoneForm = await superValidate(request, zoneSchema)
        // console.log(zoneForm)

        if(!zoneForm.valid) return fail(400, { zoneForm })

        const intro = zoneForm.data.linkzone_intro
        const customCode = zoneForm.data.linkzone_customCode
        const linkUrls = zoneForm.data.linkUrl
        const linkDscs = zoneForm.data.linkDsc

        if(linkUrls.length < 1) {

            return message(zoneForm, 'Please add links to your zone')

        } else {

            let zoneCode: string = ''

            if(customCode) {
                zoneCode = await generateCode(customCode)
            } else {
                zoneCode = await generateCode()
            }
            
            let zoneBody: object[] = [
                {
                    intro: intro,
                    code: zoneCode
                }
            ]

            const zoneCreate = await db.insert(zonesTable).values(zoneBody)
            console.log(zoneCreate)

            const zoneId = await helpers.getZoneIdByCode(zoneCode)
            if(!zoneId) {
                return message(zoneForm, 'Zone not created. Please try again')
            }

            linkUrls.forEach(async link => {
                const linkBody: object = {
                    url: link,
                    description: linkDscs[linkUrls.indexOf(link)],
                    zoneId: zoneId?.id
                }

                const linkCreate = await db.insert(linksTable).values(linkBody)
                console.log(linkCreate)
            })

            redirect(301, '/create/success&' + zoneCode)
        }
    }
}
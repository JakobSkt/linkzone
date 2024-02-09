import { type Actions, fail } from '@sveltejs/kit';
import * as helpers from '$lib/db/helpers'
import { db } from '$lib/db/db';
import { links } from '$lib/db/schema';
import { z } from 'zod'
import { superValidate, message, setError } from 'sveltekit-superforms/server';

const codeSchema = z.object({
    customCodeb: z.boolean(),
    customCode: z.string()
})

const zoneSchema = z.object({
    linkzone_intro: z.string(),
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
        console.log(zoneForm)
/*
        const intro = formData.get("linkzone_intro") as string
        // const customZone = formData.get("customZone") as string
        const linkUrls = formData.getAll("link_url") as string[]
        const linkDscs = formData.getAll("link_dsc") as string[]

        if(linkUrls.length < 1) {

            return { message: "Please add links to your zone"}

        } else {

            const zoneCode = "custom1"
            let zoneBody: object[] = [
                {
                    intro: intro,
                    code: zoneCode
                }
            ]



            const zoneId = await helpers.getZoneIdByCode(zoneCode)
            console.log(zoneId)

            linkUrls.forEach(async link => {
                const linkBody: object = {
                    url: link,
                    description: linkDscs[linkUrls.indexOf(link)],
                    zoneId: zoneId?.id
                }

                //const linkCreate = await db.insert(links).values(linkBody)
                //console.log(linkCreate)
            })
        }
        */
    }
}
import type { Actions } from "@sveltejs/kit";
import { db } from '$lib/db/db';
import { links } from '$lib/db/schema';
import * as helpers from '$lib/db/helpers'


export const actions: Actions = {
	/*checkCode: async ({ request }) => {
			const formData = await request.formData()
			const code = formData.get("code") as string

			const codeExists = await helpers.checkCodeExists(code)

			return { message: codeExists }
	},*/

	default: async ({ request }) => {
		const formData = await request.formData()

		console.log(formData)

		const intro = formData.get("linkzone_intro") as string
		// const customZone = formData.get("customZone") as string
		const linkUrls = formData.getAll("link_url") as string[]
		const linkDscs = formData.getAll("link_dsc") as string[]

		let zoneCode = "custom1"
		let zoneBody: object[] = [
			{
				intro: intro,
				code: zoneCode
			}
		]

		// const zoneCreate = await db.insert(zones).values(zoneBody)
		// console.log(zoneCreate)

		const zoneId = await helpers.getZoneIdByCode(zoneCode)
		console.log(zoneId)



		linkUrls.forEach(async link => {
			const linkBody: object = {
				url: link,
				description: linkDscs[linkUrls.indexOf(link)],
				zoneId: zoneId?.id
			}

			const linkCreate = await db.insert(links).values(linkBody)
			console.log(linkCreate)
		})
	}

};
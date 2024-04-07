import { db } from '$lib/db/db'
import { zonesTable, linksTable } from '$lib/db/schema'
import { eq } from 'drizzle-orm'

export const load = async ({ params }) => {
  const inputCode = params.code
  // console.log('inputCode: ', inputCode)

  const zone = await db.select().from(zonesTable).where(eq(zonesTable.code, inputCode))
  /*const zoneDebug = [
    {
      id: 2,
      intro: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
      code: 'custom1',
    }
  ]*/
  if(zone[0] != undefined) {

    const zoneLinks = await db.select().from(linksTable).where(eq(linksTable.zoneId, zone[0].id))
      
    return { status: 201, inputCode, zone, zoneLinks}

  } else {

    return { status: 404, error: 'Zone not found'}
  }
}
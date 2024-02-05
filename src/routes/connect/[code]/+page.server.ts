import { db } from '$lib/db/db'
import { zones, links } from '$lib/db/schema'
import { eq } from 'drizzle-orm'

export const load = async ({ params }) => {
  const inputCode = params.code
  // console.log('inputCode: ', inputCode)

  const zone = await db.select().from(zones).where(eq(zones.code, inputCode))

  if(zone[0] != undefined) {

    const zoneLinks = await db.select().from(links).where(eq(links.zoneId, zone[0].id))
    return { status: 201, inputCode, zone, zoneLinks}

  } else {

    return { status: 404, error: 'Zone not found'}
  }
}
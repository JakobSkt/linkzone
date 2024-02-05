import { db } from '$lib/db/db'
import { zones, links } from '$lib/db/schema'
import { eq } from 'drizzle-orm'

export async function getZoneIdByCode(zoneCode: string) {
    const zoneId = await db.query.zones.findFirst({
        columns: {
            id: true
        },
        where: eq(zones.code, zoneCode)
    })

    return zoneId
}

export async function getZoneByCode(zoneCode: string) {
    const zone = await db.query.zones.findFirst({
        where: eq(zones.code, zoneCode)
    })

    return zone
}

export async function getZoneById(zoneId: number) {
    const zone = await db.query.zones.findFirst({
        where: eq(zones.id, zoneId)
    })

    return zone
}

export async function getLinksByZoneId(zoneId: number) {
    const linkArr = await db.query.links.findMany({
        where: eq(links.zoneId, zoneId)
    })

    return linkArr
}

export async function checkCodeExists(zoneCode: string) {
    const zone = await db.query.zones.findFirst({
        where: eq(zones.code, zoneCode)
    })

    return zone != undefined;
}
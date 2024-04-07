import { db } from '$lib/db/db'
import { zonesTable, linksTable } from '$lib/db/schema'
import { eq } from 'drizzle-orm'

export async function getZoneIdByCode(zoneCode: string) {
    const zoneId = await db.query.zonesTable.findFirst({
        columns: {
            id: true
        },
        where: eq(zonesTable.code, zoneCode)
    })

    return zoneId
}

export async function getZoneByCode(zoneCode: string) {
    const zone = await db.query.zonesTable.findFirst({
        where: eq(zonesTable.code, zoneCode)
    })

    return zone
}

export async function getZoneById(zoneId: number) {
    const zone = await db.query.zonesTable.findFirst({
        where: eq(zonesTable.id, zoneId)
    })

    return zone
}

export async function getLinksByZoneId(zoneId: number) {
    const linkArr = await db.query.linksTable.findMany({
        where: eq(linksTable.zoneId, zoneId)
    })

    return linkArr
}

export async function checkCodeExists(zoneCode: string) {
    const zone = await db.query.zonesTable.findFirst({
        where: eq(zonesTable.code, zoneCode)
    })

    return zone != undefined;
}
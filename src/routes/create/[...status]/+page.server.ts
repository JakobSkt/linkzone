import { db } from '$lib/db/db'
import { zonesTable, linksTable } from '$lib/db/schema'
import { eq } from 'drizzle-orm'

export const load = async ({ params }) => {
  const status = params.status.split('&')[0]
  const code = params.status.split('&')[1]

  return { status: status, code: code }
}
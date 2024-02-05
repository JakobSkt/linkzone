import { int, mysqlEnum, mysqlTable, uniqueIndex, varchar, serial, timestamp} from 'drizzle-orm/mysql-core'
import { sql, relations } from 'drizzle-orm'

export const zones = mysqlTable('zones', {
    id: serial('id').autoincrement().primaryKey(),
    intro: varchar('intro', { length: 512 }),
    code: varchar('code', { length: 255 }),
    createdAt: timestamp('createdAt').default(sql`CURRENT_TIMESTAMP`)
})

export const zonesRelations = relations(zones, ({ many }) => ({
    links: many(links)
}))

export const links = mysqlTable('links', {
    id: serial('id').autoincrement().primaryKey(),
    url: varchar('url', { length: 512 }),
    description: varchar('description', { length: 512 }),
    zoneId: int('zoneId'),
    createdAt: timestamp('createdAt').default(sql`CURRENT_TIMESTAMP`)
})



export const linksRelations = relations(links, ({ one }) => ({ 
    zone: one(zones, {
        fields: [links.zoneId],
        references: [zones.id],
    }),
}))
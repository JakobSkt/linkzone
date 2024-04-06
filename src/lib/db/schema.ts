import { integer, uniqueIndex, text, SQLiteTimestamp, sqliteTable} from 'drizzle-orm/sqlite-core'
import { sql, relations } from 'drizzle-orm'

export const zones = sqliteTable('zones', {
    id: integer('id').primaryKey(),
    intro: text('intro', { length: 512 }),
    code: text('code', { length: 255 }),
    createdAt: text('created_at')
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
})

export const zonesRelations = relations(zones, ({ many }) => ({
    links: many(links)
}))

export const links = sqliteTable('links', {
    id: integer('id').primaryKey(),
    url: text('url', { length: 512 }),
    description: text('description', { length: 512 }),
    zoneId: integer('zoneId'),
    createdAt: text('created_at')
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
})



export const linksRelations = relations(links, ({ one }) => ({ 
    zone: one(zones, {
        fields: [links.zoneId],
        references: [zones.id],
    }),
}))
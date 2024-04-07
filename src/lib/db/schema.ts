import { integer, uniqueIndex, text, SQLiteTimestamp, sqliteTable} from 'drizzle-orm/sqlite-core'
import { sql, relations } from 'drizzle-orm'

export const zonesTable = sqliteTable('zones', {
    id: integer('id').primaryKey(),
    intro: text('intro', { length: 512 }),
    code: text('code', { length: 255 }),
    createdAt: text('created_at')
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
})

export const zonesRelations = relations(zonesTable, ({ many }) => ({
    links: many(linksTable)
}))

export const linksTable = sqliteTable('links', {
    id: integer('id').primaryKey(),
    url: text('url', { length: 512 }),
    description: text('description', { length: 512 }),
    zoneId: integer('zoneId'),
    createdAt: text('created_at')
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
})



export const linksRelations = relations(linksTable, ({ one }) => ({ 
    zone: one(zonesTable, {
        fields: [linksTable.zoneId],
        references: [zonesTable.id],
    }),
}))
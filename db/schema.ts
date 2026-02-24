// db/schema.ts
import { mysqlTable, varchar, timestamp, text } from 'drizzle-orm/mysql-core';
import { randomUUID } from 'crypto';

export const contactMessages = mysqlTable('contact_messages', {
  id: varchar('id', { length: 36 })
      .primaryKey()
      .$defaultFn(() => randomUUID()),

  name: varchar('name', { length: 150 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 30 }), // opcional
  message: text('message').notNull(),

  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export type ContactMessage = typeof contactMessages.$inferSelect;
export type NewContactMessage = typeof contactMessages.$inferInsert;

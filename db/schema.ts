import { pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core';

export const inquiries = pgTable('inquiries', {
    id: serial('id').primaryKey(),
    email: varchar('email', { length: 255 }).notNull(),
    description: text('description').notNull(),
    deadline: varchar('deadline', { length: 50 }).notNull(),
    length: varchar('length', { length: 50 }).notNull(),
    budget: varchar('budget', { length: 50 }).notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
});

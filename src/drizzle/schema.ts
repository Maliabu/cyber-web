import { integer, pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core';

export const usersTable = pgTable('users_table', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  password: varchar('password').notNull(),
  email: text('email').notNull().unique(),
  token: text('token').notNull().unique(),
  username: varchar('username').notNull().unique(),
  profilePicture: varchar('course_image'),
});

export const currencyTable = pgTable('currency_table', {
  id: serial('id').primaryKey(),
  code: text('currency_code').notNull(),
  currency: text('currency_name'),
  country: text('name').notNull(),
  country_code: text('country_code').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .$onUpdate(() => new Date()),
});

export const courseTable = pgTable('course_table', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  descritption: text('content').notNull(),
  courseOutline: text('outline'),
  image: varchar('course_image'),
  mentor: integer('user_id')
    .notNull()
    .references(() => usersTable.id, { onDelete: 'cascade' }),
  startDate: timestamp('start_date').notNull(),
  duration: integer('course_duration'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .$onUpdate(() => new Date()),
  pricing: integer('pricing'),
});

export const articlesTable = pgTable('articles_table', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  descritption: text('content').notNull(),
  link: varchar('link'),
  image: varchar('article_image'),
  writer: integer('user_id')
    .notNull()
    .references(() => usersTable.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .$onUpdate(() => new Date()),
});

export const EventsTable = pgTable('events_table', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  descritption: text('content').notNull(),
  link: varchar('link'),
  image: varchar('course_image'),
  startDate: timestamp('start_date'),
  duration: integer('course_duration'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .$onUpdate(() => new Date()),
});

export const enrollmentsTable = pgTable('enrollments_table', {
  id: serial('id').primaryKey(),
  course: integer('course').notNull().references(() => courseTable.id, { onDelete: 'cascade'}),
  userId: integer('user_id')
    .notNull()
    .references(() => usersTable.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .$onUpdate(() => new Date()),
});

export const schedulesTable = pgTable('schedules_table', {
  id: serial('id').primaryKey(),
  userId: integer('user_id')
    .notNull()
    .references(() => usersTable.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .$onUpdate(() => new Date()),
});

export const subscriptionsTable = pgTable('subscriptions_table', {
  id: serial('id').primaryKey(),
  userId: integer('user_id')
    .notNull()
    .references(() => usersTable.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .$onUpdate(() => new Date()),
});

export const commentsTable = pgTable('comments_table', {
  id: serial('id').primaryKey(),
  userId: integer('user_id')
    .notNull()
    .references(() => usersTable.id, { onDelete: 'cascade' }),
  comment: varchar('comment'),
  article: integer('article_id').notNull().references(() => articlesTable.id),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .$onUpdate(() => new Date()),
});

export const replyTable = pgTable('reply_table', {
  id: serial('id').primaryKey(),
  userId: integer('user_id')
    .notNull()
    .references(() => usersTable.id, { onDelete: 'cascade' }),
  reply: varchar('comment'),
  article: integer('article_id').notNull().references(() => articlesTable.id),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .$onUpdate(() => new Date()),
});

export const votesTable = pgTable('votes_table', {
  id: serial('id').primaryKey(),
  userId: integer('user_id')
    .notNull()
    .references(() => usersTable.id, { onDelete: 'cascade' }),
  vote: integer('vote'),
  article: integer('article_id').notNull().references(() => articlesTable.id),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .$onUpdate(() => new Date()),
});

export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;

export type InsertComment = typeof commentsTable.$inferInsert;
export type SelectComment = typeof commentsTable.$inferSelect;

export type InsertSubscription = typeof subscriptionsTable.$inferInsert;
export type SelectSubscription = typeof subscriptionsTable.$inferSelect;

export type InsertPost = typeof courseTable.$inferInsert;
export type SelectPost = typeof courseTable.$inferSelect;

export type InsertArticle = typeof articlesTable.$inferInsert;
export type SelectArticle = typeof articlesTable.$inferSelect;

export type InsertEnrollment = typeof enrollmentsTable.$inferInsert;
export type SelectEnrollment = typeof enrollmentsTable.$inferSelect;

export type InsertVote = typeof votesTable.$inferInsert;
export type SelectVote = typeof votesTable.$inferSelect;

export type InsertReply = typeof replyTable.$inferInsert;
export type SelectReply = typeof replyTable.$inferSelect;

export type InsertSchedule = typeof schedulesTable.$inferInsert;
export type SelectSchedule = typeof schedulesTable.$inferSelect;

export type InsertEvent = typeof EventsTable.$inferInsert;
export type SelectEvent = typeof EventsTable.$inferSelect;

export type InsertCurrency = typeof currencyTable.$inferInsert;
export type SelectCurrency = typeof currencyTable.$inferSelect;
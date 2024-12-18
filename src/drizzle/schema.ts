import { boolean, integer, pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core';

const createdAt = timestamp('created_at').notNull().defaultNow()
const updatedAt = timestamp('updated_at')
  .notNull()
  .$onUpdate(() => new Date())

export const usersTable = pgTable('users_table', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  password: varchar('password').notNull(),
  email: text('email').notNull().unique(),
  token: text('token').notNull().unique(),
  username: varchar('username').notNull().unique(),
  profilePicture: varchar('profile_picture'),
  userType: text('type').notNull().default("user"),
  isActive: boolean("is_active").notNull().default(true),
  decInit: varchar('decInitVector').notNull(),
  createdAt,
  updatedAt,
});

export const currencyTable = pgTable('currency_table', {
  id: serial('id').primaryKey(),
  code: text('currency_code').notNull(),
  currency: text('currency_name'),
  country: text('name').notNull(),
  country_code: text('country_code').notNull(),
  createdAt,
  updatedAt,
});

export const courseTable = pgTable('course_table', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  courseOutline: text('outline'),
  image: varchar('course_image'),
  mentor: integer('user_id')
    .notNull()
    .references(() => usersTable.id, { onDelete: 'cascade' }),
  startDate: timestamp('start_date').notNull(),
  endDate: timestamp('end_date').notNull(),
  currency: integer("currency_id").notNull().references(() => currencyTable.id, {onDelete: 'cascade'}),
  amount: integer('amount').notNull(),
  createdAt,
  updatedAt,
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
    createdAt,
    updatedAt,
});

export const EventsTable = pgTable('events_table', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  link: varchar('link'),
  image: varchar('event_image').notNull(),
  startDate: timestamp('start_date'),
  endDate: timestamp('end_date'),
  createdAt,
  updatedAt,
});

export const enrollmentsTable = pgTable('enrollments_table', {
  id: serial('id').primaryKey(),
  course: integer('course').notNull().references(() => courseTable.id, { onDelete: 'cascade'}),
  userId: integer('user_id')
    .notNull()
    .references(() => usersTable.id, { onDelete: 'cascade' }),
    createdAt,
    updatedAt,
});

export const schedulesTable = pgTable('schedules_table', {
  id: serial('id').primaryKey(),
  timezone: text('timezone').notNull(),
  userId: integer('user_id')
    .notNull()
    .references(() => usersTable.id, { onDelete: 'cascade' }),
    createdAt,
    updatedAt,
});

export const subscriptionsTable = pgTable('subscriptions_table', {
  id: serial('id').primaryKey(),
  userId: integer('user_id')
    .notNull()
    .references(() => usersTable.id, { onDelete: 'cascade' }),
    createdAt,
    updatedAt,
});

export const commentsTable = pgTable('comments_table', {
  id: serial('id').primaryKey(),
  userId: integer('user_id')
    .notNull()
    .references(() => usersTable.id, { onDelete: 'cascade' }),
  comment: varchar('comment'),
  article: integer('article_id').notNull().references(() => articlesTable.id),
  createdAt,
  updatedAt,
});

export const replyTable = pgTable('reply_table', {
  id: serial('id').primaryKey(),
  userId: integer('user_id')
    .notNull()
    .references(() => usersTable.id, { onDelete: 'cascade' }),
  reply: varchar('comment'),
  article: integer('article_id').notNull().references(() => articlesTable.id),
  createdAt,
  updatedAt,
});

export const votesTable = pgTable('votes_table', {
  id: serial('id').primaryKey(),
  userId: integer('user_id')
    .notNull()
    .references(() => usersTable.id, { onDelete: 'cascade' }),
  vote: integer('vote'),
  article: integer('article_id').notNull().references(() => articlesTable.id),
  createdAt,
  updatedAt,
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
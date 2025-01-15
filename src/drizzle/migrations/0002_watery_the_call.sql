ALTER TABLE "enrollments_table" RENAME COLUMN "user_id" TO "email";--> statement-breakpoint
ALTER TABLE "enrollments_table" DROP CONSTRAINT "enrollments_table_user_id_users_table_id_fk";
--> statement-breakpoint
ALTER TABLE "enrollments_table" ADD CONSTRAINT "enrollments_table_email_unique" UNIQUE("email");
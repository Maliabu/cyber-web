ALTER TABLE "users_table" ADD COLUMN "is_logged_in" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "users_table" ADD COLUMN "last_login" timestamp;
CREATE TABLE IF NOT EXISTS "messages_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"message" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL,
	CONSTRAINT "messages_table_email_unique" UNIQUE("email")
);

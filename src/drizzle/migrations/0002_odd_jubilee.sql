CREATE TABLE IF NOT EXISTS "editor_images" (
	"id" serial PRIMARY KEY NOT NULL,
	"image" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL
);

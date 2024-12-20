ALTER TABLE "enrollments_table" RENAME COLUMN "course" TO "course_id";--> statement-breakpoint
ALTER TABLE "enrollments_table" DROP CONSTRAINT "enrollments_table_course_course_table_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "enrollments_table" ADD CONSTRAINT "enrollments_table_course_id_course_table_id_fk" FOREIGN KEY ("course_id") REFERENCES "public"."course_table"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

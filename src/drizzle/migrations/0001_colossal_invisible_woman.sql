ALTER TABLE "comments_table" DROP CONSTRAINT "comments_table_article_id_articles_table_id_fk";
--> statement-breakpoint
ALTER TABLE "reply_table" DROP CONSTRAINT "reply_table_comment_id_comments_table_id_fk";
--> statement-breakpoint
ALTER TABLE "reply_table" DROP CONSTRAINT "reply_table_article_id_articles_table_id_fk";
--> statement-breakpoint
ALTER TABLE "votes_table" DROP CONSTRAINT "votes_table_article_id_articles_table_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "comments_table" ADD CONSTRAINT "comments_table_article_id_articles_table_id_fk" FOREIGN KEY ("article_id") REFERENCES "public"."articles_table"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "reply_table" ADD CONSTRAINT "reply_table_comment_id_comments_table_id_fk" FOREIGN KEY ("comment_id") REFERENCES "public"."comments_table"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "reply_table" ADD CONSTRAINT "reply_table_article_id_articles_table_id_fk" FOREIGN KEY ("article_id") REFERENCES "public"."articles_table"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "votes_table" ADD CONSTRAINT "votes_table_article_id_articles_table_id_fk" FOREIGN KEY ("article_id") REFERENCES "public"."articles_table"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

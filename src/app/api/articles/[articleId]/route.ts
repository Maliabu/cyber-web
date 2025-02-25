// pages/api/users/[userId].ts

import { db } from '@/drizzle/db';
import { articlesTable } from '@/drizzle/schema';
import { eq } from 'drizzle-orm';
import { NextResponse } from 'next/server';

// API route handler for GET requests
export async function GET(request: Request, { params }: { params: { articleId: string } }) {
  const { articleId } = await params; // Get the articleId from the URL
    // Query the database for the article by `articleId`
    const article = await db
    .query
    .articlesTable
    .findMany({
      where: eq(articlesTable.id, parseInt(articleId)),
      with: {
        votes: true,
        comments: {
          with: {
            replies: true
          }
        }
      }
    })

      if (!article) {
        return NextResponse.json({ message: 'article not found' }, { status: 404 });
      }
      return NextResponse.json(article);
}
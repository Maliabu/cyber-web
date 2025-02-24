// pages/api/users/[userId].ts

import { db } from '@/drizzle/db';
import { courseTable } from '@/drizzle/schema';
import { eq } from 'drizzle-orm';
import { NextResponse } from 'next/server';

// API route handler for GET requests
export async function GET(request: Request, { params }: { params: { courseId: string } }) {
  const { courseId } = await params; // Get the courseId from the URL
    // Query the database for the course by `courseId`
    const course = await db
    .query
    .courseTable
    .findMany({
      where: eq(courseTable.id, parseInt(courseId))
    })

      if (!course) {
        return NextResponse.json({ message: 'course not found' }, { status: 404 });
      }
      return NextResponse.json(course);
}
import { db } from "@/drizzle/db";
import { NextResponse } from "next/server";

// This will handle the GET request to /api/packaging
export async function GET() {
  try {
    // Query the database
    const enrollments = await db.query.enrollmentsTable.findMany();
    
    // Return the events as a JSON response
    return NextResponse.json(enrollments);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch enrollments" }, { status: 500 });
  }
}

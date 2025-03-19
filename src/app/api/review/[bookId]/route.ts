import dbConnect from "@/lib/dbConnect";
import { Book, Review } from "@/models/Book";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { bookId: string } }
) {
  await dbConnect();

  try {
    const reviews = await Review.find({ book: params.bookId });

    return NextResponse.json(
      { message: reviews, success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return NextResponse.json(
      { message: `Error fetching reviews: ${error}`, success: false },
      { status: 500 }
    );
  }
}
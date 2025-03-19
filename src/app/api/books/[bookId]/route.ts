import dbConnect from "@/lib/dbConnect";
import { Book } from "@/models/Book";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { bookId: string } }
) {
  await dbConnect();

  try {
    // Explicitly populate both creator and reviews with specific fields
    const book = await Book.findById(params.bookId)
      .populate({
        path: "creator",
        select: "name email image"
      })
      .populate({
        path: "reviews",
        select: "comment rating createdAt author profileImage"
      });

    if (!book) {
      return NextResponse.json(
        { message: "Book not found", success: false },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: book, success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching book:", error);
    return NextResponse.json(
      { message: `Error fetching book: ${error}`, success: false },
      { status: 500 }
    );
  }
}
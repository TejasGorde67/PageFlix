import dbConnect from "@/lib/dbConnect";
import { Book } from "@/models/Book";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { bookId: string } }
) {
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json(
      { success: false, message: "You are Unauthorized" },
      { status: 401 }
    );
  }
  
  await dbConnect();

  try {
    const book = await Book.findByIdAndDelete(params.bookId);

    if (!book) {
      return NextResponse.json(
        { message: "Book not found", success: false },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Book deleted successfully", success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting book:", error);
    return NextResponse.json(
      { message: `Error deleting book: ${error}`, success: false },
      { status: 500 }
    );
  }
}
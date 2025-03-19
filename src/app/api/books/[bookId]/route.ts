import dbConnect from "@/lib/dbConnect";
import { Book } from "@/models/Book";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { bookId: string } }) {
    await dbConnect();

    try {
        const { bookId } = params;
        const book = await Book.findById(bookId).populate('creator').populate('reviews');


        if (book) {
            return Response.json(
                { message: book, success: true },
                { status: 200 },
            )
        } else {
            return Response.json(
                { message: 'No Book Found', success: false },
                { status: 404 }
            )
        }
    } catch (error) {
        return Response.json(
            { message: "Error while fetching books", success: false },      
            { status: 501 }
        )
    }
}

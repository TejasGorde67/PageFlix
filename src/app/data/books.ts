import { ReviewType } from "@/components/Reviews";
import { CreatorModel } from "@/models/Book";

export const books: Book[] = [
    {
        _id: "67653e93cf67c47057da70f8",
        title: "",
        description: '',
        coverImage: "",
        file: '',
        author: "",
    },
    {
        _id: "67654029cf67c47057da711f",
        title: "",
        description: '',
        coverImage: "",
        file: '',
        author: "",
    },
    {
        _id: "67653fb3cf67c47057da7117",
        title: "",
        description: '',
        coverImage: "",
        file: '',
        author: "",
    },
    {
        _id: "67653934b6cdc17ae0fc939b",
        title: "",
        description: '',
        coverImage: "",
        file: '',
        author: "",
    },
]


export type Book = {
    _id: string;
    title: string;
    description: string;
    coverImage: string;
    file: string;
    author: string,
    creator?: CreatorModel;
    reviews?: ReviewType[];
};

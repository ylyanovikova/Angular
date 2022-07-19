import { IComment } from "./IComment";

export interface ICommentDetails extends IComment{
    body: string,
    email: string
}
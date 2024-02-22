import axios from "axios";
import { CommentGet, CommentPost } from "../Models/Comment";
import { handlerError } from "../Helpers/ErrorHandler";

const api="http://localhost:5296/api/comment/";
export const commentPostAPI=async (title:string, content:string, symbol:string) => {
    try {
        const data=await axios.post<CommentPost>(api+`${symbol}`,
        //đây là đầu vào
        {
            title:title,
            content:content,
        }
        )
        return data;
    } catch(error) {
        handlerError(error);
    }
}

export const commentGetAPI=async (symbol:string) => {
    try {
        const data=await axios.get<CommentGet[]>(api+`?Symbol=${symbol}`);
        return data;
    } catch(error) {
        handlerError(error);
    }
}
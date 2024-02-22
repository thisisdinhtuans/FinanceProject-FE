import React, { useEffect, useState } from 'react'
import StockCommentForm from './StockCommentForm/StockCommentForm';
import { commentGetAPI, commentPostAPI } from '../../Services/CommentService';
import { toast } from 'react-toastify';
import { CommentGet } from '../../Models/Comment';
import StockCommentList from '../StockCommentList/StockCommentList';
import Spinner from '../Spinners/Spinner';

type Props = {
    stockSymbol:string;
};

type CommentFormInputs = {
    title: string;
    content:string;
};

const StockComment = ({stockSymbol}: Props) => {
    //Lưu trữ trạng thái của mình bên trong state   
    const [comments, setComment]=useState<CommentGet[]|null>(null);
    const [loading, setLoading] = useState<boolean>();


    useEffect(() => {
        getComments();
        //[] là phải đặt 1 mảng thực tế vào đây
    }, []);

    const handleComment = (e: CommentFormInputs) => {
        commentPostAPI(e.title, e.content, stockSymbol).then((res)=>{
            if(res) {
                toast.success("Comment created successfully!")
                getComments();
            }
        }).catch((e)=>{
            toast.warning(e);
        })
    }
    const getComments =() => {
        setLoading(true);
        //truyền symbol chứng khoán cho nó
        commentGetAPI(stockSymbol)
        .then((res) =>{
            setLoading(false);
            setComment(res?.data!)
        });
    }
  return (
    <div className="flex flex-col">
        {loading ?<Spinner /> :<StockCommentList comments={comments!}/>}
        <StockCommentForm symbol={stockSymbol} handleComment={handleComment}/>
    </div>
  )
}
export default StockComment;
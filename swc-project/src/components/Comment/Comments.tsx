import './commentsContainer.css'
import Comment from './Comment'
import axios from 'axios';
import React, {useEffect, useState} from 'react'
import CommentPopUp from './CommentPopUp';
interface CommentsProps{
    place_id?: string;
}

export default function Comments(props:CommentsProps){
    const [commentData, setCommentData] = useState<any[]>([]);
    const [isOpen, setPopState] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            axios.get(`http://localhost:5000/places/${props.place_id}`).then((response) => {
            setCommentData(response.data)})
        };
        fetchData();
    }, [props.place_id]);
    

    
    return (
        <section className="comments-sec">
            <div className="comments">
                {/* {commentData.map((item, index) => (
                    <Comment 
                        key={index}
                        user_id={item.user_id}
                        date={item.datew}
                        rate={item.rate}
                        comment={item.comment}
                    />
                ))} */}
            </div>
            <div className="comment-footer">
                <span className="total-comm">Нийт Сэтгэгдэл - {commentData.length}</span>
                <div>
                <button id="add-comm" onClick={()=> setPopState(true)}>
                    <i className="fa-solid fa-pen"></i>
                </button>
                </div>
            </div>
            <CommentPopUp isOpen={isOpen} place_id={props.place_id} setPopState={setPopState}>
                <h1>Сэтгэгдэл</h1>
            </CommentPopUp>
        </section>
    )
}
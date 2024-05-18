import { useState, useEffect } from 'react';
import './comment.css'
import axios from 'axios';
interface CommentProps{
    user_id: string;
    date: string;
    rate: number;
    comment: string;
}

export default function Comment(props:CommentProps){
    const [userName, setUserName] = useState<string>('');
    const rateHtml = () => {
        const stars = Array.from({ length: props.rate }, (_, index) => (
            <img src="/src/assets/Star.svg" className="icon-star" key={index} />
        ));
        return stars;
    }
    
    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/users/${props.user_id}`);
            setUserName(response.data.username);
        } catch (error) {
            console.error('Error fetching user data:', error);
            setUserName('Error'); 
        }
    };
    useEffect(() => {
        fetchData();
    }, []);        
    

    return (
        <article className="comment">
            <div className="info-comm">
                <div>
                    <h4 className="ttl-user">{userName}</h4>
                    <span className="date-comm">{props.date}</span>
                </div>
                <div className="stars">
                    {rateHtml()}
                </div>
            </div>
            <p className="desc-comm">{props.comment}</p>
        </article>
    )
}
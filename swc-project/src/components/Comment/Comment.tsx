import './comment.css'

interface CommentProps{
    user_id: string;
    date: string;
    rate: number;
    comment: string;
}

export default function Comment(props:CommentProps){
    const rateHtml = () => {
        const stars = Array.from({ length: props.rate }, (_, index) => (
            <img src="/src/assets/Star.svg" className="icon-star" key={index} />
        ));
        return stars;
    }
    return (
        <article className="comment">
            <div className="info-comm">
                <div>
                    <h4 className="ttl-user">{props.user_id}</h4>
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
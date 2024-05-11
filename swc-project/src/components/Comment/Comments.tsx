import './commentsContainer.css'
import Comment from './Comment'

export default function Comments(){
    return (
        <section className="comments-sec">
            <div className="comments">
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </div>
            <div className="comment-footer">
                <span className="total-comm">Нийт Сэтгэгдэл - 6</span>
                <button id="add-comm"><i className="fa-solid fa-pen"></i></button>
            </div>
        </section>
    )
}
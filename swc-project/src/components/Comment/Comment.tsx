import './comment.css'

export default function Comment(){
    return (
        <article className="comment">
            <div className="info-comm">
                <div>
                    <h4 className="ttl-comm">Сэтгэгдэл</h4>
                    <span className="date-comm">05-07-2024</span>
                </div>
                <div className="stars">
                    <img src="src/assets/Star.svg" className="icon-star"></img>
                    <img src="src/assets/Star.svg" className="icon-star"></img>
                    <img src="src/assets/Star.svg" className="icon-star"></img>
                    <img src="src/assets/Star.svg" className="icon-star"></img>
                    <img src="src/assets/Star.svg" className="icon-star"></img>
                </div>
            </div>
            <p className="desc-comm">Jade Garden Novotel-3н давхарт
                Хятад хоол идмээр санагдаал найзаасаа асуутал энэ газрыг санал болголоо.
                Нам гүм тохилог орчинтой
                Хоол үнэхээр гоё амттай юм байна.
                Мантуутай гахайн мах нь бага зэрэг аргуу санагдлаа бусдаар бол 10/10.</p>
        </article>
    )
}
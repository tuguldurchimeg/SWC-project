 import Menu from "./components/Menu/Menu"
 import './styles/App.css'
 import './styles/Restaurant.css'
 
 export default function Restaurant(){
    return (
        <>
            <section className="intro">
                <img src="https://source.unsplash.com/random/?restaurant&1" alt="restaurant img" className="img-back"/>
                <div className="imgs-res">
                    <img src="https://source.unsplash.com/random/?restaurant&1" alt="restaurant img" className="img-res" id="img-1"/>
                    <div>
                        <img src="https://source.unsplash.com/random/?restaurant&2" alt="restaurant img" className="img-res" id="img-2"/>
                        <img src="https://source.unsplash.com/random/?restaurant&3" alt="restaurant img" className="img-res" id="img-3"/>
                    </div>
                </div>
                <div className="text-info-res">
                    <div>
                        <h3 className="info-res-ttl">Jade Garden</h3>
                        <i className="fa-regular fa-heart"></i>
                    </div>
                    
                    <div className="info-res">Chinese Restaurant</div>
                    <div className="info-res">10:00 - 18:00</div>
                    <div className="info-res capacity">Багтаамж - 120</div>       
                </div>
            </section>
            <section className="infos-sec">
                <ul>
                    <li className="info-ad"><span id="info1">Өлгүүр</span></li>
                    <li className="info-ad"><span id="info2">Wifi</span></li>
                    <li className="info-ad"><span id="info3">Vip</span></li>
                    <li className="info-ad"><span id="info4">Зогсоол</span></li>
                    <li className="info-ad"><span id="info5">Wifi</span></li>
                </ul>
            </section>
            <section className="main">
                    <Menu />
                    <div>
                        <section className="comments-sec">
                            <div className="comments">
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
                            </div>
                            <footer className="comment-footer">
                                <span className="total-comm">Нийт Сэтгэгдэл - 6</span>
                                <button id="add-comm"><i className="fa-solid fa-pen"></i></button>
                            </footer>
                        </section>
                        <section className="contact-sec">
                            <div>
                                <a href="#" id="website">jadegarden.mn</a>
                                <a href="tel:+97699761430" id="phone-rest">+976 99761430</a>
                                <a href="#" id="address-rest">Jade Garden, Novotel , Baga toiruu, Ulaanbaatar </a>
                            </div>
                        </section>
                    </div>         
            </section>       
        </>
    )
 }
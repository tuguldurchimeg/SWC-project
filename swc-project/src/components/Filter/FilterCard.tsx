
import './filtercard.css'

export default function FilterCard(){
    return(
        <section className="card-fltr">
            <h3 className="ttl">Шүүлтүүр</h3>
            <div className="fltrs">
            <article>
                <h5 className="ttl-fltr">Үнэлгээ</h5>
                <ul className="inputs-fltr">
                    <li className="fltr-elm">
                        <div>
                            <input type="checkbox" name="rating" id="1-star" />
                            <label htmlFor="1-star">1 одтой</label>
                        </div>
                        <span>19</span>
                    </li>
                    <li className="fltr-elm">
                        <div>
                            <input type="checkbox" name="rating" id="2-star" />
                            <label htmlFor="2-star">2 одтой</label>
                        </div>
                        <span>2</span>
                    </li>
                    <li className="fltr-elm">
                        <div>
                            <input type="checkbox" name="rating" id="3-star" />
                            <label htmlFor="3-star">3 одтой</label>
                        </div>
                        <span>8</span>
                    </li>
                    <li className="fltr-elm">
                        <div>
                            <input type="checkbox" name="rating" id="4-star" />
                            <label htmlFor="4-star">4 одтой</label>
                        </div>
                        <span>25</span>
                    </li>
                    <li className="fltr-elm">
                        <div>
                            <input type="checkbox" name="rating" id="5-star" />
                            <label htmlFor="5-star">5 одтой</label>
                        </div>
                        <span>10</span>
                    </li>
                </ul>
            </article>

            <article>
                <h5 className="ttl-fltr">Төрөл</h5>
                <ul className="inputs-fltr">
                    <li className="fltr-elm">
                        <div>
                            <input type="checkbox" name="category" id="mongolian" />
                            <label htmlFor="mongolian">Монгол</label>
                        </div>
                        <span>19</span>
                    </li>
                    <li className="fltr-elm">
                        <div>
                            <input type="checkbox" name="category" id="chinese" />
                            <label htmlFor="chinese">Хятад</label>
                        </div>
                        <span>2</span>
                    </li>
                    <li className="fltr-elm">
                        <div>
                            <input type="checkbox" name="category" id="korea" />
                            <label htmlFor="korea">Солонгос</label>
                        </div>
                        <span>8</span>
                    </li>
                    <li className="fltr-elm">
                        <div>
                            <input type="checkbox" name="category" id="europe" />
                            <label htmlFor="europe">Европ</label>
                        </div>
                        <span>25</span>
                    </li>
                    <li className="fltr-elm">
                        <div>
                            <input type="checkbox" name="category" id="otherCat" />
                            <label htmlFor="otherCat">Бусад</label>
                        </div>
                        <span>10</span>
                    </li>
                </ul>
            </article>

            <article>
                <h5 className="ttl-fltr">Бусад</h5>
                <ul className="inputs-fltr">
                    <li className="fltr-elm">
                        <div>
                            <input type="checkbox" name="other" id="nowOpen" />
                            <label htmlFor="nowOpen">Одоо нээлттэй</label>
                        </div>
                    </li>                  
                </ul>
            </article>
            </div>
        </section>
    )
}
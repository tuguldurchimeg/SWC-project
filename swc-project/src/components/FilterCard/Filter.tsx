import './filter.css'

export default function Filter(){
    return (
        <article>
            <h5 className="ttl-fltr">Үнэлгээ</h5>
            <ul className="inputs-fltr">
                <li className="fltr-elm">
                    <div>
                        <input type="checkbox" name="catergory" id="1-star" />
                        <label htmlFor="1-star">1 одтой</label>
                    </div>
                    <span>19</span>
                </li>
                <li className="fltr-elm">
                    <div>
                        <input type="checkbox" name="catergory" id="2-star" />
                        <label htmlFor="2-star">1 одтой</label>
                    </div>
                    <span>2</span>
                </li>
                <li className="fltr-elm">
                    <div>
                        <input type="checkbox" name="catergory" id="3-star" />
                        <label htmlFor="3-star">3 одтой</label>
                    </div>
                    <span>8</span>
                </li>
                <li className="fltr-elm">
                    <div>
                        <input type="checkbox" name="catergory" id="4-star" />
                        <label htmlFor="4-star">4 одтой</label>
                    </div>
                    <span>25</span>
                </li>
                <li className="fltr-elm">
                    <div>
                        <input type="checkbox" name="catergory" id="5-star" />
                        <label htmlFor="5-star">5 одтой</label>
                    </div>
                    <span>10</span>
                </li>
            </ul>
        </article>
    )
}
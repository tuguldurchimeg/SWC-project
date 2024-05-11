import './foodcard.css'

export default function FoodCard() {
    return (
        <article className="food">
            <div className="img-food">
                <img
                src="https://source.unsplash.com/random/400x250/?food"
                alt="food image"
                className="image"
                />
                <div className="rate-food">
                    <i className="fa-solid fa-star"></i>
                    <span>4.3</span>
                </div>
            </div>
            <div className="text-wrapper">
                <div className="info-food-ttl"> 
                    <h3>Tony Wong hjf asdf</h3>
                    <img
                        src="src/assets/Heart-grey.svg"
                        alt="like"
                        className="like-heart"
                    />
                </div>
                
                <div className="info-food sz-food">2 хүн</div>
                <div className="info-food cal-food">1,483</div>
                <div className="info-food prc-food" id="price">6,000₮</div>

                
            </div>
        </article>
    );
  }
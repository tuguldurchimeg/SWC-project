import './foodcard.css'
import HeartBtn from '../HeartBtn';

interface FoodCardProps {
    id: string;
    name: string;
    portion: string;
    calories: string;
    price: string;
    rating: number;
}

export default function FoodCard(props:FoodCardProps) {
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
                    <span>{props.rating}</span>
                </div>
            </div>
            <div className="text-wrapper">
                <div className="info-food-ttl"> 
                    <h3>{props.name}</h3>
                    <HeartBtn 
                            type="food"
                            item_id={props.id}
                        />
                </div>
                
                <div className="info-food sz-food">{props.portion}</div>
                <div className="info-food cal-food">{props.calories}</div>
                <div className="info-food prc-food" id="price">{props.price}₮</div>
            </div>
        </article>
    );
  }
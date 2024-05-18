import { Link } from 'react-router-dom'
import './restCard.css'
import Place from '../../Place'
import HeartBtn from '../HeartBtn'
interface RestCardProps {
    id: string;
    name: string;
    typeOfPlace: string;
    workHours: string;
    address: string;
    rating: number;
    desc: string;
}

export default function RestCard(props:RestCardProps){
    return(
        <Link to={`/Place/${props.id}`}>
            <article className="restaurant-card">
                <div className="img-rest">
                    <img
                    src="https://source.unsplash.com/random/400x250/?restaurant"
                    alt="restaurant image"
                    className="image"
                    />
                </div>
                <div className="text-wrapper">
                    <div className="info-rest-ttl"> 
                        <h3>{props.name}</h3>
                        <HeartBtn 
                            type="place"
                            item_id={props.id}
                        />
                    </div>
                    
                    <div className="info-rest tp-rest">{props.typeOfPlace}</div>
                    <div className="info-rest open-rest">{props.workHours}</div>
                    <div className="info-rest address-rest">{props.address}</div>
                    <p className="info-rest desc-rest">{props.desc}</p>

                    <div className="rate-rest">
                        <i className="fa-solid fa-star"></i>
                        <span>{props.rating}</span>
                    </div>
                </div>
            </article>
        </Link>
        
    )
}
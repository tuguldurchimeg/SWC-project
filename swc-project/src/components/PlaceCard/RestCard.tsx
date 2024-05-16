import { Link } from 'react-router-dom'
import './restCard.css'
import Place from '../../Place'

export default function RestCard(){
    return(
        <Link to="/Place">
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
                        <h3>Sura korean restaurant</h3>
                        <img
                            src="src/assets/Heart-grey.svg"
                            alt="like"
                            className="like-heart"
                        />
                    </div>
                    
                    <div className="info-rest tp-rest">Солонгос</div>
                    <div className="info-rest open-rest">07:30-21:00</div>
                    <div className="info-rest address-rest">СБД, 1-р хороо 12гудамж</div>
                    <p className="info-rest desc-rest">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut ex libero. Curabitur tincidunt felis nisl, ac </p>

                    <div className="rate-rest">
                        <i className="fa-solid fa-star"></i>
                        <span>4.3</span>
                    </div>
                </div>
            </article>
        </Link>
        
    )
}
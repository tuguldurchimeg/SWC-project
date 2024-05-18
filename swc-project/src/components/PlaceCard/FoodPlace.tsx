import React from 'react'
import './foodplace.css'
import foodplace from 'src/assets/burgerking.png'
import { Link } from 'react-router-dom';
import HeartBtn from '../HeartBtn';
interface FoodPlaceProps {
    id: string;
    name: string;
    typeOfPlace: string;
    workHours: string;
    address: string;
    rating: number;
}

function FoodPlace(props:FoodPlaceProps){
    return(
        <Link to={`/Place/${props.id}`}>
            <div className="restaurant">
                <div className="likeIcon">
                    <HeartBtn 
                        type="place"
                        item_id={props.id}
                    />
                </div>
                <img src="src/assets/burgerking.png" alt="Burger King"/>
                <article className="generalInfo">
                    <div>
                        <h1>{props.name}</h1>
                        <p className="tp-rest">{props.typeOfPlace}</p>
                        <p className='open-rest'>{props.workHours}</p>
                        <p className='address-rest'>{props.address}</p>
                    </div>
                    <span className="ratingStar"><i className="fa-solid fa-star"/> {props.rating}</span>
                </article>
             </div>
        </Link>
    )
}
FoodPlace.defaultProps={
    name: "Restaurant",
    typeOfPlace: "...",
    workHours:"...",
    address:"...",
    rating:0
}
export default FoodPlace 
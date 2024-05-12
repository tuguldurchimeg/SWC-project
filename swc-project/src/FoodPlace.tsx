import React from 'react'
import './styles/foodplace.css'
import foodplace from './assets/burgerking.png'
interface FoodPlaceProps {
    name: string;
    typeOfPlace: string;
    workHours: string;
    address: string;
    rating: number;
}
function FoodPlace(props:FoodPlaceProps){

    return(
        <div className="restaurant">
					<div className="likeIcon"><i className="fa-solid fa-heart"/></div>
					<img src={foodplace} alt="Burger King"/>
					<article className="generalInfo">
						<div>
                        <h1>{props.name}</h1>
                        <p>{props.typeOfPlace}</p>
                        <p>{props.workHours}</p>
                        <p>{props.address}</p>
						</div>
						<span className="ratingStar"><i className="fa-solid fa-star"/> {props.rating}</span>
					</article>
					
		</div>
    )
}
export default FoodPlace 
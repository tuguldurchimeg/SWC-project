import React from 'react'
import './styles/foodplace.css'
import foodplace from './assets/burgerking.png'
import { Link } from 'react-router-dom';
interface FoodPlaceProps {
    name: string;
    typeOfPlace: string;
    workHours: string;
    address: string;
    rating: number;
}

function FoodPlace(props:FoodPlaceProps){
    const getData=()=>{
        
    }
    return(
        <Link to="/Restaurant">
            <div className="restaurant">
                <div className="likeIcon"><button className="fa-solid fa-heart" onClick={getData}/></div>
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
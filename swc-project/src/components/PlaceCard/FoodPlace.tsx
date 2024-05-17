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
    const getData=()=>{
        
    }
    return(
        <Link to={`Place/${props.id}`}>
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
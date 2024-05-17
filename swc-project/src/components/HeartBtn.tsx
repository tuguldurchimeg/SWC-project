import { useState } from "react"
import axios from "axios";
interface HeartBtnProps {
    type: string;
    item_id: string;
}

export default function HeartBtn(props:HeartBtnProps){
    const [clicked, setClick] = useState(false);
    const updateBtn = (e:any) => {
        e.preventDefault();
        e.stopPropagation();
        setClick(!clicked);
        if(clicked){
            if(props.type == "food"){
                axios.post('http:localhost:5000/saveditems', 
                            { user_id: 'John Doe', 
                              food_id: props.item_id,
                              place_id: null
                            });
            }
            else{
                axios.post('http:localhost:5000/saveditems', 
                            { user_id: 'John Doe', 
                              food_id: null,
                              place_id: props.item_id
                            });
            }
        }
        else{
            axios
                .delete(`${`http:localhost:5000/saveditems/${props.item_id}`}/1`)
                .then(() => {
                    alert("Item deleted!");
                });
        }
    }
    
    return(
        <>
            {clicked ? (
                <button onClick={updateBtn} className="fa-solid fa-heart clicked" />
            ) : (
                <button onClick={updateBtn} className="fa-regular fa-heart" />
            )}
        </>
    )
}
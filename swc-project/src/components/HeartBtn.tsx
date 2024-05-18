import { useState } from "react"
import axios from "axios";
import { useAuth } from "../AuthProvider";
interface HeartBtnProps {
    type: string;
    item_id: string;
}

export default function HeartBtn(props:HeartBtnProps){
    const auth = useAuth();
    const [clicked, setClick] = useState(false);
    const updateBtn = (e:any) => {
        e.preventDefault();
        e.stopPropagation();
        setClick(!clicked);
        if(!clicked){
            if(props.type == "food"){
                axios.post("http://localhost:5000/saveditems", {
                    user_id: auth.user?.user_id,
                    food_id: props.item_id,
                    place_id: null
                })
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
            }
            else{
                axios.post("http://localhost:5000/saveditems", {
                    user_id: auth.user?.user_id,
                    food_id: null,
                    place_id: props.item_id
                })
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
            }
        }
        else{
            axios.delete(`http://localhost:5000/saveditems/${props.item_id}`)
            .then(() => {
                console.log("Хадгалсан элементийг хаслаа!");
            })
            .catch(error => {
                console.error('Error:', error);
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
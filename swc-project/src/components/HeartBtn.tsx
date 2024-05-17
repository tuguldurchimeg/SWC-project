import { useState } from "react"

export default function HeartBtn(){
    const [clicked, setClick] = useState(false);
    const updateBtn = (e:any) => {
        e.preventDefault();
        e.stopPropagation();
        setClick(!clicked)
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
 import "./filterbar.css"
 import FilterCard from "./FilterCard"
 
 export default function FilterBar(){
    const handleClick = (e:any) => {
        // e.FilterCard.style.display = "block";
    }
    return(
        <>
            <div className="fltr-bar" onClick={(e) => handleClick(e)}>
                <button>Filter</button>
            </div>
        </>
    )
 }
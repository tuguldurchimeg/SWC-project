import React, {useEffect, useState} from 'react'
import FoodPlace from "./FoodPlace"
import "./styles/foodplace.css"

function Home(){
    const [data, setData] = useState<any[]>([]);
    
    const fetchData = async () => {
        try {
            const response = await fetch('data.json');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <main>
            <h1>Санал болгох</h1>
            <div className="restaurants">
                {data.map((item, index) => (
                    <FoodPlace 
                        key={index}
                        name={item.name}
                        typeOfPlace={item.typeOfPlace}
                        workHours={item.workHours}
                        address={item.address}
                        rating={item.rating}
                    />
                ))}
                <FoodPlace/>
            </div>
        </main>
    );
}
export default Home
import React, {useEffect, useState} from 'react'
import FoodPlace from "./components/PlaceCard/FoodPlace"
import background from './assets/backgroundoflogin.svg'
import "./styles/home.css"
import Footer from "./Footer"
import Header from "./Header"

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
        <>
            <Header/>
            <main>
            <nav className='home'>
                <h1></h1>
                <ul className="search-bar">
                    <li>
                        <select className="fltr-dist">
                            <option>Дүүрэг</option>
                            <option>Дүүрэг</option>
                            <option>Дүүрэг</option>
                            <option>Дүүрэг</option>
                            <option>Дүүрэг</option>
                            <option>Дүүрэг</option>
                        </select>
                    </li>
                    <li >
                        <select className="fltr-type">
                            <option>Төрөл</option>
                            <option>Төрөл</option>
                            <option>Төрөл</option>
                            <option>Төрөл</option>
                            <option>Төрөл</option>
                        </select>
                    </li>
                    <li className="search-button-background" id="search">
                        <button className="search-btn">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </li>
                </ul>
            </nav>
            <ul className="listStyle">
                  <li><div className="fltr-byTp" id="restaurant">Ресторан</div></li>
                  <li><div className="fltr-byTp">Цайны газар</div></li>
                  <li><div className="fltr-byTp">Түргэн хоол</div></li>
                  <li><div className="fltr-byTp">Буфет</div></li>
            </ul>
            <h1 className='ttl-rec'>Санал болгох</h1>
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
                <FoodPlace/>
                <FoodPlace/>
                <FoodPlace/>
                <FoodPlace/>
            </div>
            </main>
            <Footer/>

        </>
        
    );
}
export default Home
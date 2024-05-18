import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import FoodPlace from "./components/PlaceCard/FoodPlace"
import background from './assets/backgroundoflogin.svg'
import "./styles/home.css"
import Footer from "./Footer"
import Header from "./Header"
import Select from "react-select"
import axios from "axios"

function Home(){
    const districtOptions = [
        { label: 'Сүхбаатар', value: 'Сүхбаатар' },
        { label: 'Баянзүрх', value: 'Баянзүрх' },
        { label: 'Хан-Уул', value: 'Хан-Уул' },
        { label: 'Чингэлтэй', value: 'Чингэлтэй' },
        { label: 'Баянгол', value: 'Баянгол' },
    ];
    const typeOptions = [
        { label: 'Солонгос', value: 'Солонгос' },
        { label: 'Хятад', value: 'Хятад' },
        { label: 'Монгол', value: 'Монгол' },
        { label: 'Европ', value: 'Европ' },
        { label: 'Бусад', value: 'Бусад' },
    ];
    const customTheme = (theme:any) => ({
        ...theme,
        borderRadius: 20,
        colors: {
          ...theme.colors,
          primary25: 'lightblue',
          primary: 'darkblue', 
        },
    });

    const [data, setData] = useState<any[]>([]);
    const [filterDistrict, setDistrictFilter] = useState<string>('');;
    const [filterType, setTypeFilter] = useState<string>('');
    const [filteredResults, setFilteredResults] = useState<any[]>([]);
    
    const fetchData = async () => {
        axios.get(`http://localhost:5000/places`).then((response) => {
            setData(response.data);
            setFilteredResults(response.data);
        });        
    }
    useEffect(() => {
        fetchData();
    }, []);

    const searchPlaces = () => {
        const filteredData = data.filter((item) => {
            const matchesDistrict = filterDistrict ? item.p_address.toLowerCase().includes(filterDistrict.toLowerCase()) : true;
            const matchesType = filterType ? item.p_type.toLowerCase() === filterType.toLowerCase() : true;
            if(matchesDistrict && matchesType)
                return item;
        });
        setFilteredResults(filteredData);
    }
    return (
        <>
            <Header/>
            <main>
            <nav className='home'>
                <h1></h1>
                <ul className="search-bar">
                    <li>
                        <Select className="fltr-dist"
                            options={districtOptions}
                            theme={customTheme}
                            onChange={(opt) => setDistrictFilter(opt?.value || '')}
                        />
                    </li>
                    <li >
                        <Select className="fltr-type"
                            options={typeOptions}
                            theme={customTheme}
                            onChange={(opt) => setTypeFilter(opt?.value || '')}
                        />
                    </li>
                    <li>
                        <Link to={`/Result?dist=${filterDistrict}&tp=${filterType}`}>
                            <button className="search-btn" onClick={()=> searchPlaces()}>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </Link>
                    </li>
                </ul>
            </nav>
            <ul className="listStyle">
                  <li onClick={() => {setTypeFilter("Монгол"); searchPlaces()}}>
                    <img src="src/assets/mongolia.png" alt="" />
                    <div className="fltr-byTp" id="restaurant">Монгол</div>
                  </li>
                  <li onClick={() => {setTypeFilter("Хятад"); searchPlaces()}}>
                    <img src="src/assets/china.png" alt="" />
                    <div className="fltr-byTp">Хятад</div>
                  </li>
                  <li onClick={() => {setTypeFilter("Солонгос"); searchPlaces()}}>
                    <img src="src/assets/korea.png" alt="" />
                    <div className="fltr-byTp">Солонгос</div>
                  </li>
                  <li onClick={() => {setTypeFilter("Европ"); searchPlaces()}}>
                    <img src="src/assets/europa.png" alt="" />
                    <div className="fltr-byTp">Европ</div>
                  </li>
            </ul>
            <div className="restaurants">
                {filteredResults.map((item, index) => (
                    <FoodPlace 
                        key={index}
                        id={item.id}
                        name={item.p_name}
                        typeOfPlace={item.p_type}
                        workHours={item.openhours}
                        address={item.p_address}
                        rating={item.totalrate}
                    />
                ))}
            </div>
            </main>
            <Footer/>

        </>
        
    );
}
export default Home
import React, {useEffect, useState} from 'react'
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
        console.log(filterDistrict);
        console.log(filterType);
        const filteredData = data.filter((item) => {
            const matchesDistrict = filterDistrict ? item.p_address.toLowerCase().includes(filterDistrict.toLowerCase()) : true;
            const matchesType = filterType ? item.p_type.toLowerCase() === filterType.toLowerCase() : true;
            return matchesDistrict && matchesType;
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
                    <li >
                        <button className="search-btn" onClick={()=> searchPlaces()}>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </li>
                </ul>
            </nav>
            <ul className="listStyle">
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 512 512">
                        <path fill="none" stroke="#a5a5a5" strokeLinejoin="round" strokeWidth="30" d="m57.49 47.74l368.43 368.43a37.28 37.28 0 0 1 0 52.72a37.29 37.29 0 0 1-52.72 0l-90-91.55a32 32 0 0 1-9.2-22.43v-5.53a32 32 0 0 0-9.52-22.78l-11.62-10.73a32 32 0 0 0-29.8-7.44a48.53 48.53 0 0 1-46.56-12.63l-85.43-85.44C40.39 159.68 21.74 83.15 57.49 47.74Z" />
                        <path fill="none" stroke="#a5a5a5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="30" d="m400 32l-77.25 77.25A64 64 0 0 0 304 154.51v14.86a16 16 0 0 1-4.69 11.32L288 192m32 32l11.31-11.31a16 16 0 0 1 11.32-4.69h14.86a64 64 0 0 0 45.26-18.75L480 112m-40-40l-80 80M200 368l-99.72 100.28a40 40 0 0 1-56.56 0h0a40 40 0 0 1 0-56.56L128 328" />
                    </svg>
                    <div className="fltr-byTp" id="restaurant">Ресторан</div>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 512 512">
                        <path fill="none" stroke="#a5a5a5" strokeLinecap="round" strokeMiterlimit={15} strokeWidth={30} d="M322 416c0 35.35-20.65 64-56 64H134c-35.35 0-56-28.65-56-64m258-80c17.67 0 32 17.91 32 40h0c0 22.09-14.33 40-32 40H64c-17.67 0-32-17.91-32-40h0c0-22.09 14.33-40 32-40" />
                        <path fill="none" stroke="#a5a5a5" strokeLinecap="round" strokeMiterlimit={15} strokeWidth={30} d="M344 336H179.31a8 8 0 0 0-5.65 2.34l-26.83 26.83a4 4 0 0 1-5.66 0l-26.83-26.83a8 8 0 0 0-5.65-2.34H56a24 24 0 0 1-24-24h0a24 24 0 0 1 24-24h288a24 24 0 0 1 24 24h0a24 24 0 0 1-24 24ZM64 276v-.22c0-55 45-83.78 100-83.78h72c55 0 100 29 100 84v-.22M241 112l7.44 63.97" />
                        <path fill="none" stroke="#a5a5a5" strokeLinecap="round" strokeMiterlimit={15} strokeWidth={30} d="M256 480h139.31a32 32 0 0 0 31.91-29.61L463 112" />
                        <path fill="none" stroke="#a5a5a5" strokeLinecap="round" strokeLinejoin="round" strokeWidth={30} d="m368 112l16-64l47-16" />
                        <path fill="none" stroke="#a5a5a5" strokeLinecap="round" strokeMiterlimit={15} strokeWidth={30} d="M224 112h256" />
                    </svg>
                    <div className="fltr-byTp">Түргэн хоол</div>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24">
                        <path fill="#a5a5a5" d="M6.616 20q-.667 0-1.141-.475T5 18.386v-8.077q0-.384.172-.727t.474-.565l5.385-4.058q.423-.324.966-.324t.972.324l5.385 4.057q.303.222.474.566q.172.343.172.727v8.077q0 .666-.475 1.14t-1.14.475zm0-1h10.769q.269 0 .442-.173t.173-.442v-8.077q0-.154-.067-.28t-.183-.22l-5.384-4.039q-.154-.134-.366-.134t-.365.134L6.25 9.808q-.115.096-.183.22t-.067.28v8.077q0 .269.173.442t.443.173m4.115-1.654q.18 0 .302-.121q.12-.121.12-.302v-2.961q.53 0 .9-.37t.37-.9v-2.115q0-.18-.121-.302q-.121-.121-.302-.121t-.302.121t-.121.302v2.115h-.423v-2.115q0-.18-.121-.302q-.121-.121-.302-.121t-.302.121t-.121.302v2.115h-.423v-2.115q0-.18-.121-.302q-.122-.121-.302-.121t-.303.121q-.12.121-.12.302v2.115q0 .53.37.9t.899.37v2.961q0 .18.12.302q.122.121.303.121m3.384 0q.181 0 .302-.121t.121-.302v-6.22q0-.232-.16-.39t-.395-.16q-.577 0-.857.53q-.28.529-.28 1.163v1.728q0 .345.247.546t.56.265h.04v2.538q0 .18.12.302q.121.121.302.121" />
                    </svg>
                    <div className="fltr-byTp">Цайны газар</div>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24">
                        <path fill="#a5a5a5" fillRule="evenodd" d="M20 11v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zM6 11v7h12v-7zm5-5V5a1 1 0 0 1 2 0v1h6a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2z"></path>
                    </svg>
                    <div className="fltr-byTp">Буфет</div>
                  </li>
            </ul>
            <h1 className='ttl-rec'>Санал болгох</h1>
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
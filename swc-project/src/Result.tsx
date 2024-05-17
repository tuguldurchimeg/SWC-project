import RestCard from "./components/PlaceCard/RestCard"
import FilterCard from "./components/Filter/FilterCard"
import FilterBar from "./components/Filter/FilterBar"
import './styles/Result.css'
import Header from "./Header"
import Footer from "./Footer"
import axios from "axios"
import { useEffect, useState } from "react"
import { useSearchParams } from 'react-router-dom';

export default function Result(){
    const [searchParams, setSearchParams] = useSearchParams();
    const dist = searchParams.get('dist');
    const tp = searchParams.get('tp');

    const [data, setData] = useState<any[]>([]);
    const [filterDistrict, setDistrictFilter] = useState<string>(dist || '');
    const [filterType, setTypeFilter] = useState<string>(tp || '');
    const [filteredResults, setFilteredResults] = useState<any[]>([]);
    
    const searchPlaces = () => {
        const filteredData = data.filter((item) => {
            const matchesDistrict = filterDistrict ? item.p_address.toLowerCase().includes(filterDistrict.toLowerCase()) : true;
            const matchesType = filterType ? item.p_type.toLowerCase() === filterType.toLowerCase() : true;
            if(matchesDistrict && matchesType)
                return item;
        });
        setFilteredResults(filteredData);
    }

    const fetchData = async () => {
        axios.get(`http://localhost:5000/places`).then((response) => {
            setData(response.data);
            setFilteredResults(response.data);
        });        
    }
    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        searchPlaces();
    }, [data, filterDistrict, filterType]);

    return(
        <>
            <Header/>
            <main className="rslt-main-container">
                <FilterCard />
                <FilterBar />
                <section className="rest-cards">
                    <h2 className="ttl-result">{filterDistrict} Дүүрэг Дэх {filterType} Хоолны Газрууд</h2>
                    <span className="total-result">Хайлтын илэрц - 13</span>
                    <div>
                        {filteredResults.map((item, index) => (
                            <RestCard 
                                key={index}
                                id={item.id}
                                name={item.p_name}
                                typeOfPlace={item.p_type}
                                workHours={item.openhours}
                                address={item.p_address}
                                rating={item.totalrate}
                                desc={item.description}
                            />
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
        
    )
}
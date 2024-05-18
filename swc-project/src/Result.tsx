import RestCard from "./components/PlaceCard/RestCard"
import FilterCard from "./components/Filter/FilterCard"
import FilterBar from "./components/Filter/FilterBar"
import './styles/Result.css'
import Header from "./Header"
import Footer from "./Footer"
import axios from "axios"
import { useEffect, useState } from "react"
import { useSearchParams, useNavigate } from 'react-router-dom';

export default function Result(){
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const dist = searchParams.get('dist');
    const tp = searchParams.get('tp');

    const [data, setData] = useState<any[]>([]);
    const [filterDistrict, setDistrictFilter] = useState<string>(dist || '');
    const [filterType, setTypeFilter] = useState<string>(tp || '');
    const [filterRate, setRateFilter] = useState<string>('');
    const [filterHour, setHourFilter] = useState<string>('');
    const [filteredResults, setFilteredResults] = useState<any[]>([]);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    function isCurrentTimeInRange(timeRangeString: string): boolean {
        // Split the time range string into start and end times
        const [startTimeString, endTimeString] = timeRangeString.split("-");
    
        // Split the start and end time strings into hours and minutes
        const [startHours, startMinutes] = startTimeString.split(":").map(Number);
        const [endHours, endMinutes] = endTimeString.split(":").map(Number);
    
        // Get the current time
        const now = new Date();
        const currentHours = now.getHours();
        const currentMinutes = now.getMinutes();
    
        // Convert the current time, start time, and end time into minutes
        const currentTimeInMinutes = currentHours * 60 + currentMinutes;
        const startTimeInMinutes = startHours * 60 + startMinutes;
        const endTimeInMinutes = endHours * 60 + endMinutes;
    
        // Check if the current time falls within the range of the start and end times
        return currentTimeInMinutes >= startTimeInMinutes && currentTimeInMinutes <= endTimeInMinutes;
    }
        
    const searchPlaces = () => {
        const tp = searchParams.get('tp') || '';
        const rate = searchParams.get('rating') || '';
        const hours = searchParams.get('other') || '';
        setTypeFilter(tp);
        setRateFilter(rate);
        setHourFilter(hours);
    
        const filteredData = data.filter((item) => {
            const matchesDistrict = filterDistrict ? item.p_address.toLowerCase().includes(filterDistrict.toLowerCase()) : true;
            const matchesType = filterType ? item.p_type.toLowerCase() === filterType.toLowerCase() : true;
            const matchesRate = filterRate ? parseInt(item.totalrate, 10) === parseInt(filterRate, 10) : true;
            const matchesHour = filterHour ? isCurrentTimeInRange(item.openhours) : true;
            
            if(matchesDistrict && matchesType && matchesRate && matchesHour)
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
    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
    
      
    return(
        <>
            <Header/>
            <main className="rslt-main-container">
                <div>
                    {(windowWidth < 1300) ? <FilterBar />: <FilterCard/>}
                    <button onClick={()=> searchPlaces()}>Шүүх</button>
                </div>
                <section className="rest-cards">
                    <h2 className="ttl-result">{filterDistrict} Дүүрэг Дэх {filterType} Хоолны Газрууд</h2>
                    <span className="total-result">Хайлтын илэрц - {filteredResults.length}</span>
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
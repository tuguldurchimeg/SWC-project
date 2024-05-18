import './styles/saved.css'
import ToggleSwitch from './components/ToggleSwitchButton/ToggleSwitch'
import FoodCard from './components/Foodcard/FoodCard'
import Header from "./Header"
import Footer from "./Footer"
import FoodPlace from './components/PlaceCard/FoodPlace'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useAuth } from './AuthProvider'

export default function Saved(){
    const auth = useAuth();
    const [data, setData] = useState<any[]>([]);
    const [placesData, setPlacesData] = useState<any[]>([]);
    const [foodsData, setFoodsData] = useState<any[]>([]);
    const [state, setState] = useState<string>("places");

    // saveditems хүснэгтээс бүх хадгалсан өгөгдлүүдийг авна
    const fetchData = async () => {
        axios.get(`http://localhost:5000/saveditems/${auth.user?.user_id}`).then((response) => {
            setData(response.data);
        });        
    }
    useEffect(() => {
        fetchData();
    }, []);
    
    // Хадгалсан хоолнуудын өгөгдлийг fetch хийгээд filter map хийнэ    
    useEffect(() => {
        // Filter places data
        const filteredPlaces = data.filter(item => item.place_id !== null);

        // Fetch data for each place
        const fetchPlacesData = async () => {
            try {
                const promises = filteredPlaces.map(async place => {
                    const response = await axios.get(`http://localhost:5000/places/${place.place_id}`);
                    return response.data;
                });
                const resolvedData = await Promise.all(promises);
                setPlacesData(resolvedData);
            } catch (error) {
                console.error('Error fetching places data:', error);
            }
        };

        if (filteredPlaces.length > 0) {
            fetchPlacesData();
        }
    }, [data]);
    // Хадгалсан газруудын өгөгдлийг fetch хийгээд filter map хийнэ    
    useEffect(() => {
        // Filter food items data
        const filteredFoods = data.filter(item => item.food_id !== null);

        // Fetch data for each food item
        const fetchFoodsData = async () => {
            try {
                const promises = filteredFoods.map(async food => {
                    const response = await axios.get(`http://localhost:5000/foods/${food.food_id}`);
                    return response.data;
                });
                const resolvedData = await Promise.all(promises);
                setFoodsData(resolvedData);
            } catch (error) {
                console.error('Error fetching foods data:', error);
            }
        };

        if (filteredFoods.length > 0) {
            fetchFoodsData();
        }
    }, [data]);
    // Хадгалсан item -ийн төрлийг солиход (switch) контентыг дагаж солих
    const handleToggleChange = (isChecked:boolean) => {
        setState(isChecked ? "foods" : "places");
      };
     
    return(
        <>
            <Header/>
            <main className="saved-container">
                    <ToggleSwitch onChange={handleToggleChange}/>
                    {state != "places" ? <section className='saved-foods items'>
                        {foodsData.map((item, index) => (
                                <FoodCard 
                                    key={index}
                                    id={item.id}
                                    name={item.f_name}
                                    portion={item.portion}
                                    calories={item.calories}
                                    price={item.price}
                                    rating={item.totalRate}
                                />
                        ))}

                    </section> 
                    : <section className='saved-places items'>
                        {placesData.map((item, index) => (
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
                    </section>}
            </main>
            <Footer />
        </>
    )
}
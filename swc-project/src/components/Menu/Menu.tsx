import { useAuth } from "../../AuthProvider";
import FoodCard from "../Foodcard/FoodCard"
import './Menu.css'
import axios from "axios"
import { useState, useEffect } from "react"
import { useParams} from 'react-router-dom'

export default function Menu() {
    const [data, setData] = useState<any[]>([]);
    const auth = useAuth();
    const params = useParams();
    const fetchData = async () => {
        axios.get(`http://localhost:5000/foods/${params.p_id}`).then((response) => {
            setData(response.data);
        });        
    }
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <section className="menu">
            <div className="ttl-menu">
                <h2>MENU</h2>
                <button className="btn-all-menu">Бүгдийг харах</button>
            </div>
            <div className='foods'>
                {data.map((item, index) => (
                        <FoodCard 
                        id= {item.id}
                        name= {item.f_name}
                        portion= {item.portion}
                        calories= {item.calories}
                        price= {item.price}
                        rating= {item.totalRate}
                    />
                    ))}
            </div>
      </section>
    )
}
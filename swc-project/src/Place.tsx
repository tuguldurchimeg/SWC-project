 import './styles/App.css'
 import './styles/Place.css'
 import Menu from "./components/Menu/Menu"
 import Comments from "./components/Comment/Comments"
 import HeartBtn from "./components/HeartBtn"
 import Footer from "./Footer"
import Header from "./Header"
import { useParams} from 'react-router-dom'
import {useState, useEffect} from "react"
import axios from "axios"

 export default function Place(){
    const params = useParams();
    interface PlaceData {
        id: string;
        p_name: string;
        link: string;
        phone: number;
        p_address: string;
        p_type: string;
        openhours: string;
        capacity: number;
        description: string;
        totalrate: number;
    }
    const [data, setData] = useState<PlaceData[]>([]);
    
    const fetchData = async () => {
        axios.get(`http://localhost:5000/places/${params.p_id}`).then((response) => {
            setData(response.data);
        });        
    }

    useEffect(() => {
        fetchData();
    }, []);
    if(!data) return null;

    return (
        <>
            <Header/>
            <main className="main-container">
                <section className="intro">
                    <img src="https://source.unsplash.com/random/?restaurant&1" alt="restaurant img" className="img-back"/>
                    <div className="imgs-res">
                        <img src="https://source.unsplash.com/random/?restaurant&1" alt="restaurant img" className="img-res" id="img-1"/>
                        <div>
                            <img src="https://source.unsplash.com/random/?restaurant&2" alt="restaurant img" className="img-res" id="img-2"/>
                            <img src="https://source.unsplash.com/random/?restaurant&3" alt="restaurant img" className="img-res" id="img-3"/>
                        </div>
                    </div>
                    <div className="text-info-res">
                        <div>
                            <h3 className="info-res-ttl">{data.p_name}</h3>
                            <HeartBtn />
                        </div>
                        <div className="info-res">{data.p_type} ресторан</div>
                        <div className="info-res">{data.openhours}</div>
                        <div className="info-res capacity">Багтаамж - {data.capacity}</div>

                        <div className="totalRate">
                            <i className="fa-solid fa-star"></i>
                            <span>{data.totalrate}</span>
                        </div>       
                    </div>
                </section>
                <section className="infos-sec">
                    <ul>
                        <li className="info-ad"><span id="info1">Өлгүүр</span></li>
                        <li className="info-ad"><span id="info2">Wifi</span></li>
                        <li className="info-ad"><span id="info3">Vip</span></li>
                        <li className="info-ad"><span id="info4">Зогсоол</span></li>
                        <li className="info-ad"><span id="info5">Wifi</span></li>
                    </ul>
                </section>
                <section className="main">
                        <Menu />
                        <div>
                            <Comments />
                            <section className="contact-sec">
                                <div>
                                    <a href="#" id="website">{data.link}</a>
                                    <a href="tel:+97699761430" id="phone-rest">+976 {data.phone}</a>
                                    <a href="#" id="address-rest">{data.p_address} </a>
                                </div>
                            </section>
                        </div>         
                </section>       
            </main>
        <Footer/>
        </>
    )
 }
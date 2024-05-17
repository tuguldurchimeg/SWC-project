 import Menu from "./components/Menu/Menu"
 import './styles/App.css'
 import './styles/Place.css'
 import Comments from "./components/Comment/Comments"
 import HeartBtn from "./components/HeartBtn"
 import {Route, Link, Routes, useParams} from 'react-router-dom'
 import {useState, useEffect} from "react"
 import Footer from "./Footer"
import Header from "./Header"

 export default function Place(){
    const[places, setPlaces] = useState([]);
    const params = useParams();
    const [data, setData] = useState<any[]>([]);
    
    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:5000/places/${params.p_id}`);
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
    console.log(data);

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
                            <h3 className="info-res-ttl">{data.id}</h3>
                            <HeartBtn />
                        </div>
                        <div className="info-res">Chinese Restaurant</div>
                        <div className="info-res">10:00 - 18:00</div>
                        <div className="info-res capacity">Багтаамж - 120</div>

                        <div className="totalRate">
                            <i className="fa-solid fa-star"></i>
                            <span>4.3</span>
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
                                    <a href="#" id="website">jadegarden.mn</a>
                                    <a href="tel:+97699761430" id="phone-rest">+976 99761430</a>
                                    <a href="#" id="address-rest">Jade Garden, Novotel , Baga toiruu, Ulaanbaatar </a>
                                </div>
                            </section>
                        </div>         
                </section>       
            </main>
        <Footer/>
        </>
    )
 }
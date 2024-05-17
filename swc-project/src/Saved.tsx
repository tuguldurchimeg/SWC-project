import './styles/saved.css'
import ToggleSwitch from './components/ToggleSwitchButton/ToggleSwitch'
import FoodCard from './components/Foodcard/FoodCard'
import Header from "./Header"
import Footer from "./Footer"
import FoodPlace from './components/PlaceCard/FoodPlace'

export default function Saved(){
    return(
        <>
            <Header/>
            <main className="saved-container">
                    <ToggleSwitch />
                    <section className='saved-foods items'>
                        <FoodCard />
                        <FoodCard />
                        <FoodCard />
                        <FoodCard />
                        <FoodCard />
                        <FoodCard />
                        <FoodCard />

                    </section>
                    <section className='saved-places items'>
                        {/* <FoodPlace /> */}
                    </section>
            </main>
            <Footer />
        </>
    )
}
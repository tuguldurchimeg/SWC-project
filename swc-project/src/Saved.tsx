import './styles/saved.css'
import ToggleSwitch from './components/ToggleSwitchButton/ToggleSwitch'
import FoodCard from './components/Foodcard/FoodCard'

export default function Saved(){
    return(
        <main>
            <div>
                <ToggleSwitch />
                <section className='saved-items'>
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />

                </section>
            </div>
        </main>
    )
}
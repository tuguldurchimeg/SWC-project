import FoodCard from "../Foodcard/FoodCard"
import './Menu.css'

export default function Menu() {
    return (
        <section className="menu">
            <div className="ttl-menu">
                <h2>MENU</h2>
                <button className="btn-all-menu">Бүгдийг харах</button>
            </div>
            <div className='foods'>
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
            </div>
      </section>
    )
}
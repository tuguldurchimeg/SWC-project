import 'src/styles/Menu.css'
import FoodCard from "./FoodCard"

export default function Menu() {
    return (
        <section className="menu">
            <div className="ttl-menu">
                <h3 className="ttl">MENU</h3>
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
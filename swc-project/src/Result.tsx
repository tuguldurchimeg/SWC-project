import RestCard from "./components/RestaurantCard/RestCard"
import FilterCard from "./components/FilterCard/FilterCard"
import './styles/Result.css'

export default function Result(){
    return(
        <main className="rslt-main-container">
            <FilterCard />
            <section className="rest-cards">
                <h2 className="ttl-result">Хан-Уул Дүүрэг Дэх Солонгос Хоолны Газрууд</h2>
                <span className="total-result">Хайлтын илэрц - 13</span>
                <div>
                    <RestCard />
                    <RestCard />
                    <RestCard />
                    <RestCard />
                    <RestCard />
                </div>
            </section>
        </main>
    )
}
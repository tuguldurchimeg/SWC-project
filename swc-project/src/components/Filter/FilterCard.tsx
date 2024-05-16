import Filter from "./Filter"
import './filtercard.css'

export default function FilterCard(){
    return(
        <section className="card-fltr">
            <h3 className="ttl">Шүүлтүүр</h3>
            <div className="fltrs">
                <Filter />
                <Filter />
                <Filter />
            </div>
        </section>
    )
}

import Header from './Header'
import FoodCard from './FoodCard'
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <Header />

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
    </div>
  )
}

export default App

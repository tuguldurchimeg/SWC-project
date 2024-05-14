import './styles/header.css'
import logo from './assets/tastyFoodLogo.svg'
import { Link } from 'react-router-dom';
export default function Header() {
    return (
        <header>
              <nav className="navigationBar">
                <Link to="/">
                  <a href="#" ><img src={logo} alt="" style={{width:'150px'}}/></a>
                </Link>
                
                <div className="navButtons">
                  <Link to="/Saved">
                    <button>Хадгалсан</button>
                  </Link>
                  <Link to="/Login">
                    <button>Нэвтрэх</button>
                  </Link>
                </div>
              </nav>
          </header>
    );
  }
import './styles/header.css'
import logo from './assets/tastyFoodLogo.svg'
import { Link } from 'react-router-dom';
import { useAuth } from './AuthProvider';
export default function Header() {
    const auth = useAuth();
    console.log(auth.user?.username);
    return (
        <header>
              <nav className="navigationBar">
                <Link to="/Home">
                  <img src={logo} alt="" style={{width:'100px'}}/>
                </Link>
                
                <div className="navButtons">
                  
                  <button onClick={() => auth.logOut()}><i className="fa-solid fa-arrow-right-from-bracket"></i></button>
                  
                  <Link to="/Saved">
                    <button><i className="fa-solid fa-cart-shopping"></i></button>
                  </Link>
                  <label>{auth.user?.username}</label>
                </div>
              </nav>
          </header>
    );
  }
import './styles/header.css'

export default function Header() {
    return (
        <header>
              <nav className="navigationBar">
                <a href="#" ><img src="" alt=""/></a>
                <ul className="listStyle">
                  <li><a href="#">Ресторан</a></li>
                  <li><a href="#">Цайны газар</a></li>
                  <li><a href="#">Түргэн хоол</a></li>
                  <li><a href="#">Буфет</a></li>
                </ul>
                <div className="navButtons">
                  <button>Хадгалсан</button>
                  <button>Нэвтрэх</button>
                </div>
              </nav>
          </header>
    );
  }
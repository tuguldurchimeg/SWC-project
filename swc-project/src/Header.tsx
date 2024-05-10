import './styles/header.css'

export default function Header() {
    return (
      <div className='header'>
        <img src="/vite.svg" className="logo" alt="Vite logo" />
        <div className='nav-elmnts'>
            <ul>
                <li className="categories">Солонгос ресторан</li>
                <li className="categories">Ресторан</li>
                <li className="categories">Хятад ресторан</li>
                <li className="categories">Түргэн хоол</li>
            </ul>
        </div>
        <div>
            <button id="btn-save">Хадгалах</button>
            <button id="btn-login">Нэвтрэх</button>
        </div>
        
      </div>
    );
  }
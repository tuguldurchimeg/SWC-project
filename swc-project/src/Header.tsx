import './styles/header.css'

export default function Header() {
    return (
      <div className='header'>
        <img src="" className="logo" alt="Home logo" />
        <div className='nav-elmnts'>
            <ul>
                <li className="categories">Солонгос ресторан</li>
                <li className="categories">Ресторан</li>
                <li className="categories">Хятад ресторан</li>
                <li className="categories">Түргэн хоол</li>
            </ul>
        </div>
        <div>
            <button id="btn saved">Хадгалах</button>
            <button id="btn login">Нэвтрэх</button>
        </div> 
      </div>
    );
  }
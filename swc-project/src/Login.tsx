import React, {useState, FormEvent,useEffect} from 'react';
import logo from './assets/tastyFoodLogo.svg'
import './styles/Login.css'
import background from './assets/backgroundoflogin.svg'
import { Link } from 'react-router-dom';
import { useAuth } from './AuthProvider';
const  Login :React.FC= () =>{
    const loginInterfaceStyle = {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        margin:0
    };
    const [input, setInput] = useState({ username: "", password: "" });
    const [message,setMessage]=useState('');
    const auth = useAuth();
    const handleSubmit = (e:FormEvent) => {
      e.preventDefault();
      if (input.username !== "" && input.password !== "") {
        auth.loginAction(input);
        return;
      }
      alert("Нэвтрэх нэр, нууц үгээ оруулна уу!");
    };
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;
        setInput(prevInput => ({ ...prevInput, [id]: value }));
      };
    
    return(
            <div  className="backgroundImage" style={loginInterfaceStyle}>
                    {message && <p>{message}</p>}
                <div className="loginInterface">
                  <img src={logo} alt="" style={{width:'150px'}}/>
                  <form   onSubmit={handleSubmit}>
                      <input type="text" placeholder='Нэвтрэх нэр' id="username" value={input.username}
            onChange={handleChange} autoComplete="username" />
                      <input type="password" placeholder='Нууц үг' id="password" value={input.password}
            onChange={handleChange} autoComplete="current-password" />

                      <button className="logButton" type="submit">Нэвтрэх</button>
                  </form>
                  <Link to="/Register">
                        <button className="regButton">Бүртгүүлэх</button>
                  </Link>
                     
               </div>
            </div>            
    )
}
export default Login
import React, {useState, FormEvent,useEffect} from 'react';
import logo from './assets/tastyFoodLogo.svg'
import './styles/Login.css'
import background from './assets/backgroundoflogin.svg'
import axios from 'axios'
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
const  Login :React.FC= () =>{
    const loginInterfaceStyle = {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        margin:0
    };
  
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [message,setMessage]=useState('');
    const[state,setState]=useState('');
    const navigate=useNavigate();
    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
    
        try {
          // Fetch user data from the API
          const response = await axios.get(`http://localhost:5000/users`);
          console.log(response);
          const users = response.data;
          console.log(users);
          // Check if the entered username and password match any user in the database
          const user = users.find((user: { username: string; password: string }) => user.username === username && user.password === password);
         
          if (user) {
            setMessage('Login successful!');
            navigate('/');
          } else {
            setMessage('Incorrect username or password. Please try again.');
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
          setMessage('An error occurred. Please try again later.');
        }
      };

    
    return(
            <div  className="backgroundImage" style={loginInterfaceStyle}>
                    {message && <p>{message}</p>}
                <div className="loginInterface">
                  <img src={logo} alt="" style={{width:'150px'}}/>
                  <form   onSubmit={handleSubmit}>
                      <input type="text" placeholder='Нэвтрэх нэр' id="username" value={username} onChange={(e) => setUsername(e.target.value)} autoComplete="username" />
                      <input type="password" placeholder='Нууц үг' id="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" />

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
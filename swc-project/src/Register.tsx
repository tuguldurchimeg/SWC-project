import React, {useState, FormEvent,useEffect} from 'react';
import logo from './assets/tastyFoodLogo.svg'
import './styles/Login.css'
import background from './assets/backgroundoflogin.svg'
import axios from 'axios'
import {useNavigate} from 'react-router-dom';
const  Register :React.FC= () =>{
    const loginInterfaceStyle = {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        margin:0
    };
  
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [phone,setPhone]=useState('');
    const [address,setAddress]=useState('');
    const [message,setMessage]=useState('');
    const[id,setID]=useState('');
    const[reg,setReg]=useState('');
    const navigate=useNavigate();


    const [user, setUser] = useState({
        id: '',
        username: '',
        password: '',
        phonenumber: '',
        address:''
      });
    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        try {
            const response = await axios.get('http://localhost:5000/allusers');
            const users = response.data;
      
            // Check if the entered username matches any user in the database
            const user = users.find(
              (user: { id: number; username: string; password: string; phone: string; address: string }) =>
                user.username.toLowerCase() === username.toLowerCase()
            );
      
            const newID = users.length + 1;
            setID(newID);
      
            if (user) {
              console.log('Бүртгэл амжилтгүй nevtreh ner davhardsan bn');
              setReg('0');
              setMessage('Username already exists');
            } else {
              setReg('1');
              try {
                const postResponse = await axios.post('http://localhost:5000/users', {
                  user_id: newID,
                  password:password,
                  username:username,
                  phone:phone,
                  address:address
                });
                if (postResponse.status === 201) {
                  setMessage('User created successfully');
                  navigate('/Login');
                } else {
                  setMessage('Failed to create user');
                }
              } catch (error) {
                console.error('Error inserting user data:', error);
                setMessage('Error inserting user data');
              }
            }
          } catch (error) {
            console.error('Error fetching user data:', error);
            setMessage('Error fetching user data');
          }
      };

    
    return(
            <div  className="backgroundImage" style={loginInterfaceStyle}>
                    {message && <p>{message}</p>}
                <div className="loginInterface">
                  <img src={logo} alt="" style={{width:'150px'}}/>
                  <form   onSubmit={handleSubmit}>
                      <input type="text" placeholder='Нэвтрэх нэр' id="username" value={username} onChange={(e) => setUsername(e.target.value)} autoComplete="username" />
                      <input type="password" placeholder='Нууц үг' id="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password"/>
                      <input type="text" placeholder="Утасны дугаар" id="phonenumber" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="phonenumber"/>
                      <input type="text" placeholder="Гэрийн хаяг" id="address" value={address} onChange={(e) => setAddress(e.target.value)} autoComplete="address"/>
                      <button className="logButton" type="submit">Бүртгүүлэх</button>
                  </form>
                      
               </div>
            </div>            
    )
}
export default Register
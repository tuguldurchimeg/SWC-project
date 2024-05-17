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
            // 
            const response = await axios.get(`http://localhost:5000/allusers`);
            console.log(response);
            const users = response.data;
            console.log(users);
            // Check if the entered username and password match any user in the database
            const user = users.find((user: { id:string,username: string,password:string,phone:string,address:string}) => user.username.toLowerCase === username.toLowerCase);
            const userCount=users.count();
            if (user) {
                console.log("Бүртгэл амжилтгүй");
                setReg('0');
            } else {
                console.log("Бүртгэл амжилттай");
                setReg('1');
            }
          } catch (error) {
            console.error('Error fetching user data:', error);
        
          }
          if(reg==='1')
          try{
            const response=await axios.post('/users',user);
          }catch(error){
                console.error('Error inserting user data:',error);
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
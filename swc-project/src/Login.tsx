import logo from './assets/tastyFoodLogo.svg'
import './styles/Login.css'
import background from './assets/backgroundoflogin.svg'
function Login(){
    const loginInterfaceStyle = {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        margin:0
    };
    return(

            <div  className="LoginInterface" style={loginInterfaceStyle}>
                <img src={logo} alt="" style={{width:'150px'}}/>
                <div className="LoginForm">
                    <div className="LoginOption">
                        <button className="logLabel">
                            <input type="radio" name="log" value="login" className="log" id='login'/>
                            <label htmlFor="login">Нэвтрэх</label>
                        </button>
                        <button className="logLabel">
                            <input type="radio" name="log"value="register" className="log" id='register'/>
                            <label htmlFor="register">Бүртгүүлэх</label>
                        </button>
                    </div>
                    
                    <div className="Forms">
                        <form  className="Forms-first" action="">
                            <input type="text" placeholder='Нэвтрэх нэр'/>
                            <input type="password" placeholder='Нууц үг'/>
                        </form>
                        <form className="Forms-second">
                            <input type="text" placeholder='Нэвтрэх нэр'/>
                            <input type="password" placeholder='Нууц үг'/>
                        </form>
                        
                    </div> 
                    <div className="buttons">
                        <button className="logButton">Нэвтрэх</button>
                        <button className="regButton">Бүртгүүлэх</button> 
                    </div>
                    
                </div>
            </div>  

    )
}
export default Login
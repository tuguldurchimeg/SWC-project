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
                        <button>Нэвтрэх</button>
                        <button>Бүртгүүлэх</button>
                    </div>
                    
                    <div className="Forms">
                        <form  className="Forms-first" action="">
                            <input type="text" placeholder='Нэвтрэх нэр'/>
                            <input type="text" placeholder='Нууц үг'/>
                        </form>
                        <form className="Forms-second">
                            <input type="text" placeholder='Нэвтрэх нэр'/>
                            <input type="text" placeholder='Нууц үг'/>
                        </form>
                        
                    </div> 
                    <button className="logButton">Нэвтрэх</button>
                        <button className="regButton">Бүртгүүлэх</button> 
                </div>
            </div>  

    )
}
export default Login
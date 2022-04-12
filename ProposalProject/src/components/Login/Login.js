import react,{useState} from 'react'
import "./Login.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Login = (setLoginUser) =>{ 
    const history = useHistory()
    

    const [ user ,setUser] = useState({
        email : "", 
        password : ""
})

const handleChange = e =>{
        const { name, value } = e.target
        setUser({  
            ...user,                            /*triple dot sprate operator contain all value and*/         
            [name]: value                       /*in this it will keep on changing the targeted field*/    
        })
}

const Login = () => {
    axios.post("http://localhost:9002/Login",user)
    .then( res => {
        alert(res.data.message)
        setLoginUser(res.data.user)
        history.push("/")
    })
}

    return (
          
        <div className='Login'>    
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} onChange = {handleChange} placeholder='Enter the Email'/>
            <input type="password" name="password" value={user.password} onChange = {handleChange} placeholder='Enter the Password'/>
             
             <div className='button' onClick={Login}>Login</div>  
            <div>or</div>           
            <div className="button" onClick={() => history.push ("/Register")}>Register </div>
            <div className="button" onClick={() => history.push ("/Home")}>Home </div>

        </div>
        
    );

}

export default Login  
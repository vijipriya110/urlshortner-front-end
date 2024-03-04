import Base from '../Base/Base';
import { useHistory } from 'react-router-dom';

function LoginPage({email, setEmail, password, setPassword}) {
    
    const history = useHistory();

   const handleLogin = async()=>{
    const userInfo = {
        email,
        password,
    }

    const res = await fetch (`https://mongoose-user-with-url.vercel.app/url/login`, {
    method :"POST",
    body : JSON.stringify(userInfo),
    headers:{
        "Content-Type":"application/json"
    }
   });
   const data = await res.json();
   console.log(data)
    localStorage.setItem("token", data.token)
    
    
    history.push("/urlshortner")
    setEmail("")
    setPassword("")
    
   }

  return (
    <div>
       <Base
       title = {"LoginPage"}
       description={"continue to login page"}
       >
        <h3>WELCOME BACK..!</h3>
        <div className="us-container">
        <div className="img">
          <img src="https://www.shutterstock.com/image-vector/man-key-near-computer-account-260nw-1499141258.jpg" alt="Login"/>
        </div>
        <div className="user">
       <input
        placeholder='Enter Email'
        type ="Email"
        value = {email}
        onChange={(e)=>setEmail(e.target.value)}
        /><br></br>
        
        <input
        placeholder='Enter Password'
        type ="password"
        value = {password}
        onChange={(e)=>setPassword(e.target.value)}
        /><br></br>
        
        <button type='submit' onClick={handleLogin}>Login</button><br></br>

        <button onClick={()=>history.push("/forgotpassword")}>Forget Password?</button><br/><br/>

        </div>
        </div>


       </Base>
        

        
       
        
    </div>
  )
}

export default LoginPage
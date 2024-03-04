import Base from '../Base/Base';
import { useHistory } from 'react-router-dom';

function ResetPassword({password,setPassword}) {
  
 const history = useHistory();

   const handleLogin = async()=>{
    const userInfo = {
       
        password
        
    }

    const res = await fetch(`https://mongoose-user-with-url.vercel.app/url/reset-new-password/:token`, {
    method :"POST",
    body : JSON.stringify(userInfo),
    headers:{
        "Content-Type":"application/json",
        
    }
   });
   const data = await res.json();
   console.log(data)
   history.push("/login")
        
   }

  return (
    <div>
       <Base
       title = {"resetPage"}
       description={"continue to login page"}
       >
        <h3>WELCOME BACK..!</h3>
        <div className="us-container">
        <div className="img">
          <img src="https://www.shutterstock.com/image-vector/man-key-near-computer-account-260nw-1499141258.jpg" alt="Login"/>
        </div>
        <div className="user">
       
        
        <input
        placeholder='Enter Password'
        type ="password"
        value = {password}
        onChange={(e)=>setPassword(e.target.value)}
        /><br></br>

        
        
        <button type='submit' onClick={handleLogin}>Submit</button><br></br>

        </div>
        </div>

       </Base>
      
    </div>
  )
}

export default ResetPassword
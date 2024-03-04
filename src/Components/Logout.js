import React from 'react'
import Base from '../Base/Base'
import { useHistory } from 'react-router-dom';

function Logout() {
    const history = useHistory();
    const handleLogout = async()=>{
        

    const res = await fetch(`https://mongoose-user-with-url.vercel.app/url/logout`, {
        method :"GET",
        headers:{
            "Content-Type":"application/json",
            
        }
   });
   const data = await res.json();
   console.log(data)
   if(!localStorage.getItem("token")){
    history.push("/login")
   }else{
    localStorage.clear()
   }

   localStorage.clear()
 
   history.push("/login")
    
   }
  return (
    <div>
        <Base
        title={"Logout page"}
        description={"want to signout here..!"}
        >
         <h3>WELCOME BACK..!</h3>

         <button type='submit' onClick={handleLogout}>Logout</button><br></br>

         
        </Base>
    </div>
  )
}

export default Logout
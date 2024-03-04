// import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import Base from '../Base/Base'
import { useEffect, useState } from 'react';
// import { useFormik } from "formik";
import { Link } from 'react-router-dom';

function URLShortner({title, setTitle, longurl, setLongurl}) {
  
    const history = useHistory()
    const [data, setData] = useState([])

    useEffect(()=>{
      const getuser = async () =>{
          const response = await fetch("https://mongoose-user-with-url.vercel.app/url/getuser", {
            method:"GET",
            headers :{
              "Content-Type":"application/json",
              "x-auth-token" : localStorage.getItem("token")
            }
          }); 
          const result = await response.json();
          console.log(result)
          if(result){
            setData(result)
          }
      }
      getuser();
      
    }, [] )
  
  const handleURLShortner = async()=>{
      const userInfo = {
          title,
          longurl
      }
    
    const response = await fetch ("https://mongoose-user-with-url.vercel.app/url/addurl",  {
    method:"POST",
    body:JSON.stringify(userInfo),
    headers :{
      "Content-Type":"application/json",
      "x-auth-token" : localStorage.getItem("token")
    }
  });
  const data = await response.json()
  console.log(data)
   

}
const HandleClick = async(shorturl)=>{
  const userInfo = {
     
      shorturl
  }

const response = await fetch ("https://mongoose-user-with-url.vercel.app/url/click",  {
method:"POST",
body:JSON.stringify(userInfo),
headers :{
  "Content-Type":"application/json",
  "x-auth-token" : localStorage.getItem("token")
}
});
const data = await response.json()
console.log(data)
}
    return(
      <Base
      title={"URLShortner"}
    description={"Here can short the URL"}
      >
      <div className="App">
        <h3>WELCOME BACK..!</h3>
        <div className="url-container">

         <div className="text-container">

          <input className='txt-field'
          placeholder='Enter Title'
          type ="text"
          value = {title}
          onChange={(e)=>setTitle(e.target.value)}
          /><br></br>
  
          <input className='txt-field'
          placeholder='Enter Longurl'
          type ="link"
          value = {longurl}
          onChange={(e)=>setLongurl(e.target.value)}
          /><br></br>
  
  
          
          <button type='submit' onClick={handleURLShortner}>Submit</button><br></br>
  
           
           </div>
           <div className='res-container'>
           <div className="row d-flex justify-content-center text-center">
          {data.length > 0 ? (
            data.map((urldata) => {
              return (
                <div key={urldata._id} className="col-lg-5 m-1 col-sm-12">
                  {/* <div
                    className="card border-success mb-3"
                    style={{ maxWidth: "30 vw" }}
                  > */}
                    <div className="result">
                      <h3>Title : {urldata.title}</h3>
                      <h5>
                        ShortUrl :
                        <a href={urldata.longurl} target="_Blank">
                          <span onClick={() => HandleClick(urldata.shorturl)}>
                            {urldata.shorturl}
                          </span>
                        </a>
                      </h5>
                      <h5>CreatedOn : <Link>{urldata.createdon}</Link></h5>
                      <h5> Clicks : {urldata.clicks}</h5>
                    </div>
                    
                  </div>
                
              );
            })
          ) : (
            <p className="text-danger fw-bold mt-5">
              Wait for data / Data Not available
            </p>
          )}
        </div>
          
        </div>
        </div>
      </div>
      
  
      </Base>
        )
  }
  


export default URLShortner
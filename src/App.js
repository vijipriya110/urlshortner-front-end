
import { Switch,Route } from 'react-router-dom';
import './App.css';
import DashBoard from './Components/DashBoard';
import LoginPage from './Components/LoginPage.js';
import SignUp from './Components/SignUp.js';
import Logout from './Components/Logout.js';
import ForgotPassword from './Components/ForgotPassword.js';
import ResetPassword from './Components/ResetPassword.js';
import { useState } from 'react';
import URLShortner from './Components/URLShortner.js';




function App() {
  
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [title, setTitle] = useState("")
  const [longurl, setLongurl] =useState("")
  

 
 
  return (
    <div className="App">

       <Switch>
        {/* Exact path first page to load */}

         <Route exact path="/">
             <DashBoard/>
         </Route>

          <Route path="/urlshortner">
            <URLShortner
            title={title}
            setTitle={setTitle}
            longurl={longurl}
            setLongurl={setLongurl}
            />
          </Route>
          
          <Route path="/login">
              <LoginPage
              email = {email}
              setEmail = {setEmail}
              password = {password}
              setPassword = {setPassword}
              />
          </Route>

          <Route path="/logout">
              <Logout/>
          </Route>

          <Route path="/forgotpassword">
              <ForgotPassword
              email={email}
              setEmail={setEmail}
              />
          </Route>
         
          <Route path="/resetpassword">
              <ResetPassword
              password = {password}
              setPassword = {setPassword}
              />
          </Route>

          <Route path="/signup">
              <SignUp
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              />
          </Route>

       </Switch>
    </div>
  );
}

export default App;
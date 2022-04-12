import React from 'react';
import './App.css';
import Login from './components/Login/Login';
import Register from './components/Registration/Register';
import Home from './components/Home/Home';
 import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';
 import {useState} from 'react'



function App() {

  const [user, setLoginUser] = useState({})
  
  return (
   
  
      <div className="App">
    <Router>
     <Switch>  
        
           <Route  exact path ="/">{
             user && user._id ? <Home /> :<Login setLoginUser={setLoginUser} />
           }
             
           </Route>



           <Route path ="/Login">
             <Login setLoginUser={setLoginUser}/> 
           </Route>
           <Route path ="/Register"> <Register /></Route>
           
         </Switch>
         </Router>
        
        
       
      
      
       
     
      </div>
    
  );
}

export default App;

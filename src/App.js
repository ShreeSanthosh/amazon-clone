import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';


function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      console.log("The user is >>>", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }

      else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    });
  }, [])

  return (
    <div>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={[<Header />,<Home />]} />
        <Route path="/checkout" element={[<Header />,<Checkout />]} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;




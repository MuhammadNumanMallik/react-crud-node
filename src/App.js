import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import Login from "./components/LoginAndSignup/Login";
import SignUp from "./components/LoginAndSignup/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";

function App() {
	return (
		<BrowserRouter >
    
   
                  <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/home-page" element={<MainPage />} />
                   
                  </Routes>
                
              
            
       
     
      </BrowserRouter>
	
	);
}

export default App;

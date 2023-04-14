 import React  from "react";
import About from "./About/About";
import Header from "./Header/Header";
import TudoApp from "./TudoApp/TudoApp";
import{BrowserRouter,Route,Routes} from "react-router-dom";
 
 export default()=>{
  return(  
<BrowserRouter>
<Header/>
  <Routes>
  {/* <Header/> */}
  <Route path="/"element={ <TudoApp/>}/>
   
    
  <Route path="/about" element={ <About/>}/>
   
    </Routes>
</BrowserRouter>

  
  
  );
 
 };
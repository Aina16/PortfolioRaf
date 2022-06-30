import React from "react"
import Profile from "./Home/Profile"
import NavBar from "./NavBar"
import Apropos from "./Apropos/Apropos"
import Cv from "./CV/Cv"
import Contact from "./Contact/Contact"


function App(){
    return(
       <div>
           <NavBar/>
           <Profile/>
           <Apropos/>
           <Cv/>
           <Contact/>
       </div>
    )
}
export default App
import React from "react"
import "./Navbar.css"
import {AppBar,Toolbar,Typography} from '@material-ui/core'
const NavBar = () => {
    return(
        <div>
        <AppBar position="static" className="appbar" style={{background:"rgb(42,42,46)"}}>
            <Toolbar>
                    
                <div className="navbar">
                    <div className="txt-logo" >AINA</div>
                    <div className="menu-bar">
                            <ul>
                                <li>Accueil</li>
                                <li>A Propos de moi</li>
                                <li>Circulum Vitae</li>
                                <li>Contact</li>
                                <li></li>
                            </ul>
                        </div>
                </div>
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default NavBar;
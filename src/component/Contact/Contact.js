import React from "react"
import contact from "./contact.jpeg"
import dataCont from "./dataCont"
import "./Contact.css"

export default function Contact() {
    const eleCont=dataCont.map(data=>{
        return(
            <div className="c--det">
                <div className="cont-icon">{data.icon}</div>
                <div className="cont-text">{data.text}</div>
            </div>
        )
    })
    return(
        <form className="contact">
            <p className="prp-titre">Contact</p>
            <div className="c-parent">
                <div className="c-det">
                    <div className="c-detimg">
                        <img src={contact} className="c-img"/>
                    </div>
                    <div className="c-dettext">
                        <h1 style={{color:"chocolate"}}>Contacter moi</h1>
                        <p style={{color:"rgb(65, 63, 63)", fontWeight:"bold"}}>Je suis disponible à tout moment, donc , vous pouvez m'appeller via ces contacts.</p>
                        {eleCont}
                    </div>
                </div>
                <div className="c-form">
                    <div className="c--form">
                    <h1 style={{color:"chocolate"}}>Envoyer votre message</h1>
                        <input type="text" placeholder="Nom"/><br />
                        <input type="text" placeholder="Tel"/><br />
                        <input type="email" placeholder="Email"/><br />
                        <input type="text" placeholder="Sujet"/><br />
                        <textarea placeholder="Message"></textarea> 
                    </div>
                    <div className="c-formbtn">
                    <button type="submit">Envoyer</button>
                 </div>
                </div>
                
            </div>
        </form>
    )
}
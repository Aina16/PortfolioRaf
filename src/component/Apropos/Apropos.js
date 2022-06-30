import React from "react"
import aina from "./aina.jpg"
import "./Apropos.css"

export default function Apropos() {
    return(
        <div className="prp-cont">
            <p className="prp-titre">A propos de moi</p>
            <div className="prp-parent">
                <div className="prp-img">
                    <img src={aina} className="aina"/>
                </div>
                <div className="prp-det">
                    <div className="prp-text">
                        Je suis en Licence 2 en filière informatique. 
                        En plus, je suis une personne motivée, curieux et surtout sérieux. 
                        Mon rêve c’est de devenir un développeur full stack. 
                        Et je suis à la recherche de stage pour bien améliorer mes connaissances sur les langages que je maitrise. 
                        En outre, je souhaite rejoindre une équipe de développeur pour les aider à atteindre leurs objectifs.
                    </div>
                    <div className="prp-mtr">
                        <p><b>Ce que je connaisse le plus: </b></p>
                        <ul>
                            <li>langage de dev web :Reactjs, Nodejs et PHP</li>
                            <li>langage de dev d'application : C# </li>
                            <li>Base de donnée : MySQL, PostgreSQL et Access</li>
                        </ul>
                    </div>
                    <div className="prp-resume">
                    <button className="btn-lcv">M'engagez</button>
                    <button className="btn-dcv"><a href="CV_Aina.pdf" download="CV_Aina.pdf">Obtenir CV</a></button>
                </div>
                </div>
            </div>
        </div>
    )
};

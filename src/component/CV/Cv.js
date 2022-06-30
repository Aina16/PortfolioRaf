import React, {useState,useEffect} from "react"
import "./Cv.css"
import node from "./Icon/nodejs.png"
import java from "./Icon/java.png"
import csharp from "./Icon/c_sharp.png"
import react from "./Icon/react.png"
import php from "./Icon/php.png"
import mysql from "./Icon/mysql.png"
import postgres from "./Icon/postgresql.png"
import portofolio from "./Icon/portofolio.jpg"
import game from "./Icon/game.png"
import headphone from "./Icon/headphone.png"
import manga from "./Icon/kakashi.png"

export default function Cv() {
   
    const [edu, setEdu]=useState(true)
    const [comp, setComp]=useState(false)
    const [projet, setProjet]=useState(false)
    const [lang, setLang]=useState(false)
    const [ci, setCi]=useState(false)
    
    const ClickEdu=()=>{
        setEdu(true)
        setProjet(false)
        setComp(false)
        setLang(false)
        setCi(false)
    }
    const ClickComp=()=>{
        setComp(true)
        setProjet(false)
        setEdu(false)
        setLang(false)
        setCi(false)
    }
    const ClickProjet=()=>{
        setProjet(true)
        setComp(false)
        setEdu(false)
        setLang(false)
        setCi(false)
    }
    const ClickLang=()=>{
        setLang(true)
        setComp(false)
        setEdu(false)
        setProjet(false)
        setCi(false)
    }
    const ClickCi=()=>{
        setCi(true)
        setLang(false)
        setComp(false)
        setEdu(false)
        setProjet(false)
    }
    return(
        <div className="cv-cont">
            <p className="prp-titre">Curricilum Vitae</p>
            <div className="cv-parent">
                <div className="cv-menu">
                    <ul>
                        <li onClick={ClickEdu}>Education</li>
                        <li onClick={ClickComp}>Competence</li>
                        <li onClick={ClickProjet}>Projet</li>
                        <li onClick={ClickLang}>Langue</li>
                        <li onClick={ClickCi}>Centre d'intêret</li>
                    </ul>
                </div>
                <div className="cv-det">
                {
                    edu==true?
                    <div>
                        <span className="text-edu">Licence 2 en filière informatique</span>
                        <p className="text--edu">Ecole Supérieure de Management et d’Informatique Appliquée</p>
                        <span className="text-edu">Licence 1 en filière informatique</span>
                        <p className="text--edu">Ecole Supérieure de Management et d’Informatique Appliquée</p>
                        <span className="text-edu">Diplome Bacc Série D</span>
                        <p className="text--edu">Lycée Privé d’Expérience Française </p>
                        <span className="text-edu">Diplome Bacc Série A</span>
                        <p >Lycée Privé Don Bosco </p>
                    </div>:null
                
                 }
                {
                    comp==true?
                    <div className="det-skil">
                        <di className="lang">
                            <div className="img-cont">
                                <img src={node} />
                                <progress value="65" max="100"></progress>                            
                            </div>
                            <div className="img-cont">
                                <img src={react} />
                                <progress value="70" max="100"></progress>                            
                            </div>
                            <div className="img-cont">
                                <img src={php} />
                                <progress value="60" max="100"></progress>                            
                            </div>
                            <div className="img-cont">
                                <img src={csharp} />
                                <progress value="50" max="100"></progress>                            
                            </div>
                            <div className="img-cont">
                                <img src={java} />
                                <progress value="45" max="100"></progress>                            
                            </div>
                        </di>
                        <div className="bd">
                            <div className="img-cont">
                                <img src={mysql} />
                                <progress value="70" max="100"></progress>                            
                            </div>
                            <div className="img-cont">
                                <img src={postgres} />
                                <progress value="50" max="100"></progress>                            
                        </div>
                        </div>
                    </div>:null
                }
                {
                    projet==true?
                    <div className="projet">
                        <div className="pro-projet">
                            <div className="pro-img">
                                <img src={portofolio} className="pro--img"/>
                            </div>
                            <div className="stat">
                                <p>Portofolio</p>
                            </div>
                        </div>
                    </div>:null
                }
                {lang}
                {
                    ci==true?
                    <div className="ci">
                        <table>
                            <tr>
                                <td><img src={game} className="ci-img"/></td>
                                <td>Participer à des compétitions jeux vidéo</td>
                            </tr>
                            <tr>
                                <td><img src={headphone} className="ci-img"/></td>
                                <td>Ecouter de la musique</td>
                            </tr>
                            <tr>
                                <td><img src={manga} className="ci-img"/></td>
                                <td>Regarder des manga</td>
                            </tr>
                        </table>
                    </div>:null
                }       
                </div>
            </div>
        </div>
    )
};

import React from 'react'
import photo from "./profile.jpg"
import { Facebook } from '@material-ui/icons'
import Typical from "react-typical"
import "./profile.css"
import cv from "./CV_Aina.pdf"
export default function Profile() {
  return (
    
    <div className='p-cont'>
        <div className="p-parent">
            <div className="p-det">
                <div className="p-icon">
                    <a href="#"><Facebook style={{color:"white"}}/></a>
                </div>
                <div className="p-nom">
                    <p>Bonjour, je m'appelle  <span className="nom">Aina fanantenana</span></p>
                </div> 
                <div className="p-job">
                   <h1> <Typical 
                        loop={Infinity}
                        steps={[
                        "Full Stack Dev ",
                        2000,
                        "MERN Stack Dev",
                        2000,
                        "Full Stact JS",
                        2000
                        ]}/>
                    </h1>
                </div>
                <div className="prp-resume">
                    <p><small>Ici pour me contact et telecharger mon C.V</small></p>
                    <button className="btn-lcv">M'engagez</button>
                    <button className="btn-dcv"><a href={cv} download="CV_Aina.pdf">Obtenir CV</a></button>
                </div>
            </div>
            <div className="p-photo">
                <div className="p--photo">
             <img src={photo} className="p---photo" alt="" srcset=""/>
                </div>
            </div>
        </div>
    </div>
  )
}


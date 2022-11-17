import React from "react";
import { Link } from "react-router-dom";
import style from './LandingPage.module.css'

export default function LandingPage () {
    return (

        <div >
            <div className={style.margin}>
                <div >
                    <Link to = '/dogs'>
                    <button className={style.boton}> ingresa a la app </button>
                    </Link>   
                </div>
            </div>
        </div>

    )
}



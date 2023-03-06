
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import Parar from "./Parar.jsx";
import { myInterval } from "../index.js";
import { Iniciar } from "./Iniciar.jsx";
import { Reiniciar } from "./Reinicio.jsx";



const Counter =  (props) => {


  const reiniciarCuenta = () => {
    segundos = 0;
    minutos = 0;
    horas = 0;
    dias = 0;
  };


 return (   
<div className="row row-cols-1 row-cols-md-6">

    
      <div className="card">
      <div className="card-body">
        <h5 className="card-title"><FontAwesomeIcon icon={faClock} id="icon"/> </h5>
      </div>
      </div>

    
      <div className="card">
        <h5 className="card-title">{props.day || 0}</h5>
        <p className="texto">Días</p>
      </div>
    

    <div className="card">
        <h5 className="card-title">{props.hour || 0}</h5>
        <p className="texto">Horas</p>
    </div>
    
    <div className="card">
        <h5 className="card-title">{props.minutes || 0}</h5>
        <p className="texto">Minutos</p>
    </div>

    <div className="card">
        <h5 className="card-title">{props.seconds || 0}</h5>
        <p className="texto">Segundos</p>
    </div>
 
    <div className="card" id="button">
      <Parar />
      <Iniciar />
      <div className="col">
          <Reiniciar reiniciarCuenta={reiniciarCuenta} />
        </div>
      
</div>
<input type="number" placeholder="Set a number"/>
<button type="button">Inicia la cuenta atrás</button>
</div>


 )
}

Counter.propTypes = {
hours: PropTypes.number,
minutes: PropTypes.number,
sedonds: PropTypes.number,
day:PropTypes.number,
}




export default Counter;



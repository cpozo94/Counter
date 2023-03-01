import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { myInterval } from "..";


const Parar = () => {
    const pararCuenta = () => {
      clearInterval(myInterval);
    };
  
    return <button onClick={pararCuenta}>Detener cuenta regresiva</button>;
  };
  
  export default Parar;

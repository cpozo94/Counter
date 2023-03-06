import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { myInterval } from "..";

export const Iniciar = () => {
    const iniciarCuenta = () => {
        setInterval(myInterval, 1000);
    };
    
  
    return <button onClick={Iniciar}>Iniciar cuenta</button>;
  };
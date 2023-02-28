//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Counter from "./component/SecondsCounter.jsx"

//render your react application
let segundos = 0;
let minutos = 0;
let horas = 0;
let dias= 0;

setInterval(()=>{
    if(segundos >=59){
        segundos=0;
        minutos++
    }else if(minutos > 59){
        minutos = 0;
        horas++
    }else if(horas >23){
        horas=0;
        dias ++;
    }else{
        segundos ++
    }
    
   
    ReactDOM.render(<Counter  
        
        seconds={segundos} minutes={minutos} hour={horas} day={dias} />, 
        
        document.querySelector("#app"));

},10)


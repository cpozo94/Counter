
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";


const Counter =  (props) => {


 return (   
<div className="container-fluid">
<div className="row row-cols-1 row-cols-md-6 g-4">
    <div className="col">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title"><FontAwesomeIcon icon={faClock}/> </h5>
      </div>
    </div>
    </div>

    <div className="col">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.day || 0}
        </h5>
    </div>
    </div>
      </div>

    <div className="col">
    <div className="card">
       <div className="card-body">
        <h5 className="card-title">{props.hour || 0}</h5>
      </div>
    </div>
    </div>
    
    <div className="col">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.minutes || 0}</h5>
      </div>
    </div>
    </div>

    <div className="col">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.seconds || 0}</h5>
      </div>
    </div>
    </div>
</div>
</div>
 )
}

Counter.propTypes = {
hours: PropTypes.number,
minutes: PropTypes.number,
sedonds: PropTypes.number,
day:PropTypes.number,
}






//Alert.propTypes = {color: PropTypes.string,text: PropTypes.string,};

export default Counter;

//reactDOM.render(<my function />, document.querySelector("#app"))

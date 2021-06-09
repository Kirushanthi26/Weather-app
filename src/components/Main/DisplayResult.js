import React from 'react';
import './DisplayResult.css';
import {Button} from '@material-ui/core';

const DisplayResult = ({temp, desc, icon, setTemp}) => {
    return (
        <div className="result">
            <div className="result__box">
                <h1>Temp : {temp} °C</h1>
                <p>{desc}</p>
                <img src={icon} alt="temp icon"/><br/>
                <Button variant="contained" color="default" onClick={()=>{setTemp("");}}>
                    Back
                </Button>
            </div>
        </div>
    )
}

export default DisplayResult

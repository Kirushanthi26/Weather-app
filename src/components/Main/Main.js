import React from 'react';
import './Main.css';
import logo from './undraw_Weather_re_qsmd.svg';
import Input from '@material-ui/core/Input'; /*input css metirial ui*/
import {Button} from '@material-ui/core';

const Main = ({input, setInput, findWeather}) => {

    const handleChange = (event)=>{
        setInput(event.target.value)
    }
    // console.log(input);

    const handleClick = (event)=>{
        event.preventDefault();
        findWeather();
    }

    return (
        <div className="Main__Box">
            <div className="inputs__field">
                <h1>Weather App</h1>
                <img src={logo} alt="weather pic"/>
                <br/>
                <form>
                <Input placeholder="Enter The City Name" onChange={handleChange} value={input}/>
                <br/>
                <Button variant="contained" color="primary" type="submit" onClick={handleClick}>Search</Button>
                </form>
            </div>
        </div>
    )
}

export default Main

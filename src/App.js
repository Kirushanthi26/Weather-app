import './App.css';
import React, {useState} from 'react';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Main from './components/Main/Main.js';
import axios from 'axios';
import DisplayResult from './components/Main/DisplayResult.js';

function App() {

  const [input, setInput] = useState("");
  const [temp, setTemp] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("");
  
  const findWeather= async()=>{
    const apikey = "b66c171f162c033fe8f08eab3b3cd603";
    const unit = "metric";
    const url = "http://api.openweathermap.org/data/2.5/weather?q="+input+"&appid="+apikey+"&units="+unit;
    const response = await axios.get(url);
    // console.log(response);

    const temp = await response.data.main.temp;
    const description = await response.data.weather[0].description;
    const icon = await response.data.weather[0].icon;
    var iconurl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
    // console.log(temp,description,iconurl);
    setTemp(temp);
    setDescription(description);
    setIcon(iconurl);
    setInput("");
  }

  return (
    <div className="App">
      <Header/>
      {temp === "" ?(
      <Main input={input} setInput={setInput} findWeather={findWeather}/>):
      (<DisplayResult temp={temp} desc={description} icon={icon} setTemp={setTemp}/>)}
      <Footer/>
    </div>
  );
}

export default App;

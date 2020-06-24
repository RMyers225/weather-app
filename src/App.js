import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather"


const API_KEY = "7c7766789fb936fde40b99a50d06b50d";

class App extends React.Component {
  getWeather = async () => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/
    weather?q=Atlanta,ga&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);

  }
  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather />
      </div>
    );
  }
}

export default App;
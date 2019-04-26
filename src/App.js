import React, {useState} from 'react';
import './App.css';
import {Splash} from "./components/splash/Splash";

function AppLayout(props) {
  return <div style={{color: "#000"}}>Main App Layout</div>
}

function App() {
  const [splashComplete, setSplashComplete] = useState(false);

  return (
    <div className="App">
      {splashComplete ? <AppLayout/> : <Splash ended={() => {
        setSplashComplete(true);
        document.body.style.backgroundColor = "#FFF";
      }}/>}
    </div>
  );
}

export default App;

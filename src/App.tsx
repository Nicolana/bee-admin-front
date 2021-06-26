import React from 'react';
import './App.css';
import { LoginScreen } from "./screens/login";

function App() {
  return (
    <div className="App">
        <div className="login-wrap">
            <div style={{fontSize: "30px", marginBottom: "10px"}}>Login</div>
            <LoginScreen></LoginScreen>
        </div>
    </div>
  );
}

export default App;

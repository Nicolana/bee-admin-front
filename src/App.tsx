import React from 'react';
import './App.css';
import { LoginScreen } from "./pages/login";

function App() {
  return (
    <div className="App">
        <div className="login-wrap">
            <LoginScreen></LoginScreen>
        </div>
    </div>
  );
}

export default App;

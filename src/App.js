import reactToWebComponent from "react-to-webcomponent"
import React from "react"
import * as ReactDOM from "react-dom/client"

import './App.css';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button variant="contained">Hello World</Button>
      </header>
    </div>
  );
}

export default App;

const WebGreeting = reactToWebComponent(App, React, ReactDOM, { shadow: true })
customElements.define("web-greeting", WebGreeting)

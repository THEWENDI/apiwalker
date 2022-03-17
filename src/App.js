import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import './App.css';
import Form from "./components/Form";
import People from "./components/People";
import Planets from "./components/Planets";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <h1>"LUKE API WALKER" </h1>
      <Form/>

      <Switch>
        <Route path="/people/:id">
          <People/>
        </Route>
        <Route path="/planets/:id">
          <Planets/>
        </Route>
      </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;

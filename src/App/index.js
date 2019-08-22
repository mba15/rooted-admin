import React from "react";
import {Switch, Route} from "react-router-dom";
import Clients from "./Clients";

//import Home from "./pages/Home"
import ClientView from "./ClientView";
import "./index.css";

function App(){
    return(
        <div>
             <Switch>
                <Route exact path="/" component={Clients} />
                <Route path="/client/:id" component={ClientView} />
            </Switch>
            
        </div>
    )
}

export default App;


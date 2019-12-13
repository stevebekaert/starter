import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";

import Client from "./Client.js";
import Contact from "./Contact";
import ClientSelected from "./ClientSelected";
import Welcome from './Welcome';

class Page extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (<Router>
      <div className="App">

        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to={"/clients/new"}>Add client</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to={"/clients"}>Client's list</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Switch>
          <Route path="/clients/:id/:firstname/:lastname/:email" render={ () => (
            <ClientSelected/>)}
          />
          <Route path="/clients/new" render={ () => (
            <Client/>)}
          />
          <Route path="/clients" render={ () => (
            <Contact
            />)}
          />
          <Route path="/" component={Welcome}/>
        </Switch>

      </div></Router>
    );
  }

}

export default Page;

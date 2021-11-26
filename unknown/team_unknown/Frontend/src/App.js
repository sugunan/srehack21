import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Dashboard from './components/Dashboard';
import Incidents from './components/IncidentsPage';
import Requests from './components/RequestPage';



function App() {
  return (
    <Router>
    <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/incidents" exact component={() => (
              <Incidents   
              />
            )} />
          <Route path="/requests" exact component={() => (
              <Requests   
              />
            )} />
          
    </Switch>
    </Router>
    
  );
}

export default App;

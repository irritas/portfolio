import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router className="App">
      <Switch>
        <Route exact path='/' render={() =>
          <HomePage />
        }/>
      </Switch>
    </Router>
  );
}

export default App;

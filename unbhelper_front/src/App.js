import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import Home from './pages/Home';
import Notes from './pages/Notes';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:id" component={Notes}/> {/* Rota dinâmica para as páginas de notas */}
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;

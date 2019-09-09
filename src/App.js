import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';

import articleData from './components/SiteData/articleData';

function App() {
    console.log('articleData', articleData);

  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/article/:id" component={Article} />
      </Router>
    </div>
  );
}

export default App;

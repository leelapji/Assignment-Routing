import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Contacts from './components/Contacts';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/" exact>
            <h2>Home Page</h2>
            <p>This is the home page content.</p>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

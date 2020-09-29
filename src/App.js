import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NoMatch from './pages/NoMatch';
import Master from './layouts/master_layout';
import NavigationBar from './components/NavigationBar';
import Jumbotron from './components/Jumbotron';
import Header from './components/Header';

function App() {
  const [auth, setAuth] = useState(false);

  return (
    <React.Fragment>
      <Header auth={auth} />
      <NavigationBar />
      <Jumbotron />
      <Master>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route  path="/about" component={About}></Route>
            <Route  path="/contact" component={Contact}></Route>
            <Route  component={NoMatch}></Route>
          </Switch>
        </Router>
      </Master>
    </React.Fragment>
  );
}

export default App;

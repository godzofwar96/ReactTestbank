import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import NoMatch from '../pages/NoMatch';
import NavigationBar from '../components/NavigationBar';
import Jumbotron from '../components/Jumbotron';
import Header from '../components/Header';

const PartisipantsLayout = ( props ) => {
    const [auth, setAuth] = useState(false);
    const [flagHeader, setFlagHeader] = useState(false);
    return (
        <React.Fragment>
            <Header auth={auth} flagHeader={flagHeader} />
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                </Switch>
            </Router>
        </React.Fragment>
    )
}

export default PartisipantsLayout 

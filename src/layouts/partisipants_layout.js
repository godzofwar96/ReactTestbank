import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
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

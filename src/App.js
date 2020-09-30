import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Partisipants from './layouts/partisipants_layout';
import AdminLayout from './layouts/admin_layout';
import NoMatch from './pages/NoMatch';

function App() {
  const [auth, setAuth] = useState(false);

  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Partisipants}></Route>
          <Route  path="/admin" component={AdminLayout}></Route>
          <Route component={NoMatch}></Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;

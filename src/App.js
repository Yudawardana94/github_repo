import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

//component
import Home from '../src/pages/home'

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route>
            <Route exact path="/" component={Home}/>
          </Route>
        </Switch>
      </Router>

    </React.Fragment>
  );
}

export default App;

import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Thecodersclub from './pages/thecodersclub/Home';
import TCCMentors from './pages/thecodersclub/Mentors'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// library.add(fab)

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Thecodersclub} />
          {/* <Route path="/thecodersclub" exact component={Thecodersclub} /> */}
          <Route path="/mentors" component={TCCMentors} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;

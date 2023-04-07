import React from 'react';
import UserRegistration from './component/Registration';
import "./App.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Welcome from './component/Welcome';
import UserLogin from './component/Login';
class App extends React.Component{
  render(){ 
    return (
      <Router>
        <div className="grid">
          <div className="col-12">
            <h2 className="bismillha" style={{ textAlign: "right" }}>
              بسم اله الرحمن الرحيم
            </h2>
            <Switch>
              <Route path="/" exact>
                <Welcome />
              </Route>
              <Route path="/registration" exact>
                <UserRegistration />
              </Route>
              <Route path="/login" exact>
                <UserLogin />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
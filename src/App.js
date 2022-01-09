import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import User from './components/users/User';
import Alert from './components/layout/Alert';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import About from './pages/about/About';
import Home from './pages/Home';
import NotFound from './pages/notFound/NotFound';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='app'>
            <Navbar />
            <div className='container'>
              <Alert />
              <Switch>
                <Route path='/' exact component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route path='*' component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;

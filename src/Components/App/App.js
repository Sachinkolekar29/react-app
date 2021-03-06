import { Fragment } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Login from '../../Login/Login';
import Dashboard from '../Dashboard/Dashboard';
import Contact from '../Contact/Contact'
import Header from '../Shared/Header/Header';
import PrivateRoute from '../Shared/PrivateRoute';

import './App.css';


function App({token
}) {
  return (
  <Fragment>
      {token && <Header/>}
  
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/contacts" component={Contact}/>
      </Switch>
    </Fragment>
  );
}
const mapStateToProps=(state)=>{
  return{
    token: state.login.token
  }
}
export default connect(mapStateToProps)(App);

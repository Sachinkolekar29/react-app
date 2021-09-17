import Login from '../../Login/Login';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

const PrivateRoute = (props) => {
    console.log('private route ==>', props);
    if (props.token && localStorage.getItem('userToken')) {
        return <Route { ...props } />
    }

    return <Login />;
}

const mapStateToProps=(state)=>{
    return{
      token: state.login.token
    }
}

export default connect(mapStateToProps)(PrivateRoute);

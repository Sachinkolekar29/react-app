import { connect } from 'react-redux';
import {NavLink, Link ,useHistory} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { userLoggedOut } from '../../../redux/action/loginAction';
import Button from 'react-bootstrap/Button';

import "./Header.css";

const Header=({
    loggedOut
})=>{
    const history=useHistory();
    const loggoutClickHandler=()=>{
        loggedOut();
        history.push('/');
    }
    
    return (
        <Navbar bg="light" variant="light">
            <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
                
                <NavLink className="nav-link" activeClassName="is-active" to="/dashboard">Dashboard</NavLink>
                <NavLink className="nav-link" activeClassName="is-active" to="/contacts">Contact</NavLink>
                
            </Nav>
            <Button onClick={loggoutClickHandler} >Logout</Button>
            </Container>
        </Navbar>
    )
};
const mapDispatchToProps=(dispatch)=>{
    return{
        loggedOut:()=>dispatch(userLoggedOut())
    }
   
}
export default connect(null,mapDispatchToProps) (Header);
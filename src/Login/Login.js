import { Fragment,useState,useEffect} from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { userLoggedIn, userLoggedOut } from '../redux/action/loginAction';
import './Login.css';

const Login=({
    loginUser,
    token,
    userLoggedOut
})=>{

    //Initial form state
    const [form, setform]= useState({
        username:'',
        password:''
    });
    const history=useHistory();
    useEffect(() => {
        userLoggedOut();
    }, [])
    useEffect(()=>{
        if(token){
            history.push('/Dashboard');
        }
    },[token,history])

    // Event Handlers.
    const usernameChangeHandler=(event)=>{
        setform({...form,username:event.target.value})
    };
    const passwordChangeHandler=(event)=>{
        setform({...form,password:event.target.value})
    };
    const formSubmitHandler=(event)=>{
        event.preventDefault();
        const userCredentials={...form};
        loginUser(userCredentials);
    };

    //return JSX.
    return (
        <Fragment>
            <header className="form-header"><h1>Login Form </h1> </header>
            <main> 
                <Form className='login-form' onSubmit={formSubmitHandler}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter Username" 
                            value={form.username}
                            onChange={usernameChangeHandler}
                        />    
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                             type="password" 
                             placeholder="Password"
                             value={form.password}
                             onChange={passwordChangeHandler}
                         />
                    </Form.Group>
                
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    </Form>
            </main>
            </Fragment>
    )
};
const mapStateToProps=(state)=>{
    return{
        token:state.login.token
    };
};
const mapDispatchToProps=(dispatch)=>{
    return {
        userLoggedOut: () => dispatch(userLoggedOut()),
        loginUser:(userCredentials)=> dispatch(userLoggedIn(userCredentials))
    };
};
export default connect(mapStateToProps,mapDispatchToProps) (Login);
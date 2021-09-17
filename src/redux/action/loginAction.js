
export const userLoggedIn=(userCredentials)=>{
    return(dispatch)=>{
        const token=userCredentials.username;
        localStorage.setItem('userToken',token);
        dispatch({type:'LOGGED_IN',token});
    };
};

export const userLoggedOut=()=>{
    return(dispatch)=>{
        localStorage.removeItem('userToken');

        dispatch({type:'LOGGED_OUT'});
    };
};

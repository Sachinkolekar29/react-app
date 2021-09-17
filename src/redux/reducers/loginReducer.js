const initialState={
    token:null
};

const loginReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'LOGGED_IN':{
            return{
                ...state,
                token: action.token
            };
                
        }
        case 'LOGGED_OUT':{
              return{
                  ...state,
                  token: null
              };
        }
        default:{
            return state;
        }
    }
};

export default loginReducer;
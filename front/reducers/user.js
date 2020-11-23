const initialState = {
    isLoggedIn : false,
    me : null,
    signData : {},
    loginData : {}
}

//action Creator
export const loginAction = (data) => {
    return {
        type:'LOG_IN', 
        data
    }
}

export const logoutAction = () =>{
    return {
        type:"LOG_OUT"
    }
}


const reducer = (state = initialState, action) => {
    console.log("action");
    console.log(state);
    switch (action.type){
        case 'LOG_IN':
            return{
                ...state,
                isLoggedIn : true,
                me : action.data,
            }

        case 'LOG_OUT':
            return {
                ...state,
                isLoggedIn : false,
                me : null
            }

        default:
            return state;
    }
}

export default  reducer;
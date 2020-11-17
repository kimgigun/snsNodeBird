const initialState = {
    user : {
        isLoggedIn : false,
        user : null,
        signUpdata : {},
        loginDate : {}

    },
    post: {
        mainPosts : []
    }
}

//action Creator
export const loginAction = (data) => {
    return {
        type:'LOG_IN', 
        data
    }
}

export const logoutAction =  ()=>{
    return {
        type:"LOG_OUT"
    }
}

// (이전상태, 액션 ) 다음상태
const rootReducer = (state = initialState, action) => {
   
    switch (action.type){
        
        case 'LOG_IN':
            console.log('스토어들어옴');
            return{
                ...state,
                isLoggedIn: true,
                user : action.data
            }

        case 'LOG_OUT':
            return {
                ...state.user,
                isLoggedIn :false,
                user : null
            }

        default:
            return state;
    }
}

export default rootReducer;
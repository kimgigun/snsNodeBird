import {HYDRATE}  from 'next-redux-wrapper';
import {combineReducers} from 'redux'; //리듀서를 합쳐준다.
import user from '../reducers/user';
import post from '../reducers/post';

// 리듀서를 합쳐준다
const rootReducer = combineReducers({
    //서버사이드 렌더링(HYDRATE )을 위해서 index 추가 
    index: (state={}, action) => {
        switch(action.type){
            case HYDRATE:
                console.log('HYDRATE', action);
                return {...state, ...action.payload};
            default:
                return state;    
        }
    },
    user, post
});

export default rootReducer;
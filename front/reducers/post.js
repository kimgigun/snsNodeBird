
export const initialState = {
    mainPosts:[{
        id:1,
        User:{
            id:1,
            nickname:"김기"
        },
        content:'',
        Images:[{
           
        }],
        Comments:{}
    }]
}

const ADD_POST = 'ADD_POST';

export const addPost = (data) => {
    return{
        type:ADD_POST,
        data
    }
}

const dummyPost = {
        id:1,
        User:{
            id:1,
            nickname:"김기"
        },
        content:'첫번째 게시글',
        Images:[{
            src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgBIR0hgDrmnBHuRBigOrhxCO8rsgleBqyww&usqp=CAU",
            src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgBIR0hgDrmnBHuRBigOrhxCO8rsgleBqyww&usqp=CAU",
            src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgBIR0hgDrmnBHuRBigOrhxCO8rsgleBqyww&usqp=CAU"
        }],
        Comments:{}
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case 'ADD_POST':
            dummyPost.content = action.data;
            return{
                ...state,
                mainPosts : [dummyPost, ...state.mainPosts ]
            }
        default:
            return state;    
    }
}

export default reducer;
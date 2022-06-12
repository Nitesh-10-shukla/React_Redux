import {GET_ALL_BLOG, GET_USER, GET_USER_DATA} from '../Actions/ActionTypes';


const initialState ={
    users:[],
    blog:[],
    loading:true
}


export default function(state=initialState,action){
   switch(action.type){
       case GET_USER_DATA:
           return{
               ...state,
               users:action.payload,
               loading:false
           }
           case GET_USER:
               return{
                   ...state,
                   users:action.payload,
                   loading:false
               }
            case GET_ALL_BLOG:
                return{
                    ...state,
                    blog:action.payload || [],
                    loading:false
                }
           default: return state
   }
}
import { GET_USER_DATA,GET_USER_DATA_ERROR ,GET_USER, GET_ALL_BLOG} from "./ActionTypes";
import axios from "axios";

export const fetchUserData = ()=> async dispatch=>{
    try{
      const response= await axios.get(`https://fakestoreapi.com/products`)
         dispatch({
             type:GET_USER_DATA,
             payload:response.data
         })
    }
    catch(error){
           dispatch({
               type:GET_USER_DATA_ERROR,
               payload:console.log(error)
           })
    }
}

export const fetchAlluser = ()=>async dispatch=>{
    try{
        const res =await axios.get(`https://jsonplaceholder.typicode.com/users`)
        dispatch({
            type:GET_USER,
            payload:res.data
        })
       
    }
    catch(error){
       dispatch({
           type:GET_USER,
           payload:error
       })     
    }
}

export const fetchblog = (blog)=>async dispatch=>{
try{
    console.log(blog,"dispatch")
    // const blog = await axios.get(`http://localhost:3000/api/getAll`)
    // let blog =localStorage.getItem("blog");
    // blog =JSON.parse(blog) || []
    dispatch({
        type:GET_ALL_BLOG,
        payload:blog
    })
}
catch(error){
    dispatch({
        type:GET_ALL_BLOG,
        payload:error
    })     
 }
}
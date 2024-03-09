import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
    name:"auth",
    initialState:{
        name:"",
        login:false
    },
    reducers: {
        setLogin:(state,action) =>{
            return {name:action.payload.name, login:true};
        },
        setLogout:(state,action)=>{
            return {name:"",login:false}
        }
    }
})
export const authAction=authSlice.actions;
export default authSlice ;
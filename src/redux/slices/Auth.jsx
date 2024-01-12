import { createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios"
const initialState = {
    isLoggedIn: false,
    token: "",
    isLoading: false,
}

const slice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logIn(state, action){
            state.isLoggedIn = action.payload.isLoggedIn;
            state.token = action.payload.token
        },
        signOut(state, action){
            state.isLoggedIn = false;
            state.token = "";
        }
    }
})

//Reducer
export default slice.reducer;


//login

export function LoginUser(formValues){
//formValues => {email, password}
return async (dispatch, getState) => {
    await axios.post("/auth/login", {...formValues},{headers: {"Content-Type": "application/json"}})
.then((res)=> {
    console.log(res);
    dispatch(slice.actions.logIn({
        isLoggedIn: true,
        token: res.data.token
    }))
})
.catch(error => {
    console.log(error);
})
}
}

export function LogoutUser () {
    return async (dispatch, getState)=> {
        dispatch(slice.actions.signOut())
    }
}

export function ForgotPassword (formValues) {
    return async (dispatch, getState) => {
      await  axios.post("/auth/forgot-password", {...formValues}, {headers: {"Content-Type": "application/json"}})
   .then(res => {
    console.log(res);
   })
   .catch(error => {
    console.log(error);
   })
    }
}


export function NewPassword (formValues) {
    return async (dispatch, getState) => {
      await  axios.post("/auth/reset-password", {...formValues}, {headers: {"Content-Type": "application/json"}})
   .then(res => {
    console.log(res);
    dispatch(
        slice.actions.logIn({
            isLoggedIn: true,
            token:res.data.token
        })
    )
   })
   .catch(error => {
    console.log(error);
   })
    }
}
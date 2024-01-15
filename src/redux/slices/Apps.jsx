import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    sidebar: {
        open: false,
        type: "CONTACT",
    },
    snackbar: {
        open: false,
        message:null,
        severity: null,
    }
}



const slice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        //toggle sidebar
        toggleSidebar(state, action) {
            state.sidebar.open = !state.sidebar.open;
        },
        updateSidebarType(state, action) {
            state.sidebar.type = action.payload.type;
        },
        openSnackbar(state, action) {
console.log("state", state);
            state.snackbar.open = true;
            state.snackbar.severity = action.payload.severity;
            state.snackbar.message = action.payload.message;
        },
        closeSnackbar(state, action) {
            state.snackbar.open = false;
            state.snackbar.severity = null;
            state.snackbar.message = null;
        }
    }
})

console.log("moni",slice);

//reducer
export default slice.reducer;


export function ToggleSidebar() {

    return async (dispatch, getState) => {
        dispatch(slice.actions.toggleSidebar());
    }
}

export function UpdateSidebarType(type) {

    return async (dispatch, getState) => {
        dispatch(
            slice.actions.updateSidebarType({
                type,
            })
        )
    }
}

export function showSnackbar({severity, message}) {
    console.log(message);
    return async (dispatch, getState) => {
        dispatch(
            slice.actions.openSnackbar({
                
                message,
                severity,
                
            })
        )
        setTimeout(()=> {
            dispatch(slice.actions.closeSnackbar());
        }, 4000);
    }
}


export const closeSnackbar = () => async (dispatch, getState) => {
    dispatch(slice.actions.closeSnackbar());
}
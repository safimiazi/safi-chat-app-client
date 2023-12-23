import { createSlice } from "@reduxjs/toolkit";

//
import { dispatch } from "../Store";

const initialState = {
    sidebar: {
        open: true,
        type: "CONTACT",
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
        }
    }
})

//reducer
export default slice.reducer;


export function ToggleSidebar() {
    
    return async () => {
        dispatch(slice.actions.toggleSidebar());
    }
}

export function UpdateSidebarType(type) {
    return async () => {
        dispatch(
            slice.actions.updateSidebarType({
                type,
            })
        )
    }
}


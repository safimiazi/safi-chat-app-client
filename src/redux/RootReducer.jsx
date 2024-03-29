import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import appReducer from "./slices/Apps"
import userReducer from "./slices/Auth"
import conversationReducer from "./slices/conversation";
//slices

const rootPeristConfig = {
    key: "root",
    storage,
    keyPrefix:"redux-"
    //whitelist: [],
    //blacklist: [],
}


const rootReducer = combineReducers({
    app: appReducer,
    auth: userReducer,
    conversation: conversationReducer
})

export { rootPeristConfig, rootReducer};









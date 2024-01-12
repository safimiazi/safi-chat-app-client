import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import appReducer from "./slices/Apps"
import userReducer from "./slices/Auth"
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
})

export { rootPeristConfig, rootReducer};









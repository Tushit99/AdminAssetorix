import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk"; 
import { reducer as gloalval} from "./globalval/reducer"; 
import {reducer as property} from "./Propertysearch/reducer"; 
import {reducer as admindetail} from "./admin/reducer"; 


const rootReducer = combineReducers({ 
    gloalval, 
    property, 
    admindetail
}); 

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
import {createStore, combineReducers} from "redux";
import bucket from "./modules/bucket"

// reeducer + options 모아 놓은 것
const rootReducer = combineReducers({bucket : bucket});

// rootReducer를 한번에 모아 store 생성
const store = createStore(rootReducer);

export default store

import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer)    // Higher order function as takes function as argument 
export default store;
import { createStore } from "redux";
import reducer from "./reducer"; //引入reducer
const store = createStore(
  reducer,
  //redux的chrome插件使用，不用也可以不要 方便调试
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;

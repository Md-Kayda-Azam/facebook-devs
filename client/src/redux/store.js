import {applyMiddleware, createStore} from "redux";
import { composeWithDevTools } from "redux-devtools-extension"
import { rootReducer } from "./rootReducer";
import thunk from "redux-thunk";


const middleware = [ thunk ]



// creatr store
export const store = createStore( rootReducer, composeWithDevTools( applyMiddleware(...middleware)))


// export default
export default store;
import {createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'


let INITIAL_STATE = []

const reducerFunction = (state=INITIAL_STATE, action) =>{
        if(action.type === 'SUCCESS'){
            console.log(action.data);
            state = action.data;
            return state;
        }
}

const store = createStore(reducerFunction,composeWithDevTools());
export default store; 



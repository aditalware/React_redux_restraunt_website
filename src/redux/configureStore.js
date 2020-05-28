import {createStore, combineReducers,applyMiddleware} from 'redux';
import { createForms } from 'react-redux-form';
import {Dishes} from './dishes';
import {Comments} from './comments';
import {Promotions} from './promotions';
import {Leaders} from './leaders';
import thunk from 'redux-thunk'; // thunk is a middleware
import logger from 'redux-logger';//logger is also a middleware
import { InitialFeedback } from './forms';


export const ConfigureStore=()=>{
const store = createStore(
    combineReducers({

        dishes:Dishes,
        comments:Comments,
        promotions:Promotions,
        leaders:Leaders,
        ...createForms({
            feedback: InitialFeedback
        })

    }),applyMiddleware(thunk , logger)//will return a store enhancer
    );
//combine reducers
//these are available as state.dishes and so in main component
    return store;
}

// export const ConfigureStore=()=>{
//     const store =createStore(
//         Reducer,
//         initialState);
    
//         return store;
//     }
    

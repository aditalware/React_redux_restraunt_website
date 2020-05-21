import {createStore, combineReducers } from 'redux';
import {Dishes} from './dishes';
import {Comments} from './comments';
import {Promotions} from './promotions';
import {Leaders} from './leaders';

export const ConfigureStore=()=>{
const store =createStore(
    combineReducers({
        dishes:Dishes,
        comments:Comments,
        promotions:Promotions,
        leaders:Leaders
    })
    );
//combine reducers
//these are available as state.dishes and so in kain component
    return store;
}

// export const ConfigureStore=()=>{
//     const store =createStore(
//         Reducer,
//         initialState);
    
//         return store;
//     }
    

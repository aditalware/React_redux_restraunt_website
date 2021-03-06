//Action creators for returning an action object and thunks

import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';
//to supply to dishes reducer function
export const addComment=(comment)=>
({
    type:ActionTypes.ADD_COMMENT,
    // payload: {
    //     dishId:dishId,
    //     rating: rating,
    //     author:author,
    //     comment:comment//mapping given parameters and send to store to change the state
    // }
    payload: comment
});

export const postFeedback= (values) =>()=>{


    const newEntry={
     firstname:values.firstname,
     lastname:values.lastname,
     telnum:values.telnum,
     email:values.email,
     agree:values.agree,
     contactType:values.contactType,
     message:values.message
    }
    newEntry.date=new Date().toISOString();
    // alert(JSON.stringify(newEntry));

    return fetch(baseUrl + 'feedback', {
        method: "POST",
        body: JSON.stringify(newEntry),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
      .then(response => response.json())
    .then(response => alert("Thanks! you for the feedback\n"+JSON.stringify(response)))//reponse is the newly added detail in form
    .catch(error =>  { console.log('form feedback', error.message); alert('Your details could not be posted\nError: '+error.message); });
};
export const postComment = (dishId, rating, author, comment) => (dispatch) => {
//dispatch to the store
    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    };
    newComment.date = new Date().toISOString();
    //id will be generated by server
    
    return fetch(baseUrl + 'comments', {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
      .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error =>  { console.log('post comments', error.message); alert('Your comment could not be posted\nError: '+error.message); });
};




//arrow function with 4 parameters and it will directly return an action object
export const fetchDishes = () => (dispatch) =>{
   dispatch(dishesLoading(true));
   //after 2 sec delay
//    setTimeout(()=>{
//        dispatch(addDishes(DISHES));
//    },2000);
     return fetch(baseUrl + 'dishes')
     .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;//when an errored response is send ex baseurl+disheees will give error 404 not found
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;//when no response is send ex stopping the server would send failed to fetch
      })
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(error => dispatch(dishesFailed(error.message)));
             //response of first.then will be provided to the input of the next then.

}
//since we are creating a thunk we are returning a function

export const dishesLoading = () =>({

     type: ActionTypes.DISHES_LOADING
});

export const dishesFailed =(errmess)=>({
type: ActionTypes.DISHES_FAILED,
payload: errmess
});

export const addDishes=(dishes)=>({
    type:ActionTypes.ADD_DISHES,
    payload:dishes

});

export const fetchComments = () => (dispatch) => {    
    return fetch(baseUrl + 'comments')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
};

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchPromos = () => (dispatch) => {
    
    dispatch(promosLoading());

    return fetch(baseUrl + 'promotions')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)))
    .catch(error => dispatch(promosFailed(error.message)));
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});


export const fetchLeaders = () => (dispatch) => {
    
    dispatch(leadersLoading());

    return fetch(baseUrl + 'leaders')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(leaders => dispatch(addLeaders(leaders)))
    .catch(error => dispatch(leadersFailed(error.message)));
}

export const leadersLoading = () => ({
    type: ActionTypes.LEADERS_LOADING
});

export const leadersFailed = (errmess) => ({
    type: ActionTypes.LEADERS_FAILED,
    payload: errmess
});

export const addLeaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
});


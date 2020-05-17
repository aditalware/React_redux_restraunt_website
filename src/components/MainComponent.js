import React, { Component } from 'react';
import Menu from './/MenuComponents'; //app component becomes the parent of the menu component
//we can  make available the ste of children to parent as props do that they can be available to all the children
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import {Switch,Route,Redirect} from 'react-router-dom';
import Contact from './ContactComponent';
import {DISHES} from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import About from './AboutComponent';
//maincomponent is going to contain all the components as a container component
class Main extends Component{
    constructor(props)
    {
      super(props);
      
      this.state = {
        dishes: DISHES,
        comments: COMMENTS,
        promotions: PROMOTIONS,
        leaders: LEADERS
      };
    }

  render(){

    const Homepage=()=>{
        return(
            <Home 
                dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                leader={this.state.leaders.filter((leader) => leader.featured)[0]}
            />
        );
    };

    const DishWithId=({match})=>
    {
        return(
            <DishDetail Dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} // in base 10,params are the parameter of url
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
            );
    };
    return(
      <div >
        <Header/>
        <Switch>
          <Route path="/home" component={Homepage} />
          <Route exact path="/menu" component={()=> <Menu dishes={this.state.dishes} /> }/>
          <Route path='/menu/:dishId' component={DishWithId} />
          <Route exact path="/contactus" component={Contact}/>  
         <Route exact path="/aboutus" component={()=><About leaders={this.state.leaders}/>}/>
           <Redirect to="/home" />   
  
        </Switch>
         <Footer />
    </div>
    );
  }
}

export default Main;
// dishes in Menu are props

// onClick={(dishID)=> this.onDishSelect(dishID)} /> we want to first achieve/obtain dish id of the clicked dish and then pass it in onselected dish

//Before routing
// render(){
//     return(
//       <div >
//         <Header/>
//         <Menu dishes={this.state.dishes} 
//         onClick={(dishId)=> this.onDishSelect(dishId)} />  
//         <DishDetail
//          Dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish )[0]} />
//          <Footer />
//     </div>
//     );
//   }
// }

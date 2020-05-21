import React, { Component } from 'react';
import Menu from './MenuComponents'; //app component becomes the parent of the menu component
//we can  make available the ste of children to parent as props do that they can be available to all the children
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import {Switch,Route,Redirect,withRouter} from 'react-router-dom';
import Contact from './ContactComponent';
// import {DISHES} from '../shared/dishes';
// import { COMMENTS } from '../shared/comments';
// import { PROMOTIONS } from '../shared/promotions';
// import { LEADERS } from '../shared/leaders';
// now the state will be obtained from my redux folder not directly
import About from './AboutComponent';
import {connect } from 'react-redux';
//main component is going to contain all the components as a container component

const mapStateToProps = (state)=>{
  //This mapStateToProps function will then return. What this does is that this will map the Redux Store's state into props that will become available to my component.
  return{
    dishes:state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders : state.leaders // these are available as props to main component from 'state' of redux store by connect method

  };
}
class Main extends Component{
    constructor(props)
    {
      super(props);
      
      this.state = {
        // dishes: DISHES,
        // comments: COMMENTS,
        // promotions: PROMOTIONS,
        // leaders: LEADERS  // updates due to integration with redux
      };
    }

  render(){

    const Homepage=()=>{
        return(
            <Home 
                dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                leader={this.props.leaders.filter((leader) => leader.featured)[0]}
            />
        );
    };

    //now everyehere where we used this.props will get changed to this.props

    const DishWithId=({match})=>
    {
        return(
            <DishDetail Dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} // in base 10,params are the parameter of url
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
            );
    };
    return(
      <div >
        <Header/>
        <Switch>
          <Route path="/home" component={Homepage} />
          <Route exact path="/menu" component={()=> <Menu dishes={this.props.dishes} /> }/>
          <Route path='/menu/:dishId' component={DishWithId} />
          <Route exact path="/contactus" component={Contact}/>  
         <Route exact path="/aboutus" component={()=><About leaders={this.props.leaders}/>}/>
           <Redirect to="/home" />   
  
        </Switch>
         <Footer />
    </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
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

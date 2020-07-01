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
import {postComment,fetchDishes,fetchComments, fetchPromos,fetchLeaders,postFeedback } from '../redux/ActionCreator';
//main component is going to contain all the components as a container component
import { actions } from 'react-redux-form';
import { TransitionGroup,CSSTransition} from 'react-transition-group';

const mapStateToProps = (state)=>{
  //This mapStateToProps function will then return. What this does is that this will map the Redux Store's state into props that will become available to my component.
  return{
    dishes:state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders : state.leaders // these are available as props to main component from 'state' of redux store by connect method

  };
}
const mapDispatchToProps = dispatch => ({
  
  postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
  fetchDishes: ()=>{dispatch(fetchDishes())},//whenever fetchDishes is invoked run the function
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
  fetchLeaders: () => dispatch(fetchLeaders()),
  postFeedback: (values)=>dispatch(postFeedback(values))
});
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
    
    componentDidMount()//as soon as main component sets
    {
      this.props.fetchDishes();
      this.props.fetchComments();
      this.props.fetchPromos();
      this.props.fetchLeaders();
    }
  render(){

    const Homepage=()=>{
        return(
            <Home 
                dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                dishesLoading={this.props.dishes.isLoading}
                dishesErrMess={this.props.dishes.errMess}
                promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
                promoLoading={this.props.promotions.isLoading}
                promoErrMess={this.props.promotions.errMess}
                leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
                leaderLoading={this.props.leaders.isLoading}
                leaderErrMess={this.props.leaders.errMess}
            />
        );
    };

    //now everywhere where we used this.state will get changed to this.props after mapping state to props

    const DishWithId=({match})=>
    {
        return(
            <DishDetail Dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} // in base 10,params are the parameter of url
            isLoading={this.props.dishes.isLoading}
            errMess={this.props.dishes.errMess}
            comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
            commentsErrMess={this.props.comments.errMess}
            postComment={this.props.postComment}
            />
            );
    };
    return(
      <div >
        <Header/>
        <TransitionGroup>
        <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
        <Switch>
          <Route path="/home" component={Homepage} />
          <Route exact path="/menu" component={()=> <Menu dishes={this.props.dishes} /> }/>
          <Route path='/menu/:dishId' component={DishWithId} />
          <Route exact path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback}/>}/>  
         <Route exact path="/aboutus" component={()=><About leaders={this.props.leaders.leaders}/>}/>
           <Redirect to="/home" />   
  
        </Switch>
        </CSSTransition>
        </TransitionGroup>
         <Footer />
    </div>
    );
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
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

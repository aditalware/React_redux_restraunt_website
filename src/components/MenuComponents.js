import React,{Component} from 'react';
import {Card,CardBody,CardText,CardTitle, CardImgOverlay,CardImg} from 'reactstrap';

class Menu extends Component{//name of new component for react app


    constructor(props){
        super(props);


        this.state = { // state is the property of that component
            selectedDish:null
             }
            }
       //do not change state directly bu this.state.x= something
       onDishSelect(dish)
       {
           this.setState({selectedDish:dish});
       }

       renderDish(dish) 
       {
           if(dish!=null){
              return(
                  <Card>
                  <CardImg width="100%" src={dish.image} alt={dish.name}/>
                  <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                  </CardBody>
                  </Card>
              );
           }
           else{
               return(<div></div>);
           }
       }
    

    render(){

        const menu=this.props.dishes.map((dish)=>{
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                      <Card onClick={()=>this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                           <CardImgOverlay>
                               <CardTitle>{dish.name}</CardTitle>
                           </CardImgOverlay>
                      </Card>
                     
                </div>
            );
            //for every dish in dishes i am going to iterate and return
        });
        return(
     <div className="container">
         <div className="row">
              {menu}
         </div>
         <div className="container">
            {this.renderDish(this.state.selectedDish)}
         </div>
    </div>
        );
    }
}

export default Menu;//always export ur components so that it can be imported

//  The below expression is for rendering media 
// render(){

//     const menu=this.props.dishes.map((dish)=>{
//         return(
//             <div key={dish.id} className="col-12 mt-5">
//                   <Media tag="li">
//                     <Media left middle>
//                        <Media object src={dish.image} alt={dish.name}/>
//                     </Media>
//                     <Media body className="ml-5">
//                        <Media heading>{dish.name}</Media>
//                        <p>{dish.description}</p>
//                     </Media>
//                   </Media>
//             </div>
//         );
//         //for every dish in dishes i am going to iterate and return
//     });
//     return(
//  <div className="container">
//      <div className="row">
//          <Media list>
//           {menu}
//          </Media>

//      </div>
// </div>
//     );
// }
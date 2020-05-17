import React,{Component} from 'react';
import {Card,CardImg,CardText,CardBody,CardTitle} from 'reactstrap'

class DishDetail extends Component{

    constructor(props){
        super(props);
     
    }
     renderDish(Dish)
     {
         return(
            <Card>
            <CardImg width="100%" src={Dish.image} alt={Dish.name}/>
            <CardBody>
            <CardTitle>{Dish.name}</CardTitle>
            <CardText>{Dish.description}</CardText>
            </CardBody>
            </Card>
         );
     }
    renderComments(comments)
    {


        const disp=comments.map((comment)=>{

            return( 
                <div key={comment.id} >
                <ul className="list-unstyled">
                <li>{comment.comment}</li>
                <br></br>
                <li>{comment.author} {comment.date}</li>
                </ul>
                </div>);
           
        });

        if(comments!=null)
        {
            return(
                <div>
                <h4>Comments</h4>
                {disp}
                </div>
            );
        }
        else{
return(
    <div></div>
);
        }
       
    }
    render(){

        if(this.props.Dish!=null)
        {
            return(
                <div className="row">
                <div className="col-12 col-md-5 m-1">
                {this.renderDish(this.props.Dish)}
                </div >
                <div className="col-12 col-md-5 m-1">
                
                {this.renderComments(this.props.Dish.comments)}
    
                </div>
                </div>
            );
        }
        else
        {
            return(
                <div></div>
            );
        }


            
           
                

    
    }
}
export default DishDetail;
import React from 'react';
import {Card,CardImg,CardText,CardBody,CardTitle,Breadcrumb,BreadcrumbItem} from 'reactstrap'
import {Link} from 'react-router-dom';

//functional implementation
    function RenderDish({Dish})
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
    function RenderComments({comments})
    {


        const disp=comments.map((comment)=>{

            return( 
                <div key={comment.id} >
                <ul className="list-unstyled">
                <li>{comment.comment}</li>
                <br></br>
                <li>{comment.author} ,{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
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
)
        }
       
    }
    const DishDetail=(props)=> {

        if(props.Dish!=null)
        {
            return(
                <div className="container">
                
                <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.Dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                   <h3>{props.Dish.name}</h3>
                   <hr/>
                </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        < RenderDish Dish={props.Dish}/>
                    </div >
                    <div className="col-12 col-md-5 m-1">
                          <RenderComments  comments={props.comments}/>
                    </div>
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
    export default DishDetail;
//class implementation
// class DishDetail extends Component{

//     constructor(props){
//         super(props);
     
//     }
//      renderDish(Dish)
//      {
//          return(
//             <Card>
//             <CardImg width="100%" src={Dish.image} alt={Dish.name}/>
//             <CardBody>
//             <CardTitle>{Dish.name}</CardTitle>
//             <CardText>{Dish.description}</CardText>
//             </CardBody>
//             </Card>
//          );
//      }
//     renderComments(comments)
//     {


//         const disp=comments.map((comment)=>{

//             return( 
//                 <div key={comment.id} >
//                 <ul className="list-unstyled">
//                 <li>{comment.comment}</li>
//                 <br></br>
//                 <li>{comment.author} ,{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
//                 </ul>
//                 </div>);
           
//         });

//         if(comments!=null)
//         {
//             return(
//                 <div>
//                 <h4>Comments</h4>
//                 {disp}
//                 </div>
//             );
//         }
//         else{
// return(
//     <div></div>
// )
//         }
       
//     }
//     render(){

//         if(this.props.Dish!=null)
//         {
//             return(
//                 <div className="container">
//                 <div className="row">
//                 <div className="col-12 col-md-5 m-1">
//                 {this.renderDish(this.props.Dish)}
//                 </div >
//                 <div className="col-12 col-md-5 m-1">
                
//                 {this.renderComments(this.props.Dish.comments)}
    
//                 </div>
//                 </div>
//                 </div>
                
                
//             );
//         }
//         else
//         {
//             return(
//                 <div></div>
//             );
//         }


            
           
                

    
//     }
// }

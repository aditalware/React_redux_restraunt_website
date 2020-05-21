import React, { Component } from 'react';
import {Card,CardImg,CardText,CardBody,CardTitle,Breadcrumb,BreadcrumbItem,Button,
    Col,Label,Modal,ModalBody,ModalHeader ,Row} from 'reactstrap'
import {Link} from 'react-router-dom';
import {LocalForm ,Control,Errors} from 'react-redux-form';


//functional implementation
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
class CommentForm extends Component{
 
    constructor(props){
        super(props);
        this.state={
         isFormOpen:false
        };
        this.toggleModal=this.toggleModal.bind(this);
    }
    toggleModal()
  {
    this.setState({isFormOpen:!this.state.isFormOpen});
  }
  handleCommentForm(values)
  {
   console.log('Current state is: '+JSON.stringify(values));
   alert('Current state is: '+JSON.stringify(values));
   //in order to stop the default action of the form to move to an empty page
  }

    render(){
        return(
            <>
            <Col>
            <Button onClick={this.toggleModal} color="grey">
            <span class="fa fa-edit fa-lg" ></span>
                Submit Comment
            </Button>
            
           </Col>
           <Modal isOpen={this.state.isFormOpen} toggle={this.toggleModal}>
           <ModalHeader>Submit Comment</ModalHeader>
           <ModalBody>
                   <LocalForm onSubmit={(values)=>this.handleCommentForm(values)}>
                   <Row className="form-group">
                      <Col className="col-12">
                        <Label htmlFor="rating">Rating</Label>
                           <Control.select 
                           model=".rating" id="rating" 
                           name="rating"
                           className="form-control"
                       >       
                       <option>1</option>
                       <option>2</option>
                       <option>3</option>
                       <option>4</option>
                       <option>5</option>

                       </Control.select>
                   </Col>
                  </Row >
                       <Row className="form-group">
                                <Col className="col-12">
                                <Label htmlFor="username">Your Name</Label>
                                <Control.text model=".username" id="username" name="username"
                                placeholder="Your Name"
                                     className="form-control"
                                     validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }}
                                    />
                                    <Errors
                                    className="text-danger"
                                    model=".username"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 2 characters ',
                                        maxLength: 'Must be 15 characters or less '
                                    }}/>
                                </Col>
                       </Row >

                       <Row className="form-group">
                        
                        <Col >
                        <Label htmlFor="message" >Comment</Label>
                            <Control.textarea model=".message" id="message" name="message"
                                rows="6"
                                className="form-control"/>
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col md={{size: 10}}>
                            <Button type="submit" color="primary">
                               Submit
                            </Button>
                        </Col>
                    </Row>
                      
                   </LocalForm>
                   

           </ModalBody>
        
        </Modal>
        </>
            
        );
    }
    
}
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
                </div>
               

                );
           
        });

        if(comments!=null)
        {
            return(
                <div>
                <h4>Comments</h4>
                {disp}
                <CommentForm/>
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

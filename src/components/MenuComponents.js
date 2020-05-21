import React from 'react';
import {Card,CardTitle, CardImgOverlay,CardImg,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
// import DishDetail from './DishdetailComponent';

// functional implementation

// function RenderMenuItem(props)
// {

// }
// `` whatever is inside the backquote will be reevaluated and substituted in the expression.
function RenderMenuItem({dish, onClick}){
    return(
        <div key={dish.id} className="col-12 col-md-5 m-1">

                  <Card key={dish.id} >
                         <Link to={`/menu/${dish.id}`} >                     
                            <CardImg width="100%" src={dish.image} alt={dish.name}/>
                           <CardImgOverlay>
                               <CardTitle>{dish.name}</CardTitle>
                           </CardImgOverlay>
                           </Link>
                      </Card>
              </div>        
    );
}
//another way
const Menu =(props) =>{
    const menu=props.dishes.map((dish)=>{
        return(
             <RenderMenuItem dish={dish} />
        );

       });


return(
     <div className="container">
     <div className="row">
          <Breadcrumb>
              <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
              <BreadcrumbItem active><Link to="/menu">Menu</Link></BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
             <h3>Menu</h3>
             <hr/>
          </div>
     </div>
         <div className="row">
              {menu}
         </div>
    </div>
        );
        }
//the below expression is for class implementation of menucomponent
// class Menu extends Component{//name of new component for react app

//     render(){

//         const menu=this.props.dishes.map((dish)=>{
//             return(
//                 <div key={dish.id} className="col-12 col-md-5 m-1">
//                       <Card key={dish.id} onClick={()=> this.props.onClick(dish.id)}>
//                         <CardImg width="100%" src={dish.image} alt={dish.name}/>
//                            <CardImgOverlay>
//                                <CardTitle>{dish.name}</CardTitle>
//                            </CardImgOverlay>
//                       </Card>
                     
//                 </div>
//             );
//             //for every dish in dishes i am going to iterate and return
//         });

//         return(
//      <div className="container">
//          <div className="row">
//               {menu}
//          </div>
//     </div>
//         );
//     }
// }

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
import React,{Component} from 'react';
import {Navbar,NavbarBrand,Nav,NavbarToggler,
  Collapse,NavItem,Jumbotron,Modal,ModalBody, ModalHeader,Button,Form,FormGroup,Input,Label} from 'reactstrap';
import {NavLink} from 'react-router-dom';

//expand md is same as collapse sm
class Header extends Component{

  constructor(props){
    super(props);

    this.state={
   isNavOpen:false,
   isModalOpen:false
    };
    

    //for binding such functions inorder for toggleNav to be called as simple as this.togggleNav
    this.toggleNav=this.toggleNav.bind(this);
    this.toggleModal=this.toggleModal.bind(this);
    this.handleLogin=this.handleLogin.bind(this);
  }
  // we can also do this by ()=> this.toggleNav(); without binding
  toggleNav()
  {
    this.setState({isNavOpen:!this.state.isNavOpen});
  }

  toggleModal()
  {
    this.setState({isModalOpen:!this.state.isModalOpen});
  }

  handleLogin(event){
    this.toggleModal();
    alert("Username: " +this.username.value + " Password: "+this.password.value +" Remember me: "+ this.remember.checked);
    event.preventDefault();
  }
     render(){
         return(
             <> 
             <Navbar dark expand="md">  
             <div className="container">
             
             <NavbarToggler onClick={this.toggleNav}/>
            

             <NavbarBrand className="mr-auto" href="/">
                 <img src="assests/images/logo.png" height="30" width="41" alt="Restorante Con Fusion" />
             </NavbarBrand>

      <Collapse isOpen={this.state.isNavOpen} navbar>
             <Nav navbar>
             <NavItem>
                 <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg"></span>
                    Home
                 </NavLink>
             </NavItem>
             <NavItem>
                 <NavLink className="nav-link" to="/aboutus">
                    <span className="fa fa-info fa-lg"></span>
                    Aboutus
                 </NavLink>
             </NavItem>
             <NavItem>
                 <NavLink className="nav-link" to="/menu">
                    <span className="fa fa-list fa-lg"></span>
                    Menu
                 </NavLink>
             </NavItem>
             <NavItem>
                 <NavLink className="nav-link" to="/contactus">
                    <span className="fa fa-address-card fa-lg"></span>
                    Contactus
                 </NavLink>
             </NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
               <NavItem>
                 <Button onClick={this.toggleModal}>
                 <span className="fa fa-sign-in fa-lg"></span>Login
                 </Button>
                </NavItem>
          </Nav>
    </Collapse>
             
             </div>
             </Navbar>
             <Jumbotron>
             <div className="container">
                  <div classname="row row-header">
                     <div className="col-12 col-sm-6">
                       <h1>Restorante Con Fusion</h1>
                       <p>We take inspiration from the world's best cuisines ,and create a unique fusion experience,Our lipsmacking creations will tickle your culinary senses </p>
                     </div>
                  </div>
             </div>
             </Jumbotron>
             <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader>LogIn</ModalHeader>
                <ModalBody>
                

                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                        

                </ModalBody>
             
             </Modal>
            
             </>
             //short form of React.Fragment which enables us to group together our elements directly in dom not as a node
             //<React.Fragment>
         );
     }
}

export default Header;
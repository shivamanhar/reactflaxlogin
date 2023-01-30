import React, { useEffect , useState} from 'react'
import { Button, Container, Navbar,Nav,NavDropdown,Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import logo from './image/logo.png'
import { useDispatch, useSelector } from 'react-redux'
import {  useNavigate } from 'react-router-dom'
import { logout } from './actions/userActions';


function Header() {

  /* login related details */
    const userLogin = useSelector(state=>state.userLogin)  
    const navigate = useNavigate();
    const {error, loading, userInfo}= userLogin

    
    useEffect(()=>{
      console.log(userInfo);
        if(userInfo)
        {
           // navigate('/userentrypage')
        }
        
    });



    const dispatch = useDispatch()

    const logoutHandler = () => {
      console.log(`logout`)
       dispatch(logout())
    }

  const [scrollTop, setScrollTop] = useState(0);
 
  const scrol_eff =   {
    backgroundColor: "#fff",
    padding:"0px",
    boxShadow: "rgb(4 54 143 / 72%) 0px 2px 20px"
  }


  useEffect(() => {
    const handleScroll = event => {
      setScrollTop(window.scrollY);     
    };

      window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <header className= 'header  fixed-top ' style={scrollTop > 30 ? scrol_eff:{}}  >
            <Container>
           
            <Navbar bg="wight" expand="lg">
      <Container>
        <LinkContainer to="/">
        <Navbar.Brand  ><img src={logo} style={ {   width: '9.5em'}}></img></Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
            <Nav.Link >Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/aboutus">
            <Nav.Link >About Us</Nav.Link>
            </LinkContainer>
           {
            userInfo ? (
              <>
                <LinkContainer to="/userentrypage">
                  <Nav.Link>UserEntery </Nav.Link>
                </LinkContainer>
                <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>
              </>
            ) :(
              <>
                <LinkContainer to="/login">             
                <Nav.Link >Login</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/signup">
                <Nav.Link >Singup</Nav.Link>
                </LinkContainer>
              </>
            )
           }
                  
            
          
              
            
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            </Container>
        </header>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Header
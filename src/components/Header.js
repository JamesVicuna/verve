import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem, Container, Col, Row } from "reactstrap";
import { NavLink } from "react-router-dom";
import VerveLogo from "../app/assets/verve.webp";


const Header = () => {
   return (
      <>

      <Navbar dark sticky='top'>
         <NavbarBrand className="m-auto">
            <img src={VerveLogo} alt="Verve Coffee Roasters" />
         </NavbarBrand>

         <Nav>
            <NavItem>
               <NavLink className='nav-link' to="/">
                  Home
               </NavLink>
            </NavItem>
            <NavItem>
               <NavLink className='nav-link' to="/shop">
                  Shop
               </NavLink>
            </NavItem>
            <NavItem>
               <NavLink className='nav-link' to='/cart'>
                  Cart
               </NavLink>
            </NavItem>
         </Nav>
         
      </Navbar>
      </>
   )
}

export default Header; 
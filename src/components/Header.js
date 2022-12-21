import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem, Container, Col, Row } from "reactstrap";
import { NavLink } from "react-router-dom";
import VerveLogo from "../app/assets/verve.webp";


const Header = () => {
   return (
      <>
      <Navbar>
         <NavbarBrand>
            <img src={VerveLogo} alt="Verve Coffee Roasters" /> hey bitch
         </NavbarBrand>

         <Nav navbar>
            <NavItem>
               <NavLink className="nav-link" to="/">
                  <i /> COFFEEE
               </NavLink>
            </NavItem>
            {/* <NavItem>
               <NavLink className="nav-link">
                  <i /> SUBSCRIPTIONS
               </NavLink>
            </NavItem>
            <NavItem>
               <NavLink className="nav-link">
                  <i /> LOCATIONS
               </NavLink>
            </NavItem> */}
         </Nav>

      </Navbar>
      </>
   )
}

export default Header; 
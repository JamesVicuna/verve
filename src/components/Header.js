import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem, Container, Col, Row } from "reactstrap";
import { NavLink } from "react-router-dom";
import VerveLogo from "../app/assets/verve.webp";


const Header = () => {
   return (
      <>

      <Navbar>
         <NavbarBrand className="m-auto">
            <img src={VerveLogo} alt="Verve Coffee Roasters" />
         </NavbarBrand>

         <Nav>
            <NavItem>
               Home
            </NavItem>
            <NavItem>
               Shop
            </NavItem>
            <NavItem>
               Cart
            </NavItem>
         </Nav>
         
      </Navbar>
      </>
   )
}

export default Header; 
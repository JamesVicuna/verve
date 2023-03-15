import { Container } from "reactstrap";
import CoffeeProductDisplayCard from "../features/coffees/CoffeeProductDisplayCard";
import { useSelector } from "react-redux";

const Shop = () => {
   return (
      <Container>
         <CoffeeProductDisplayCard />
      </Container>
   )
}

export default Shop;
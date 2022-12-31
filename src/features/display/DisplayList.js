import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import { selectAllCoffees, selectFeaturedCoffee } from "../coffees/coffeesSlice";
import DisplayCard from "./DisplayCard";


const DisplayList = () => {
   const items = useSelector((state) => [selectFeaturedCoffee(state), selectFeaturedCoffee(state)])

   return (
      <Row>
         {items.map((item,idx) => {
            return (
               item && (
               <Col md className="m-1" key={idx}>
                  <DisplayCard item={item} /> 
               </Col>
               )
            )
         })}
      </Row>

   )
}

export default DisplayList; 
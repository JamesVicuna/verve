import {Card, CardImg, CardText, CardBody, CardTitle} from "reactstrap";
import { useSelector } from "react-redux";
import { selectFeaturedCoffee } from "./coffeesSlice";

const CoffeeProductDisplayCard = () => {
   // deconstructing item
   const item = useSelector((state) => selectFeaturedCoffee(state))
   const {image, name, description, flavorDescriptions } = item;

   return (
      <Card>
         <CardImg src={image} alt={name} />
         <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardText>{flavorDescriptions.join(" ")}</CardText>
         </CardBody>
      </Card>
   )
}

export default CoffeeProductDisplayCard;
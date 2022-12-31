import { Container } from "reactstrap";
import DisplayFeatured from "../features/display/DisplayFeatured";
import DisplayList from "../features/display/DisplayList";

const HomePage = () => {
   return (
      <Container>
         <DisplayList />
      </Container>
   )
}

export default HomePage;
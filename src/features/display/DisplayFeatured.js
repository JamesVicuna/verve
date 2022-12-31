import { Col, Row } from "reactstrap";

const DisplayFeatured = (item) => {

   const {image, name, description} = item; 
   
   return (
      <Row>
         <Col className="md-6">
            {image}
         </Col>
         <Col className="md-6">
            <h1>{name}</h1>
            <p>{description}</p>
         </Col>
      </Row>
   )


}

export default DisplayFeatured;
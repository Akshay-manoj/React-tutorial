import ClassWelcomeComponent from "./components/component-type/ClassWelcomeComponent";
import FunctionalWelcomeComponent from "./components/component-type/FunctionalWelcomeComponent";

import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col md={6}>
            <FunctionalWelcomeComponent />
          </Col>
          <Col md={6}>
            <ClassWelcomeComponent />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

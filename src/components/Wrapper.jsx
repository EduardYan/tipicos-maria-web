import Container from "react-bootstrap/Container";
import ImagesView from "./Carousel.jsx";
import LocationSection from "./Location.jsx";

function Wrapper() {
  return (
    <Container className="my-5">
      <ImagesView />
      <LocationSection />
    </Container>
  );
}

export default Wrapper;

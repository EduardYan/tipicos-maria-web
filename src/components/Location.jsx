import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function LocationSection() {
  return (
    <section className="mt-5">
      <h1 className="mb-3 text-center">Nuestros Locales</h1>
      <div className="d-flex justify-content-center location-section-wrapper">
        <Card data-aos="fade-right">
          <Card.Img
            variant="top"
            src="https://lh5.googleusercontent.com/p/AF1QipPW3OEYorvHzRb7I0VT4B21Qu3rxop0-J7yH-es=w408-h306-k-no"
          />
          <Card.Body>
            <Card.Title>El mirador</Card.Title>
            <Card.Text>Visitanos en el mirador de San Salvador</Card.Text>
            <Button variant="primary" className="btn-lg">
              <a
                href="https://maps.app.goo.gl/sZR9tsbzVf9ju1k59"
                rel="noreferrer"
                target="_blank"
              >
                Ver
              </a>
            </Button>
          </Card.Body>
        </Card>
        <Card data-aos="fade-left">
          <Card.Img
            variant="top"
            src="https://lh5.googleusercontent.com/p/AF1QipP5_E--BprmUWZB9gE5VGcV-QUiEzu0_72FiOA=w426-h240-k-no"
          />
          <Card.Body>
            <Card.Title>San Salvador</Card.Title>
            <Card.Text>Visitanos en nuestro fabuloso local</Card.Text>
            <Button variant="primary" className="btn-lg">
              <a
                href="https://maps.app.goo.gl/HQZ3RmPjGYYNeD4z9"
                rel="noreferrer"
                target="_blank"
              >
                Ver
              </a>
            </Button>
          </Card.Body>
        </Card>
      </div>
    </section>
  );
}

export default LocationSection;

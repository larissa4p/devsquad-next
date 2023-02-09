import Image from "next/image";
import Im01 from "../../public/images/01.png";
import Im02 from "../../public/images/02.png";
import Im03 from "../../public/images/03.png";
import Im04 from "../../public/images/04.png";
import Im05 from "../../public/images/05.png";
import Im08 from "../../public/images/08.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Frictionless = () => {
  return (
    <>
      {/* DESKTOP */}
      <Container className="d-none d-md-block d-lg-block">
        <Row className="pt-5 text-light">
          <Col md="12" className="text-center">
            <h3 className="fs-1 fw-bolder">Frictionless scalability</h3>
            <p>
              DevSquad engage into your technology department with high-
              <br />
              performing, on-demand teams of developers.
            </p>
          </Col>
          <Row className="ms-1 mb-5">
            <Col md="4" className="text-center pt-4">
              <Image src={Im01} alt="Icon" />
              <h6 className="fw-bolder fs-5">Dedicated Teams</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                erat nibh tristique ipsum.
              </p>
            </Col>
            <Col md="4" className="text-center pt-4">
              <Image src={Im02} alt="Icon" />
              <h6 className="fw-bolder fs-5">Motivated Developers</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                erat nibh tristique ipsum.
              </p>
            </Col>
            <Col md="4" className="text-center pt-4">
              <Image src={Im03} alt="Icon" />
              <h6 className="fw-bolder fs-5">Dedicated Support</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                erat nibh tristique ipsum.
              </p>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col md="4" className="text-center pt-4">
              <Image src={Im04} alt="Icon" />
              <h6 className="fw-bolder fs-5">Flexible Contract</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                erat nibh tristique ipsum.
              </p>
            </Col>
            <Col md="4" className="text-center pt-4">
              <Image src={Im05} alt="Icon" />
              <h6 className="fw-bolder fs-5">Reliable Remote Talents</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                erat nibh tristique ipsum.
              </p>
            </Col>
            <Col md="4" className="text-center pt-4">
              <Image src={Im08} alt="Icon" />
              <h6 className="fw-bolder fs-5">Maximize Team's Productivity</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                erat nibh tristique ipsum.
              </p>
            </Col>
          </Row>
        </Row>
      </Container>

      {/* MOBILE */}
      <Container className="d-block d-sm-none">
        <Row className="pt-5 text-light">
            <Col md="12" className="text-center">
              <h3 className="fs-1 fw-bolder">Frictionless scalability</h3>
              <p>
                DevSquad engage into your technology department with high-
                <br />
                performing, on-demand teams of developers.
              </p>
            </Col>
          <Row className="ms-1">
            <Col md="4" className="text-center pt-4">
              <Image src={Im01} alt="Icon" />
              <h6 className="fw-bolder fs-5">Dedicated Teams</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                erat nibh tristique ipsum.
              </p>
            </Col>
            <Col md="4" className="text-center pt-4">
              <Image src={Im02} alt="Icon" />
              <h6 className="fw-bolder fs-5">Motivated Developers</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                erat nibh tristique ipsum.
              </p>
            </Col>
            <Col md="4" className="text-center pt-4">
              <Image src={Im03} alt="Icon" />
              <h6 className="fw-bolder fs-5">Dedicated Support</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                erat nibh tristique ipsum.
              </p>
            </Col>
          </Row>
          <Row className="mb-5 ms-1">
            <Col md="4" className="text-center pt-4">
              <Image src={Im04} alt="Icon" />
              <h6 className="fw-bolder fs-5">Flexible Contract</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                erat nibh tristique ipsum.
              </p>
            </Col>
            <Col md="4" className="text-center pt-4">
              <Image src={Im05} alt="Icon" />
              <h6 className="fw-bolder fs-5">Reliable Remote Talents</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                erat nibh tristique ipsum.
              </p>
            </Col>
            <Col md="4" className="text-center pt-4">
              <Image src={Im08} alt="Icon" />
              <h6 className="fw-bolder fs-5">Maximize Team's Productivity</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                erat nibh tristique ipsum.
              </p>
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default Frictionless;

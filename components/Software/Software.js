import styles from "../../styles/Software.module.css"
import Image from "next/image";
import Img01 from "../../public/images/Cover.png";
import Img02 from "../../public/images/Cover2.png";
import Img03 from "../../public/images/Cover3.png";
import Img04 from "../../public/images/Cover4.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Software = () => {
  return (
    <Container className="d-none d-md-block d-lg-block text-light pt-5">
      <Row>
        <Col md="12" className="text-md-start">
          <h3 className="fs-1 fw-bolder">
            Thought leaders in software
            <br />
            development
          </h3>
          <a className={`${styles["no-decoration"]} text-success`} href="##">
            Keep in touch with our blog
          </a>
        </Col>
      </Row>
      <Row className="pt-5">
        <Col md="3">
          <Image className="img-fluid w-100" src={Img01} alt="Icon" />
          <p className="align-items-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Col>
        <Col md="3">
          <Image className="img-fluid w-100" src={Img02} alt="Icon" />
          <p className="align-items-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Col>
        <Col md="3">
          <Image className="img-fluid w-100" src={Img03} alt="Icon" />
          <p className="align-items-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Col>
        <Col md="3">
          <Image className="img-fluid w-100" src={Img04} alt="Icon" />
          <p className="align-items-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Software;

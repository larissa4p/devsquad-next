import Container from "react-bootstrap/Container";
import Image from "next/image";
import Logos from "../../public/images/Logos.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../styles/Skills.module.css";

const Skills = () => {
  return (
    <>
      <Container className="d-none d-md-block d-lg-block text-light">
        <Row>
          <Col md="6" className="pt-5">
            <div className="pt-5 mt-5 w-75">
              <h3 className="fs-1 fw-bolder">A perfect fit, any skills</h3>
              <p className="pt-3">
                Seasoned software engineers, coders, product designers and
                architects with expertise across hundreds of technologies
              </p>
            </div>
          </Col>
          <Col md="6" className="pt-5">
            <Image className="img-fluid" src={Logos} alt="Logo" />
          </Col>
        </Row>
      </Container>
      {/* MOBILE */}
      <Container className="p-5 text-center d-block d-sm-none text-light">
        <Row>
          <Col md="6">
            <div className={styles.perfect_h3}>
              <h3 className="fs-1 fw-bolder pb-2">
                A perfect fit,
                <br />
                any skills
              </h3>
            </div>
            <p>
              Seasoned software engineers, coders, product designers and
              architects with expertise across hundreds of technologies
            </p>
          </Col>
          <Col md="6" className="pt-2">
            <Image className="img-fluid" src={Logos} alt="Logo" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Skills;

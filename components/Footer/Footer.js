import styles from "../../styles/Footer.module.css";
import Image from "next/image";
import Img01 from "../../public/images/Layer-2.png";
import Img02 from "../../public/images/Icon2.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <>
      {/* DESKTOP */}
      <Container className="d-none d-md-block d-lg-block text-light">
        <Row>
          <Col md="12" className="pb-4 pt-5">
            <Image src={Img01} alt="Logo DevSquad" />
          </Col>
        </Row>
        <Row>
          <Col md="12" className="pb-1">
            <div>
              <a
                className={`${styles["no-decoration"]} text-light pe-4`}
                href="##"
              >
                Hire us Now
              </a>
              <a
                className={`${styles["no-decoration"]} text-light pe-4`}
                href="##"
              >
                Apply as a Developer
              </a>
            </div>
          </Col>
          <Col md="12" className="pb-1">
            <a
              className={`${styles["no-decoration"]} text-light pe-4`}
              href="###"
            >
              About
            </a>
            <a
              className={`${styles["no-decoration"]} text-light pe-4`}
              href="##"
            >
              Client
            </a>
            <a
              className={`${styles["no-decoration"]} text-light pe-4`}
              href="###"
            >
              Pricing
            </a>
            <a
              className={`${styles["no-decoration"]} text-light pe-4`}
              href="###"
            >
              Careers
            </a>
            <a
              className={`${styles["no-decoration"]} text-light pe-4`}
              href="###"
            >
              Help
            </a>
            <a
              className={`${styles["no-decoration"]} text-light pe-4`}
              href="###"
            >
              Privacy Policy
            </a>
          </Col>
          <Col md="12">
            <p>&copy;2023 DevSquad</p>
          </Col>
        </Row>
      </Container>

      {/* MOBILE */}
      <Container className="d-block d-sm-none text-light mb-5">
        <Row>
          <Col md="12" className="p-3">
            <Image src={Img01} alt="Logo DevSquad" />
          </Col>
        </Row>
        <Row>
          <Col md="4" className={`${styles.col4} mb-3 d-flex flex-column`}>
            <a
              className={`${styles["no-decoration"]} text-light pb-4`}
              href="##"
            >
              About
            </a>
            <a
              className={`${styles["no-decoration"]} text-light pb-4`}
              href="##"
            >
              Client
            </a>
            <a
              className={`${styles["no-decoration"]} text-light pb-4`}
              href="##"
            >
              Pricing
            </a>
            <a
              className={`${styles["no-decoration"]} text-light pb-4`}
              href="##"
            >
              Careers
            </a>
            <a
              className={`${styles["no-decoration"]} text-light pb-4`}
              href="##"
            >
              Help
            </a>
            <a
              className={`${styles["no-decoration"]} text-light pb-4`}
              href="##"
            >
              PrivacyPolicy
            </a>
          </Col>
          <Col md="8" className={`${styles.col8} d-flex flex-column `}>
            <a className={`${styles["no-decoration"]} text-light`} href="##">
              Hire us Now
            </a>
            <br />
            <a className={`${styles["no-decoration"]} text-light `} href="##">
              Apply as a Developer
            </a>
            <div className={`${styles.bg_footer}`}></div>
          </Col>          
          <Row>
            <Col className="d-flex justify-content-end ">
              <p>&copy;2023 DevSquad</p>
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default Footer;

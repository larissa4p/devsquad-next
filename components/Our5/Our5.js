import styles from "../../styles/Our5.module.css";
import Image from "next/image";
import Im01 from "../../public/images/Icon-1.png";
import Im02 from "../../public/images/Icon-2.png";
import Im03 from "../../public/images/Icon-5.png";
import Im04 from "../../public/images/Icon-4.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Our5 = () => {
  return (
    <div className={styles.skills}>
      {/* DESKTOP */}
      <Container className="d-none d-md-block d-lg-block text-light pt-5">
        <div className="d-flex">
          <Col md="6">
            <h3 className="fs-1 me-5 ps-5">Our 5 years of achievements</h3>
            <p className="ps-5">With our super powers we have reached this</p>
          </Col>
          <Row>
            <Col md="6">
              <div className="pb-3">
                <Row>
                  <Col md="2">
                    <Image src={Im01} alt="Icon" />
                  </Col>
                  <Col md="10">
                    <h6 className="fw-bolder fs-4">10,000+</h6>
                    <p>Successfully deploys</p>
                  </Col>
                </Row>
                <Row>
                  <Col md="2" className="pt-4">
                    <Image src={Im02} alt="Icon" />
                  </Col>
                  <Col md="10" className="pt-3">
                    <h6 className="fw-bolder fs-4">50+</h6>
                    <p>Apps on stores</p>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md="6">
              <div className="pb-3">
                <Row>
                  <Col md="2">
                    <Image src={Im03} alt="Icon" />
                  </Col>
                  <Col md="10">
                    <h6 className="fw-bolder fs-4">2 Million</h6>
                    <p>Daily users covered by our services</p>
                  </Col>
                </Row>
                <Row>
                  <Col md="2">
                    <Image src={Im04} alt="Icon" />
                  </Col>
                  <Col md="10">
                    <h6 className="fw-bolder fs-4">25</h6>
                    <p>Teams over companies</p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      {/* MOBILE */}
      <Container className="d-block d-sm-none text-light pt-5">
        <Row>
          <Col md="6" className="text-center">
            <h3 className={`${styles.our5} fs-1`}>
              Our 5 years of achievements
            </h3>
            <p className="fs-4 p-3">
              With our super powers we have reached this
            </p>
          </Col>
          <Col md="6">
            <Row className="m-5">
              <Col md="6">
                <Row>
                  <Col md="6" className="p-2">
                    <div className="align-items-center d-flex flex-nowrap">
                      <Image src={Im01} alt="Icon" />
                      <div className="ps-2">
                        <h6 className="fw-bolder fs-4">10,000+</h6>
                        <p>Successfully deploys</p>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md="6" className="p-2">
                    <div className="align-items-center d-flex flex-nowrap">
                      <Image src={Im02} alt="Icon" />
                      <div className="ps-2">
                        <h6 className="fw-bolder fs-4">2 Million</h6>
                        <p>Daily users covered by our services</p>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md="6" className="p-2">
                    <div className="align-items-center d-flex flex-nowrap">
                      <Image src={Im03} alt="Icon" />
                      <div className="ps-2">
                        <h6 className="fw-bolder fs-4">50+</h6>
                        <p>Apps on stores</p>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md="6" className="p-2">
                    <div className="align-items-center d-flex flex-nowrap">
                      <Image src={Im04} alt="Icon" />
                      <div className="ps-2">
                        <h6 className="fw-bolder fs-4">25</h6>
                        <p>Teams over companies</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Our5;

import styles from "../../styles/WeGotYoutBack.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const WeGotYoutBack = () => {
  return (
    <>
      {/* DESKTOP */}
      <div className={`${styles.bck} d-none d-md-block d-lg-block`}>
        <Container>
          <Row className="pt-5 mt-3">
            <Col lg="6" className={`${styles.pd} ms-5 pt-5 mt-5 text-light`}>
              <h3
                className={`${styles.size_companies} pt-5 mt-5 fs-1 fw-bolder`}
              >
                We got
                <br />
                your back
              </h3>
              <p>
                Hide world-class developers today. Companies of all sizes-from
                startups to big ones-trust <b>DevSquad</b> to deliver them
                execptional software engineers.
              </p>
              <button
                className={`${styles.btn_color} btn btn-success bt-color`}
              >
                Hire Us
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* MOBILE */}
      <Container className={`${styles.bck} d-block d-sm-none`}>
        <Row>
          <Col xs="12" className="p-5 text-light text-center ">
            <div className={styles.size_companies}>
              <div className={styles.we_h3_mobile}>
                <h3 className="pt-5 mt-5 fs-1 fw-bolder">
                  We got
                  <br />
                  your back
                </h3>
              </div>
            </div>
            <p className="pt-3">
              Hide world-class developers today. Companies of all sizes-from
              startups to big ones-trust <b>DevSquad</b> to deliver them
              execptional software engineers.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <button className={`${styles.btn_color} w-100 btn btn-success`}>
              Hire Us
            </button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default WeGotYoutBack;

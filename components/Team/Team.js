import styles from "../../styles/Team.module.css";
import Image from "next/image";
import Img01 from "../../public/images/Image-1.png";
import Img02 from "../../public/images/Image-2.png";
import Img03 from "../../public/images/Image-3.png";
import Img04 from "../../public/images/Image-4.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Team = () => {
  return (
    <>
      {/* DESKTOP */}
      <Container className="text-light d-none d-md-block d-lg-block">
        <Row>
          <Col md="6" className="pt-5">
            <Row className="mb-4">
              <Col mb="6" className="pe-2">
                <Image
                  className="img-fluid w-100 square bg-black rounded-1"
                  src={Img01}
                  alt=""
                />
              </Col>
              <Col mb="6" className="ps-2 d-flex align-items-end">
                <Image
                  className="img-fluid w-100 square bg-black rounded-1"
                  src={Img02}
                  alt=""
                />
              </Col>
            </Row>
            <Row>
              <Col mb="4" className={`${styles.size2} ps-2`}>
                <Image
                  className="img-fluid w-100 square bg-black rounded-1"
                  src={Img03}
                  alt=""
                />
              </Col>
              <Col mb="8" className={`${styles.size2} ps-2`}>
                <Image
                  className="img-fluid w-100 square bg-black rounded-1"
                  src={Img04}
                  alt=""
                />
              </Col>
            </Row>
          </Col>
          <Col md="6" className="pt-5 ps-5 d-flex align-items-center">
            <div>
              <h3 className="fs-1 fw-bolder pt-5 text-md-start">
                Our teams are made up of developers who push themselves forward
                both personally and professionally.
              </h3>
              <p>Battle-tested and ready to deliver</p>
              <button className={`${styles.btn_color} btn btn-success`}>
                Hire Us
              </button>
            </div>
          </Col>
        </Row>
      </Container>

      {/* MOBILE */}
      <Container className="text-light d-block d-sm-none pb-4">
        <Row>
          <Col md="6" className="pt-5">
            <Row className="mb-4">
              <Col mb="6" className="pe-2">
                <Image
                  className="img-fluid w-100 square bg-black rounded-1"
                  src={Img01}
                  alt=""
                />
              </Col>
              <Col mb="6" className="ps-2 d-flex align-items-end">
                <Image
                  className="img-fluid w-100 square bg-black rounded-1"
                  src={Img02}
                  alt=""
                />
              </Col>
            </Row>
            <Row>
              <Col mb="4" className={`${styles.size2} p-2`}>
                <Image
                  className="img-fluid w-100 square bg-black rounded-1"
                  src={Img03}
                  alt=""
                />
              </Col>
              <Col mb="8" className={`${styles.size2} p-2`}>
                <Image
                  className="img-fluid w-100 square bg-black rounded-1"
                  src={Img04}
                  alt=""
                />
              </Col>
            </Row>
          </Col>
          <Col md="6" className="p-4 d-flex align-items-center">
            <div>
              <h3 className="fs-1 fw-bolder pt-5 text-md-start">
                Our teams are made up of developers who push themselves forward
                both personally and professionally.
              </h3>
              <p className="py-2">Battle-tested and ready to deliver</p>
            </div>
          </Col>
          <button
            className={`${styles.btn_color} btn btn-success bt-color p-3 w-100`}
          >
            Hire Us
          </button>
        </Row>
      </Container>
    </>
  );
};

export default Team;

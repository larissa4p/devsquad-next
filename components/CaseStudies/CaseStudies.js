import styles from "../../styles/CaseStudies.module.css";
import Image from "next/image";
import Img01 from "../../public/images/Project-Cover.png";
import Img02 from "../../public/images/Project-Cover1.png";
import Img03 from "../../public/images/Project-Cover2.png";
import Img04 from "../../public/images/Project-Cover3.png";
import Arrow from "../../public/images/arrow.png";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CaseStudies = () => {
  return (
    <>
      {/* DESKTOP */}
      <Container className="d-none d-md-block d-lg-block text-light">
        <Row>
          <Col md="6" className="d-flex flex-column">
            <Col md="12" className="mt-3">
              <h3 className="fs-1 fw-bolder pt-5">Case studies</h3>
            </Col>
            <div className="mt-5 rounded-2">
              <Image className="mt-4 img-fluid w-100" src={Img01} alt="" />
              <h6 className="fw-bolder fs-5 pt-4">Project Tite</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus,
                fermentum amet faucibus sed id nisi lectus at.
              </p>
            </div>
            <div className="mt-5 rounded-2">
              <Image className="mt-4 img-fluid w-100" src={Img02} alt="" />
              <h6 className="fw-bolder fs-5 pt-4">Project Tite</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus,
                fermentum amet faucibus sed id nisi lectus at.
              </p>
            </div>
          </Col>
          <Col md="6" className="d-flex flex-column">
            <div className="ps-5">
              <div className="d-flex">
                <div className="mt-1 back-dark rounded-2">
                  <Image className="mt-4 img-fluid w-100" src={Img03} alt="" />
                  <h6 className="fw-bolder fs-5 pt-4">Project Tite</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lacus, fermentum amet faucibus sed id nisi lectus at.
                  </p>
                </div>
              </div>
              <div className="mt-1 back-dark rounded-2">
                <Image className="mt-4 img-fluid w-100" src={Img04} alt="" />
                <h6 className="fw-bolder fs-5 pb-4 pt-4">Project Tite</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lacus, fermentum amet faucibus sed id nisi lectus at.
                </p>
                <Link href="##" legacyBehavior>
                  <a className={styles.view_all_case}>
                    View all case studies
                    <span>
                      <Image src={Arrow} alt="Arrow icon" id="arrow" />
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* MOBILE */}
      {/* <Container className="d-block d-sm-none text-light">
        <Row>
          <Col md="6">
            <div className="mt-3 d-flex flex-column">
              <Col md="12" className="text-center pb-3">
                <h3 className="fs-1 fw-bolder">Case studies</h3>
              </Col>
              <div className="rounded-2">
                <Image className="mt-4 img-fluid w-100" src={Img01} alt="" />
                <h6 className="fw-bolder fs-5 pt-3">Project Tite</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lacus, fermentum amet faucibus sed id nisi lectus at.
                </p>
              </div>
              <div className="rounded-2">
                <Image className="mt-4 img-fluid w-100" src={Img03} alt="" />
                <h6 className="fw-bolder fs-5 pt-3">Project Tite</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lacus, fermentum amet faucibus sed id nisi lectus at.
                </p>
              </div>
            </div>
            <div className="rounded-2 d-block d-sm-none d-flex justify-content-end">
              <Link href="##" legacyBehavior>
                <a className={styles.view_all_case}>
                  View all case studies
                  <span>
                    <Image src={Arrow} alt="Arrow icon" id="arrow" />
                  </span>
                </a>
              </Link>
            </div>
          </Col>
        </Row>
      </Container> */}
    </>
  );
};

export default CaseStudies;

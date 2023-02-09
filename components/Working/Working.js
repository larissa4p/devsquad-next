import Container from "react-bootstrap/Container";
import Image from "next/image";
import Photo from "../../public/images/Photo.png";
import IphoneX from "../../public/images/iPhone-X.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import styles from "../../styles/Working.module.css";

const Working = () => {
  return (
    <Container className="d-none d-md-block d-lg-block square bg-dark rounded-3 text-light">
      <Row>
        <Col md="6" className="p-5">
          <div className="p-5">
            <p className="fs-5">
              Working with DevSquad gave me the flexibility I needed to build
              the amount of applications needed for our project, I was able to
              direct my team's focus on the business strategy and entrust all
              development to the devsquad team.
            </p>
            <Row className="d-none pt-4 d-md-block d-lg-block">
              <Col md="12" className="d-inline-flex">
                <Col md="2">
                  <Image className="img-fluid" src={Photo} alt="People" />
                </Col>
                <Col md="10">
                  <h6 className="fw-bolder fs-5">Jane Cooper</h6>
                  <p className="">CEO, ABC Corporation</p>
                </Col>
              </Col>
            </Row>
          </div>
        </Col>
        <Col md="6">
          <Image
            className={`${styles["img_back"]} img-fluid mx-auto d-block pt-5 mt-5 w-75 ps-5 ms-5`}
            src={IphoneX}
            alt="Phone"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Working;

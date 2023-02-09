import styles from "../../styles/Working_Slick.module.css";
import Image from "next/image";
import Photo from "../../public/images/Photo.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { Component } from "react";
import Slider from "react-slick";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 2000,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Container className="d-block d-sm-none text-light pt-4 bg-dark">
        <Row>
          <Slider {...settings}>
            <Col md="6" className="p-5">
              <p className="fs-5">
                Working with DevSquad gave me the flexibility I needed to build
                the amount of applications needed for our project, I was able to
                direct my team's focus on the business strategy and entrust all
                development to the devsquad team.
              </p>
              <Row>
                <Col md="12" className="d-inline-flex pt-3">
                  <Col md="2">
                    <Image
                      className="img-fluid pe-3"
                      src={Photo}
                      alt="People"
                    />
                  </Col>
                  <Col md="10">
                    <h6 className="fw-bolder fs-5">Jane Cooper</h6>
                    <p className="">CEO, ABC Corporation</p>
                  </Col>
                </Col>
              </Row>
            </Col>
            <Col md="6" className="p-5">
              <p className="fs-5">
                Working with DevSquad gave me the flexibility I needed to build
                the amount of applications needed for our project, I was able to
                direct my team's focus on the business strategy and entrust all
                development to the devsquad team.
              </p>
              <Row>
                <Col md="12" className="d-inline-flex pt-3">
                  <Col md="2">
                    <Image
                      className="img-fluid pe-3"
                      src={Photo}
                      alt="People"
                    />
                  </Col>
                  <Col md="10">
                    <h6 className="fw-bolder fs-5">Jane Cooper</h6>
                    <p className="">CEO, ABC Corporation</p>
                  </Col>
                </Col>
              </Row>
            </Col>
            <Col md="6" className="p-5">
              <p className="fs-5">
                Working with DevSquad gave me the flexibility I needed to build
                the amount of applications needed for our project, I was able to
                direct my team's focus on the business strategy and entrust all
                development to the devsquad team.
              </p>
              <Row>
                <Col md="12" className="d-inline-flex pt-3">
                  <Col md="2">
                    <Image
                      className="img-fluid pe-3"
                      src={Photo}
                      alt="People"
                    />
                  </Col>
                  <Col md="10">
                    <h6 className="fw-bolder fs-5">Jane Cooper</h6>
                    <p className="">CEO, ABC Corporation</p>
                  </Col>
                </Col>
              </Row>
            </Col>
          </Slider>
        </Row>
      </Container>
    );
  }
}

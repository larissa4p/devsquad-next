import styles from "../../styles/Software_Slick.module.css";
import Image from "next/image";
import Img01 from "../../public/images/Cover.png";
import Img02 from "../../public/images/Cover2.png";
import Img03 from "../../public/images/Cover3.png";
import Img04 from "../../public/images/Cover4.png";
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
      autoplaySpeed: 1000,
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
      <Container className="d-block d-sm-none text-light pt-5">
        <Row>
          <Col md="12" className="text-md-start text-center">
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
        <Row className="pt-4">
          <Slider {...settings} className={`${styles.bg_frame}`}>
            <Col md="3" className="p-4">
              <Image className="img-fluid w-100" src={Img01} alt="Icon" />
              <p className="align-items-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </Col>
            <Col md="3" className="p-4">
              <Image className="img-fluid w-100" src={Img02} alt="Icon" />
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </Col>
            <Col md="3" className="p-4">
              <Image className="img-fluid w-100" src={Img03} alt="Icon" />
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </Col>
            <Col md="3" className="p-4">
              <Image className="img-fluid w-100" src={Img04} alt="Icon" />
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </Col>
          </Slider>
        </Row>
      </Container>
    );
  }
}

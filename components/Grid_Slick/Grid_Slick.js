import styles from "../../styles/Grid_Slick.module.css";
import Image from "next/image";
import HotSpot from "../../public/images/Hubspot-Logo.png";
import Airbnb from "../../public/images/airbnb-logo.png";
import BookMyShow from "../../public/images/BookMyShow Logo.png";
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
      <Container className="d-block d-sm-none text-light pb-5">
        <Row>
          <Slider {...settings} className="p-3">
            <Col md="3" className="p-3">
              <Image className="img-fluid" src={HotSpot} alt="Icon" />
              <span className={`${styles.aspas3} m-2`}></span>
              <p className="pt-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae, magnam soluta ullam ratione quia eius, fugiat
                voluptatum voluptas, sed pariatur blanditiis repellat quo
                tenetur hic eos at dolorem nulla velit?
                <br />
                <br />
                <b>Floyd Miles</b>
                <br />
                Vice President, GoPro
              </p>
            </Col>
            <Col md="3" className="p-3">
              <Image className="img-fluid" src={Airbnb} alt="Icon" />
              <span className={`${styles.aspas3} m-2`}></span>
              <p className="pt-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae, magnam soluta ullam ratione quia eius, fugiat
                voluptatum voluptas, sed pariatur blanditiis repellat quo
                tenetur hic eos at dolorem nulla velit?
                <br />
                <br />
                <b>Jane Cooper</b>
                <br />
                CEO, Airbnb
              </p>
            </Col>
            <Col md="3" className="p-3">
              <Image className="img-fluid" src={BookMyShow} alt="Icon" />
              <span className={`${styles.aspas3} m-2`}></span>
              <p className="pt-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae, magnam soluta ullam ratione quia eius, fugiat
                voluptatum voluptas, sed pariatur blanditiis repellat quo
                tenetur hic eos at dolorem nulla velit?
                <br />
                <br />
                <b>Kristin Watson</b>
                <br />
                Co-Founder, BookMyShow
              </p>
            </Col>
          </Slider>
        </Row>
      </Container>
    );
  }
}

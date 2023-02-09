import styles from "../../styles/CaseStudies_Slick.module.css";
import Image from "next/image";
import Img01 from "../../public/images/Project-Cover.png";
import Img02 from "../../public/images/Project-Cover1.png";
import Img03 from "../../public/images/Project-Cover2.png";
import Img04 from "../../public/images/Project-Cover3.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Arrow from "../../public/images/arrow.png";
import Link from "next/link";
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
      <Container className="d-block d-sm-none text-light">
        <Row>
          <Col md="12" className="mt-3">
            <h3 className="fs-1 fw-bolder pt-4 text-center">Case studies</h3>
          </Col>
          <Slider {...settings}>
            <Col md="3" className="p-3">
              <Image className="img-fluid w-100" src={Img01} alt="Icon" />
              <p className="align-items-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </Col>
            <Col md="3" className="p-3">
              <Image className="img-fluid w-100" src={Img02} alt="Icon" />
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </Col>
            <Col md="3" className="p-3">
              <Image className="img-fluid w-100" src={Img03} alt="Icon" />
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </Col>
            <Col md="3" className="p-3">
              <Image className="img-fluid w-100" src={Img04} alt="Icon" />
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </Col>
          </Slider>
          <div className="rounded-2 d-flex justify-content-end">
            <Link href="##" legacyBehavior>
              <a className={styles.view_all_case}>
                View all case studies
                <span>
                  <Image src={Arrow} alt="Arrow icon" id="arrow" />
                </span>
              </a>
            </Link>
          </div>
        </Row>
      </Container>
    );
  }
}

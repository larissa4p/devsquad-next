import Image from "next/image";
import Airbnb from "../../public/images/airbnb_logo_mb.png";
import Google from "../../public/images/google_logo_mb.png";
import HubSpot from "../../public/images/hubspot_logo_mb.png";
import Microsoft from "../../public/images/microsoft_logo_mb.png";
import Walmart from "../../public/images/walmart_logo_mb.png";
import Container from "react-bootstrap/Container";
import React, { Component } from "react";
import Slider from "react-slick";

export default class Slick extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 1000,
      cssEase: "linear",
    };
    return (
      <Container className="p-2">
        <p className="fs-3 text-center text-light">Trusted by</p>
        <hr />
        <Slider {...settings}>
          <div>
            <h3>
              <Image className="img-fluid" src={Airbnb} alt="Airbnb" />
            </h3>
          </div>
          <div>
            <h3>
              <Image className="img-fluid" src={Google} alt="Google" />
            </h3>
          </div>
          <div>
            <h3>
              <Image className="img-fluid" src={Microsoft} alt="Microsoft" />
            </h3>
          </div>
          <div>
            <h3 className="ps-3">
              <Image className="img-fluid " src={HubSpot} alt="HubSpot" />
            </h3>
          </div>
          <div>
            <h3>
              <Image className="img-fluid" src={Walmart} alt="Walmart" />
            </h3>
          </div>
        </Slider>
        <hr />
      </Container>
    );
  }
}

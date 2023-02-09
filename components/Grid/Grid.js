import styles from "../../styles/Grid.module.css";
import Image from "next/image";
import HotSpot from "../../public/images/Hubspot-Logo.png";
import Airbnb from "../../public/images/airbnb-logo.png";
import BookMyShow from "../../public/images/BookMyShow Logo.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Grid = () => {
  return (
    <div className={styles["div-2"]}>
      <Container>
        <Row>
          <Col md="6" className="text-light pb-4">
            <div className="mt-3 d-flex flex-column align-items-md-end">
              <div className="d-flex align-self-start">
                <span className={styles.aspas}></span>
              </div>
              <div className="ps-5 ms-5 pe-5">
                <div className="pt-5">
                  <h3 className="fs-1 fw-bolder">
                    Why companies <br /> choose us
                  </h3>
                </div>
                <p className="pt-2 text-start">
                  Discover the many ways our clients have embraced the benefits
                  of the DevSquad
                </p>
              </div>
              <div className="w-75 ps-3 m-3 d-none d-md-block d-lg-block  mt-3 square bg-black rounded-3">
                <Image
                  className="img-fluid mt-5 ms-4"
                  src={HotSpot}
                  alt="Logo Hubspot"
                />
                <span className={styles.aspas2}></span>
                <p className="ps-4 m-4 pb-5">
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
              </div>
            </div>
          </Col>
          <Col md="6" className="text-light d-none d-md-block d-lg-block">
            <div className="mt-5 pt-5 pb-4">
              <div className="p-4 d-flex">
                <div className="square bg-black rounded-3 ps-3 m-3">
                  <Image
                    className="img-fluid mt-5 ms-4"
                    src={Airbnb}
                    alt="Logo Airbnb"
                  />
                  <span className={styles.aspas2}></span>
                  <p className="ps-4 m-4 pb-5">
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
                </div>
              </div>
            </div>
            <div className="w-75 ">
              <div
                className={`${styles.skills} mt-5 ps-3 m-3 square bg-black rounded-3 d-none d-md-block d-lg-block`}
              >
                <Image
                  className="img-fluid mt-5 ms-3"
                  src={BookMyShow}
                  alt="Logo BookMyShow"
                />
                <span className={styles.aspas2}></span>
                <p className="ps-4 m-4 pb-5">
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
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Grid;

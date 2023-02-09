import styles from "../../styles/nav.module.css";
import Container from "react-bootstrap/Container";
import Image from "next/image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Brand from "../../public/images/brand.png";

const nav = () => {
  return (
    <>
      {/* DESKTOP */}
      <Navbar
        className={`${styles.bckWithNav} d-none d-sm-block`}
        collapseOnSelect
        expand="lg"
        bg="transparent"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#home">
            <Image
              className={styles.brandd}
              src={Brand}
              width="200px"
              height="30px"
              alt=""
              loading="lazy"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Why us?</Nav.Link>
              <Nav.Link href="#features">Clients</Nav.Link>
              <Nav.Link href="#features">Case Studies</Nav.Link>
              <Nav.Link href="#features">Our team</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>Apply as a Developer</Nav.Link>
              <Button className={styles.btn_color} variant="success">
                Hire a team now
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* MOBILE */}
      <Navbar
        className={`${styles.bckWithNav}  d-block d-sm-none pb-0`}
        collapseOnSelect
        expand="lg"
        bg="transparent"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#home">
            <Image
              className={styles.brandd}
              src={Brand}
              width="200px"
              height="30px"
              alt=""
              loading="lazy"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">
                <span>&lt;</span> Why us?
                <span>/&gt;</span>
              </Nav.Link>
              <Nav.Link href="#features">
                <span>&lt;</span> Why us?
                <span>/&gt;</span>
              </Nav.Link>
              <Nav.Link href="#features">
                <span>&lt;</span> Clients
                <span>/&gt;</span>
              </Nav.Link>
              <Nav.Link href="#features">
                <span>&lt;</span> Case Studies
                <span>/&gt;</span>
              </Nav.Link>
              <Nav.Link href="#features">
                <span>&lt;</span> Our team
                <span>/&gt;</span>
              </Nav.Link>
            </Nav>
            <Nav>
              <Button className={styles.btn_color} variant="success">
                Hire a team now
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default nav;

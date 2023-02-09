import styles from "../styles/Home.module.css";
import Nav from "../components/Nav/nav";
import WeGotYoutBack from "../components/WeGotYourBack/WeGotYoutBack";
import Slick from "../components/Slick/Slick"
import Skills from "../components/Skills/Skills";
import Grid from "../components/Grid/Grid";
import Grid_Slick from "../components/Grid_Slick/Grid_Slick";
import Our5 from "../components/Our5/Our5";
import Working from "../components/Working/Working";
import Working_Slick from "../components/Working_Slick/Working_Slick";
import Frictionless from "../components/Frictionless/Frictionless";
import CaseStudies from "../components/CaseStudies/CaseStudies";
import CaseStudies_Slick from "../components/CaseStudies_Slick/CaseStudies_Slick";
import Team from "../components/Team/Team";
import Software from "../components/Software/Software";
import Software_Slider from "../components/Software_Slider/Software_Slider"
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main className={styles.html}>
        <WeGotYoutBack />
        <Slick />
        <Skills />
        <Grid />
        <Grid_Slick />
        <Our5 />
        <Working />
        <Working_Slick/>
        <Frictionless />
        <CaseStudies />
        <CaseStudies_Slick />
        <Team />
        <Software />
        <Software_Slider />
        <Footer />
      </main>
    </>
  );
}

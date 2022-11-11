import { Container, Row, Col } from "reactstrap";


import '../../style/about-section.css'
import aboutImg from "../../assets/all-images/cars-img/rollroy.png";

import React from 'react'

const AboutSection = (aboutClass ) => {
  return <section
  className="about__section"
  style={
    aboutClass === "aboutPage"
      ? { marginTop: "0px" }
      : { marginTop: "280px" }
  }
>
  <Container>
    <Row>
      <Col lg="6" md="6">
        <div className="about__section-content">
          <h4 className="section__subtitle">About Us</h4>
          <h2 className="section__title">Welcome to car rent service</h2>
          <p className="section__description">
            With the motto: "Accompanying and growing" and with competitive service prices, 
            we believe and are very happy to become your new and long-term partner.
            We have selected and professionally trained, professional and courteous drivers who put safety responsibilities first. 
            In particular, know English, Korean, Chinese, .. and have long-term service experience for customers renting Korean, Chinese, English, French, American Singapore ... 
            <br/>
            We own a new car fleet The high quality of global brands will surely satisfy customers.

            We specialize in providing and servicing car rental needs such as:
          </p>

          <div className="about__section-item d-flex align-items-center">
            <p className="section__description d-flex align-items-center gap-2">
              <i class="ri-checkbox-circle-line"></i>Airport transfer.
            </p>

            <p className="section__description d-flex align-items-center gap-2">
              <i class="ri-checkbox-circle-line"></i>Short-term car rental and Long-term car rental service.

            </p>
          </div>

          <div className="about__section-item d-flex align-items-center">
            <p className="section__description d-flex align-items-center gap-2">
              <i class="ri-checkbox-circle-line"></i>Specializing in providing vehicles for the Conference, National, International Conference, NGO, Associations, Foreign Investment Projects in Vietnam ... and they have become strong partners Tuan Tu's long time ago.

            </p>

            <p className="section__description d-flex align-items-center gap-2">
              <i class="ri-checkbox-circle-line"></i>Other forms like car rental, wedding transportation, car for event, show, travelling ... To ensure the best car rental needs of customers, we have cars and categories Rental cars are as follows:
            </p>
          </div>
        </div>
      </Col>

      <Col lg="6" md="6">
        <div className="about__img">
          <img src={aboutImg} alt="" className="w-100" />
        </div>
      </Col>
    </Row>
  </Container>
</section>
}

export default AboutSection
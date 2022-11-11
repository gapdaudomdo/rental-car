
import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import "../../style/footer.css"



const quickLinks = [
  {
    path: "/about",
    display: "About",
  },

  {
    path: "#",
    display: "Privacy Policy",
  },

  {
    path: "/cars",
    display: "Car Listing",
  },
  {
    path: "/blogs",
    display: "Blog",
  },

  {
    path: "/contact",
    display: "Contact",
  },
];

const date= new Date()
const year= date.getFullYear() 

const Footer = () => {
  return <footer className="footer">
    <Container>
      <Row>
        <Col lg='4' md='4' sm='12'>
        <div className="logo footer__logo">
               <h1><Link to='/home' className='d-flex align-items-center gap-2'>
               <i class="ri-car-fill"></i>
               <span>Rent Car <br/> Service</span>
               </Link></h1>
            </div>

            <p className="footer__logo__content">
            Grasping the increasing demand for transportation, working and working in Ho Chi Minh City area. GiaHuyDo Trading - Tel - Trading Co.,
             Ltd specializes in providing professional, dynamic vehicles, 
             and a variety of car rental services ready to meet your urgent needs.
             With the motto: "Accompanying and growing" and with competitive service prices, 
             we believe and are very happy to become your new and long-term partner.
             We have selected and professionally trained, professional and courteous drivers who put safety responsibilities...
            </p>
        </Col>

        <Col lg='2 ' md='4' sm='6'>
          <div className="md-4">
            <h5 className="footer__link-title">Quick Links</h5>
            <ListGroup>
              {
                quickLinks.map((item, index)=> (
                  <ListGroupItem key={index}  className='p-0 mt-3 quick__link'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </div>
        </Col>


        <Col lg='2 ' md='4' sm='6'>
              <div className="mb-4">
              <h5 className="footer__link-title mb-4">CONTACT US</h5>
              <p className="office__info"> Address: 19 Hai Trieu street, Ben Nghe ward, district 1, Ho Chi Minh City, Viet Nam</p>
              <p className="office__info"> Hotline: 0763512628</p>
              <p className="office__info"> Email: giahuydo@gmail.com</p>
              </div>
        </Col>

        {/* <Col lg='2 ' md='4' sm='6'>
              <div className="mb-4">
              <h5 className="footer__link-title">Policy</h5>
              <p className="office__info">Chính Sách Bảo Mật</p>
              <p className="office__info"> Chính Sách Hủy Dịch Vụ Và Hoàn Tiền</p>
              </div>
        </Col> */}
        
        <Col lg='3' md='4'>
        <div className='md-4'>
        <h5 className="footer__link-title">NewsLetter</h5>
        <p className="section__description"> Subscribe</p>
          <div className='newsletter'>
              <input type="email" placeholder="Email"/>
              <span>
              <i class="ri-send-plane-fill"></i>
              </span>
          </div>

        </div>

        </Col>


        <Col lg='12'>
          <div className='footer__bottom'>
            <p className='section__description d-flex align-items-center justify-content-center gap -1 pt-4'>
            <i class="ri-copyright-fill"></i>Copyright {year},
                Developed by giahuydo TRADING INVESTMENT TRANSPORTS COMPANY LIMITED All rights reserved. Design by giahuydo Co.,Ltd
            </p>
          </div>
        </Col> 
      </Row>
    </Container>
  </footer>
}

export default Footer

import React from 'react'
import { Container, Row, Col, Button, NavItem } from 'reactstrap'
import { Link, NavLink } from 'react-router-dom'
import '../../style/header.css'



const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/cars",
    display: "Cars",
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
const Header = () => {
  return <header className='header'>

    {/* header top */}
    <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span>Need Help?</span>
                <span className="header__top__help">
                  <i class="ri-phone-fill"></i> 0763512628
                </span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                <Link to="#" className=" d-flex align-items-center gap-1">
                  <i class="ri-login-circle-line"></i> Login
                </Link>

                <Link to="#" className=" d-flex align-items-center gap-1">
                  <i class="ri-user-line"></i> Register
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>



      { /* header middle */}
      <div className="header__middle">
      <Container>
        <Row>
          <Col lg='4' md='3' sm='4'>
            <div className="logo">
               <h1><Link to='/home' className='d-flex align-items-center gap-2'>
               <i class="ri-car-fill"></i>
               <span>Rent Car <br/> Service</span>
               </Link></h1>
            </div>
          </Col>
          

          <Col lg='3' md='3' sm='4'>
            <div className="header__location d-flex align-items-center gap-2">
               <span><i class="ri-earth-fill"></i></span>
               <div className="header__location__content">
               <h4>VIỆT NAM</h4>
               <h6>TP.HỒ CHÍ MINH, VIỆT NAM</h6>
              </div>
            </div>
          </Col>

          <Col lg='3' md='3' sm='4'>
            <div className="header__location d-flex align-items-center gap-2">
               <span><i class="ri-time-line"></i></span>
               <div className="header__location__content">
               <h4>MONDAY TO SUNDAY</h4>
               <h6>9am - 6pm</h6>
              </div>
            </div>
           
          </Col>


          <Col lg='2' md='3' sm='0' className="d-flex align-items-center justify-content-end">
            <Button className="header__btn btn"  >
                <Link to='/contact'>
                <i class="ri-contacts-line"></i> Request a Call
                </Link>
             </Button>
          </Col>
        </Row>
      </Container>
      </div>



      {/* ============== main navigation============== */}

      <div className='main__navbar'>
      <Container>
        <div className='navigation__wrapper d-flex align-items-center justify-content-between'>
          <span className='mobile__menu'>
          <i class="ri-menu-line"></i>
          </span>

          <div className='navigation'>
            <div className='menu'>
              {
                navLinks.map((item, index) =>(
                  <NavLink to={item.path} className={navClass=> navClass.isActive ? 'nav__active nav__item': 'nav__item'}  key={index} >{item.display}
                  </NavLink>
                ))
              }

              <div className='nav__right_search'>
              <div className='nav__right'>
               <div className='search__box'>
              <input type="text" placeholder="Search"/>
              <span>
              <i class="ri-search-eye-line"></i>
              </span>
            </div>
            </div>
          </div>
            </div>
             
              </div>
            
        </div>
         </Container>

      </div>
  </header>
}

export default Header
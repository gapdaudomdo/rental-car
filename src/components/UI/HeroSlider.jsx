
import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { Container } from "reactstrap";
import '../../style/hero-slider.css'




const HeroSlider = () => {


    const settings = {
        fade: true,
        speed: 2000,
        autoplaySpeed: 3000,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        
    }
  return <Slider {...settings} className='hero__slider'>

    <div className='slider__item slide__item-01 mt-0'>
        <Container >
            <div className='slider__content'>
                <h6 className='text-light mb-3'>For Rent $50 Per Day</h6>
                <h1 className='text-light mb-4'>Reserve Now and Get 50% OFF</h1>

                <button className="btn reserve__btn mt-4">
                    <Link to='/cars'>Reserve Now</Link>
                </button>
            </div>
        </Container>
    </div>

    <div className='slider__item slide__item-02 mt-0'>
        <Container >
            <div className='slider__content'>
                <h4 className='text-light mb-3'>For Rent $50 Per Day</h4>
                <h1 className='text-light mb-4'>Reserve Now and Get 50% OFF</h1>

                <button className="btn reserve__btn mt-4">
                    <Link to='/cars'></Link>
                </button>
            </div>
        </Container>
    </div>
    <div className='slider__item slide__item-03 mt-0'>
        <Container >
            <div className='slider__content'>
                <h4 className='text-light mb-3'>For Rent $50 Per Day</h4>
                <h1 className='text-light mb-4'>Reserve Now and Get 50% OFF</h1>

                <button className="btn reserve__btn mt-4">
                    <Link to='/cars'></Link>
                </button>
            </div>
        </Container>
    </div>


    <div className='slider__item slide__item-04 mt-0'>
        <Container >
            <div className='slider__content'>
                <h4 className='text-light mb-3'>For Rent $50 Per Day</h4>
                <h1 className='text-light mb-4'>Reserve Now and Get 50% OFF</h1>

                <button className="btn reserve__btn mt-4">
                    <Link to='/cars'></Link>
                </button>
            </div>
        </Container>
    </div>
  </Slider>
}

export default HeroSlider
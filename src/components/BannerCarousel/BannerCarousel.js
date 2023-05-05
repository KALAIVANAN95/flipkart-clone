import React from 'react'
import './BannerCarousel.css'

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerCarousel = ({data}) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
      };
  return (
    <div className='BannerCarousel'>
        <Slider {...settings}>
          {
            data.map((item)=>{
              return(
                <div key={item.id}>
                  <img src={item.Imgsrc} className="BannerCarousel-Image"/>
                </div>
              )
            })
          }
        </Slider>
    </div>
  )
}

export default BannerCarousel
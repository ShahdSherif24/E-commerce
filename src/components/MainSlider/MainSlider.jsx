import React from 'react'
import Slider from 'react-slick'
import Slider1 from '../../assets/finalProject assets/images/slider-image-1.jpeg'
import Slider2 from '../../assets/finalProject assets/images/slider-image-2.jpeg'
import Slider3 from '../../assets/finalProject assets/images/slider-image-3.jpeg'


export default function MainSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };


    return (
        <>
            <div className="row">
                <div className="w-3/4 mt-3">
                    <Slider {...settings}>
<img src={Slider1} className='h-[500px] ' alt="" />
<img src={Slider2} className='h-[500px] ' alt=""/>
<img src={Slider3}  className='h-[500px] '  alt="" />

                    </Slider>

                </div>



                <div className="w-1/4 mt-3">

                <img src={Slider2} className='h-[250px] ' alt=""/>
                <img src={Slider3}  className='h-[250px] '  alt="" />

                </div>
            </div>


        </>
    )
}

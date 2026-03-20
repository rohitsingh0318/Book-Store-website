import React from 'react'
import list from '../../public/list.json'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';


const Freebooks = () => {
    const filterData = list.filter((data) => data.category  === "free")
    console.log(filterData)
    var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
       <div className='max-w-screen-2xl container mx-auto md:px-20 my-4'>  
            <h2 className='font-semibold text-xl '>Free Offered Course</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, at adipisci! Quidem, quis aut esse temporibus perspiciatis sunt sed placeat unde, accusantium illum officia aliquam exercitationem autem excepturi iure ducimus!</p>
            <div>
                <Slider {...settings}>
                    {filterData.map((item)=>(
                        <Cards item={item} key={item.id}/>
                    ))}
                </Slider>
            </div>
       </div>
    </>
  )
}

export default Freebooks
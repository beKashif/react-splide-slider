import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import './SplideSlider.css'
import '@splidejs/react-splide/css'

const SplideSlider = ({ images }) => {

    const splideOptions = {
        type: "loop",
        perPage: 2,
        perMove: 1,
        padding: '2rem',
        breakPoints: {
            768: {
                perPage: 2,
                gap: '0.5rem',
            },
            576: {
                perPage: 1,
                gap: '0.5rem',
            },
        }
    }

  return (
    <div className='upperDiv'>
        <h1>
            React Splide Slider
        </h1>
        <Splide options={splideOptions} className="sliderDiv">
            {images.map((image, index) => (
                <SplideSlide key={index}>
                    <img src={image} alt={`Slide ${index}`} />
                </SplideSlide>
            ))}
        </Splide>
        
    </div>
  )
}

export default SplideSlider
import React, { useState } from 'react'
import '../css/Carousel.css'
// import slide1 from '../assets/slide1.jpg'
import slide2 from '../assets/slide2.jpg'
import slide3 from '../assets/slide3.jpg'
import slide4 from '../assets/slide4.jpg'
import slide5 from '../assets/slide5.jpg'
import slide6 from '../assets/slide6.jpg'
import slide7 from '../assets/images/salon2.jpg'
import slide8 from '../assets/images/salon1.jpg'
import slide9 from '../assets/images/salon3.jpg'

function Carousel() {
  const data = [
    {
      src: slide7,
      alt: "Great hair doesn't happen by chance, it happens by appointment."
    },
    {
      src: slide8,
      alt: "Life is too short to have hair."
    },
    {
      src: slide9,
      alt: "Life isn't perfect but your hair can be."
    },
    // {
    //   src: slide4,
    //   alt: "Don't waste a good hair day."
    // },
    // {
    //   src: slide5,
    //   alt: "Life is more beautiful when you meet the right hairdresser."
    // },
    // {
    //   src: slide6,
    //   alt: "Hair that slay starts at the salon."
    // }
  ]
  const [slide, setSlide] = useState(0);

  function handlePrev() {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  }

  function handleNext() {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  }

  return (
    <div className='slider-container'>

      <div className="slide-wrapper">

        {data.map((ele, idx) => {
          return (<div className="cards">
            <img className={slide === idx ? "slide" : "slide slide-hidden"} src={ele.src} alt={idx} />
            <span className={slide === idx ? "quote" : "quote quote-hidden"}>
              {ele.alt}
            </span>
          </div>)
        })}

        <div className="navigation-btns-wrapper">
          <button onClick={handleNext} className='btn prev-btn'><img src={require('../assets/slide-nav-icon.gif')} alt="" /></button>
          <button onClick={handlePrev} className='btn next-btn'><img src={require('../assets/slide-nav-icon.gif')} alt="" /></button>
        </div>

        <div className="slide-indicators">
          {data.map((_, idx) => {
            return <button className={slide === idx ? "indicator" : "indicator indicator-inactive"} ></button>
          })}
        </div>

      </div>
    </div>
  )
}

export default Carousel
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function AppCarousel() {
  return (
    <div className='carousel-container bg-dark white-text'>
        <Carousel >
            <Carousel.Item>
                <div className='carousel-image-container'>
                    <img className='img-fluid' src='./Images/Vodka-Soda.jpg' alt='simple vodkda lime and soda cocktail'/>
                </div>
                <Carousel.Caption>
                    <h3>Vodka Lime</h3>
                    <p>A refreshing and tangy cocktail with a hint of citrus.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className='carousel-image-container'>
                    <img className='img-fluid' src='./Images/drunken-monkey.jpg' alt='a pineapple tropical cocktail drink'/>
                </div>
                <Carousel.Caption>
                    <h3>Drunken Monkey</h3>
                    <p>A tropical blend of flavors that will transport you to a beach paradise.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className='carousel-image-container'>
                    <img className='img-fluid' src='./Images/negroni_hero.jpg' alt='classic cocktail drink with gin'/>
                </div>
                <Carousel.Caption>
                    <h3>Negroni</h3>
                    <p>An elegant and sophisticated cocktail with a touch of sweetness</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default AppCarousel;
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselComponent = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400?text=First+Slide"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First Slide</h3>
            <p>Description for the first slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400?text=Second+Slide"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second Slide</h3>
            <p>Description for the second slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400?text=Third+Slide"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third Slide</h3>
            <p>Description for the third slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="mt-3">
        <button
          className="btn btn-primary me-2"
          onClick={() => setIndex(0)}
        >
          Show First Slide
        </button>
        <button
          className="btn btn-primary me-2"
          onClick={() => setIndex(1)}
        >
          Show Second Slide
        </button>
        <button
          className="btn btn-primary"
          onClick={() => setIndex(2)}
        >
          Show Third Slide
        </button>
      </div>
    </div>
  );
};

export default CarouselComponent;

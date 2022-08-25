import React, { useState, useRef, useEffect } from 'react';
import './carousel.scss';

const Carousel = () => {
  const [carouselPositionNumber, setCarouselPositionNumber] = useState(2);
  const MAX_SLIDES = CAROUSEL_IMAGES.length + 1;
  const slideRef = useRef();

  const moveNext = () => {
    if (carouselPositionNumber === MAX_SLIDES) {
      setCarouselPositionNumber(1);
    } else {
      setCarouselPositionNumber(carouselPositionNumber + 1);
    }
  };

  const movePrev = () => {
    if (carouselPositionNumber === 0) {
      setCarouselPositionNumber(MAX_SLIDES - 1);
    } else {
      setCarouselPositionNumber(carouselPositionNumber - 1);
    }
  };

  const changeIntervalTime = useRef(false);

  useEffect(() => {
    const timer = setInterval(
      () => {
        if (carouselPositionNumber >= MAX_SLIDES) {
          setCarouselPositionNumber(1);
          changeIntervalTime.current = false;
        } else {
          if (carouselPositionNumber === MAX_SLIDES - 1) {
            setCarouselPositionNumber(carouselPositionNumber + 1);
            changeIntervalTime.current = true;
          } else {
            setCarouselPositionNumber(carouselPositionNumber + 1);
          }
        }
      },

      changeIntervalTime.current ? 0 : 3000
    );

    return () => {
      clearInterval(timer);
    };
  });

  useEffect(() => {
    if (carouselPositionNumber === MAX_SLIDES) {
      slideRef.current.style.transition = 'none';
      slideRef.current.style.transform = 'translateX(0%)';
    } else if (carouselPositionNumber === 6) {
      slideRef.current.style.transition = 'none';
      slideRef.current.style.transform = 'translateX(-500%)';
    } else {
      slideRef.current.style.transition = 'all 0.5s ease-in-out';
      slideRef.current.style.transform = `translateX(-${
        carouselPositionNumber * 100
      }%`;
    }
  }, [MAX_SLIDES, carouselPositionNumber]);

  return (
    <div className="carousel">
      <button className="prevImg" onClick={movePrev} />
      <div className="carouselWindow">
        <div className="images" ref={slideRef}>
          <img
            className="carouselImage"
            src={CAROUSEL_IMAGES[4].url}
            alt="firstImageCopy"
            key={CAROUSEL_IMAGES[4].id}
          />
          {CAROUSEL_IMAGES.map(image => {
            return (
              <img
                className="carouselImage"
                src={image.url}
                alt="carouselImage"
                key={image.id}
              />
            );
          })}
          <img
            className="carouselImage"
            src={CAROUSEL_IMAGES[0].url}
            alt="firstImageCopy"
            key={CAROUSEL_IMAGES[0].id}
          />
        </div>
        <div className="carouselBar">
          {CAROUSEL_IMAGES.map(image => {
            return (
              <p
                key={image.id}
                className={
                  carouselPositionNumber === image.id ? 'barOn' : 'barOff'
                }
              />
            );
          })}
        </div>
      </div>
      <button className="nextImg" onClick={moveNext} />
    </div>
  );
};

export default Carousel;

const CAROUSEL_IMAGES = [
  { id: 1, url: '/images/bathroom-g829dda9cf_1280.jpeg' },
  { id: 2, url: '/images/soapmockimage.jpeg' },
  { id: 3, url: '/images/bathtub-g096f4cd54_1280.jpeg' },
  { id: 4, url: '/images/faucet-g452aa8a23_1280.jpeg' },
  { id: 5, url: '/images/towels-g0f64b6995_1280.jpeg' },
];

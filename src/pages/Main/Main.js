import React, { useState, useRef, useEffect } from 'react';
import ProductsInMain from './ProductsInMain';
import './Main.scss';

const Main = () => {
  const [carNum, setCarNum] = useState(0);
  const MAX_SLIDES = 5;
  const slideRef = useRef();

  const moveNext = () => {
    if (carNum >= MAX_SLIDES) {
      setCarNum(0);
    } else {
      setCarNum(carNum + 1);
    }
  };

  const movePrev = () => {
    if (carNum === 0) {
      setCarNum(MAX_SLIDES);
    } else {
      setCarNum(carNum - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${carNum * 1080}px`;
  }, [carNum]);

  return (
    <div className="mainWrapper">
      <p />
      <div className="carousel">
        <button className="prevImg" onClick={movePrev} />
        <div className="carouselWindow">
          <div className="images" ref={slideRef}>
            {CAROUSEL_IMAGES.map(image => {
              return (
                <img
                  className="carouselImage"
                  src={image.url}
                  alt="carouselImage"
                  key={image.key}
                />
              );
            })}
          </div>
          <div className="carouselBar">
            {CAROUSEL_IMAGES.map(image => {
              return (
                <p className="bar" key={image.key}>
                  {image.key}
                </p>
              );
            })}
          </div>
        </div>
        <button className="nextImg" onClick={moveNext} />
      </div>
      <ProductsInMain />
      <p />
    </div>
  );
};

export default Main;

const CAROUSEL_IMAGES = [
  { key: 1, url: '/images/bathroom-g829dda9cf_1280.jpeg' },
  { key: 2, url: '/images/soapmockimage.jpeg' },
  { key: 3, url: '/images/bathtub-g096f4cd54_1280.jpeg' },
  { key: 4, url: '/images/faucet-g452aa8a23_1280.jpeg' },
  { key: 5, url: '/images/towels-g0f64b6995_1280.jpeg' },
];

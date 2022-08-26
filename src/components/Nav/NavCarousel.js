import React, { useEffect, useRef, useState } from 'react';
import './NavCarousel.scss';

const NavCarousel = () => {
  const [carouselPositionNumber, setCarouselPositionNumber] = useState(2);
  const MAX_SLIDES = CAROUSEL_PHRASE.length + 1;
  const slideRef = useRef();

  const changeIntervalTime = useRef(false);

  useEffect(() => {
    const timer = setInterval(
      () => {
        if (carouselPositionNumber >= MAX_SLIDES) {
          setCarouselPositionNumber(1);
          changeIntervalTime.current = false;
        } else {
          setCarouselPositionNumber(carouselPositionNumber + 1);
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
    } else if (carouselPositionNumber === 3) {
      slideRef.current.style.transition = 'none';
      slideRef.current.style.transform = 'translateX(-200%)';
    } else {
      slideRef.current.style.transition = 'all 0.5s ease-in-out';
      slideRef.current.style.transform = `translateX(-${
        carouselPositionNumber * (100 / 3)
      }%`;
    }
  }, [MAX_SLIDES, carouselPositionNumber]);

  return (
    <div className="navCarousel" ref={slideRef}>
      {CAROUSEL_PHRASE.map(ribbon => {
        return (
          <div className="wrapper" key={ribbon.id}>
            <p className="isNew">{ribbon.tag}</p>
            <p>{ribbon.title}</p>
          </div>
        );
      })}
      <div className="wrapper">
        <span className="isNew">{CAROUSEL_PHRASE[0].tag}</span>
        <span>{CAROUSEL_PHRASE[0].title}</span>
      </div>
    </div>

    //TODO : 차후 자동 캐러셀로 구현 예정
  );
};

export default NavCarousel;

const CAROUSEL_PHRASE = [
  {
    id: 1,
    tag: '[NEW]',
    title: '바디라이크 X 팀코너 콜라보 상품 출시 !',
  },
  {
    id: 2,
    tag: '[Good Job]',
    title: '팀 코너 여러분 수고하셨습니다 !',
  },
];

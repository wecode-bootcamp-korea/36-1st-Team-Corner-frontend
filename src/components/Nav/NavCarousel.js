import React from 'react';
import './NavCarousel.scss';

const NavCarousel = () => {
  return (
    <div className="navCarousel">
      <span className="isNew">[NEW]</span>
      &nbsp;
      <span>바디라이크 X 팀코너 콜라보 상품 출시!</span>
    </div>
    //TODO : 차후 자동 캐러셀로 구현 예정
  );
};

export default NavCarousel;

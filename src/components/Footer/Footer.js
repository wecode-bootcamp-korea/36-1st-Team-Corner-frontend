import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerInner">
        <span className="footerLogo">BODYLIKE</span>
        <div className="footerBox">
          <div className="boxBrand">
            <h2>브랜드로바 스토리</h2>
            <h2>JAJU 묻는 질문</h2>
            <div className="sns">
              <i className="fab fa-twitter" />
              <i className="fab fa-instagram" />
              <i className="fab fa-facebook-f" />
              <i className="fab fa-youtube" />
            </div>
            <span>이용 약과 | 댕댕정보 처리방침</span>
            <span>
              Copyright <i className="far fa-copyright" /> BODYLIKE.ALL rights
              reserved.
            </span>
          </div>
          <div className="boxCs">
            <h2>고객센터 문익점</h2>
            <span>030-6928-2688</span>
            <span>휴일 02:00 AM - 05:00 AM (점심 시간 : 전에 끝남)</span>
            <span>배송 안내 : 셀프 픽업</span>
            <span>계좌 정보 : 현금 계산만</span>
          </div>
          <div className="boxContact">
            <h2>불량, 교환, 환불 원정대</h2>
            <h2>사입/입점문의 바로가로세로</h2>
            <h2>마케팅 제휴 문의하기스</h2>
            <h2>해외수출 문의사선생님</h2>
            <h2>채용공고 바른생활</h2>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

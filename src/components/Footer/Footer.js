import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerInner">
        <span className="footerLogo">BODYLIKE</span>
        <div className="footerBox">
          <div className="boxBrand">
            <h2>브랜뉴 스토리</h2>
            <h2>JAJU 묻는 질문</h2>
            <div className="sns">
              <i className="fab fa-twitter" />
              <i className="fab fa-instagram" />
              <i className="fab fa-facebook-f" />
              <i className="fab fa-youtube" />
            </div>
            <span>이용 약관 | 개인정보 처리방침</span>
            <span>
              Copyright <i className="far fa-copyright" /> BODYLIKE.ALL rights
              reserved.
            </span>
          </div>
          <div className="boxCs">
            <h2>고객센터 문의하기</h2>
            <ul>
              {FOOTER_CS_INFO_LIST.map(info => {
                return <li key={info.id}>{info.text}</li>;
              })}
            </ul>
          </div>
          <div className="boxContact">
            <ul>
              {FOOTER_CONTACT_LIST.map(info => {
                return (
                  <li key={info.id}>
                    <h2>{info.text}</h2>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const FOOTER_CS_INFO_LIST = [
  { id: 1, text: '030-6928-2688' },
  { id: 2, text: '평일 10:00 AM - 19:00 PM (점심 시간 : 12시 ~ 1시)' },
  { id: 3, text: '배송 안내 : 코너 택배' },
  { id: 4, text: '계좌 정보 : 코너은행 (주)코너코퍼레이션' },
];

const FOOTER_CONTACT_LIST = [
  { id: 1, text: '불량, 교환, 환불 메일쓰기' },
  { id: 2, text: '입/입점문의 바로가기' },
  { id: 3, text: '마케팅 제휴 문의' },
  { id: 4, text: '해외수출 문의하기' },
  { id: 5, text: '채용공고 바로가기' },
];

import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerInner">
        <img
          className="footerLogo"
          alt="푸터로고"
          src="/images/footerLogo.png"
        />
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
            <span>이용 냥냥 | 댕댕정보 처리방침</span>
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
  { id: 1, text: '전화번호는 없습니다' },
  { id: 2, text: '휴일 08:00 AM - 10:00 AM (점심 시간 : 전에 끝남)' },
  { id: 3, text: '배송 안내 : 직접 픽업' },
  { id: 4, text: '계좌 정보 : 현금만 받아요' },
];

const FOOTER_CONTACT_LIST = [
  { id: 1, text: '불량, 교환, 환불 원정대' },
  { id: 2, text: '입점문의 바로가기' },
  { id: 3, text: '마케팅 제휴 문의' },
  { id: 4, text: '해외수출 문의하기' },
  { id: 5, text: '채용공고 바로가기' },
];

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
            <span>이용 약과 | 댕댕정보 처리방침</span>
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
  { id: 2, text: '휴일 02:00 AM - 05:00 AM (점심 시간 : 전에 끝남)' },
  { id: 3, text: '배송 안내 : 셀프 픽업' },
  { id: 4, text: '계좌 정보 : 현금 계산만' },
];

const FOOTER_CONTACT_LIST = [
  { id: 1, text: '불량, 교환, 환불 원정대' },
  { id: 2, text: '입/입점문의 바로세로' },
  { id: 3, text: '마케팅 제휴 무늬' },
  { id: 4, text: '해외수출 문익점' },
  { id: 5, text: '채용공고 바른생활' },
];

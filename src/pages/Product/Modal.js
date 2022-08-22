import React from 'react';
import { Link } from 'react-router-dom';
import './Modal.scss';

const Modal = ({ isOpen, toggleModal }) => {
  return (
    <div className="modal" id={isOpen ? 'openModal' : 'closeModal'}>
      <div className="header">
        <h3 className="headerTitle"> 장바구니 담기</h3>
      </div>
      <div className="content">
        <img className="cart" src="/images/cart-icon.svg" alt="카트이미지" />
        <p className="textContent">장바구니에 상품이 정상적으로 담겼습니다.</p>
      </div>
      <div className="modalButtons">
        <Link to="/">
          <button className="goToCartButton">장바구니 이동</button>
        </Link>
        <button className="backToShopButton" onClick={toggleModal}>
          쇼핑 계속하기
        </button>
      </div>
      <div className="closeButton" onClick={toggleModal}>
        {'\u2715'}
      </div>
    </div>
  );
};

export default Modal;

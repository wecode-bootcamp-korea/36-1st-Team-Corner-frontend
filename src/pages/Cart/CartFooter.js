import React from 'react';
import './CartFooter.scss';

const CartFooter = () => {
  return (
    <div className="cartFooter">
      <h2>이용안내</h2>
      <div className="guide">
        <h3>장바구니 이용안내</h3>
        <ul>
          {CART_FOOTER_CARTGUIDE.map(info => {
            return <li key={info.id}>{info.text}</li>;
          })}
        </ul>
      </div>
      <div className="guide">
        <h3>무이자할부 이용안내</h3>
        <ul>
          {CART_FOOTER_PAYMENTGUIDE.map(info => {
            return <li key={info.id}>{info.text}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default CartFooter;

const CART_FOOTER_CARTGUIDE = [
  {
    id: 1,
    text: '선택하신 상품의 수량을 변경하시려면 수량변경 후 [변경] 버튼을 누르시면 됩니다.',
  },
  {
    id: 2,
    text: ' [쇼핑계속하기] 버튼을 누르시면 쇼핑을 계속 하실 수 있습니다.',
  },
  {
    id: 3,
    text: ' 장바구니와 관심상품을 이용하여 원하시는 상품만 주문하거나 관심상품으로 등록하실 수 있습니다.',
  },
  {
    id: 4,
    text: '파일첨부 옵션은 동일상품을 장바구니에 추가할 경우 마지막에 업로드 한 파일로 교체됩니다.',
  },
];

const CART_FOOTER_PAYMENTGUIDE = [
  {
    id: 1,
    text: ' 상품별 무이자할부 혜택을 받으시려면 무이자할부 상품만 선택하여[주문하기] 버튼을 눌러 주문/결제 하시면 됩니다.',
  },
  {
    id: 2,
    text: '[전체 상품 주문] 버튼을 누르시면 장바구니의 구분없이 선택된 모든 상품에 대한 주문/결제가 이루어집니다.',
  },
  {
    id: 3,
    text: '단, 전체 상품을 주문/결제하실 경우, 상품별 무이자할부 혜택을 받으실 수 없습니다.',
  },
];

import React from 'react';
import './CartProductTable.scss';

const cartProductTable = ({
  cartProducts,
  handleMinusOne,
  handlePlusOne,
  handleOrderThis,
  deleteThisProduct,
}) => {
  const discount = 0.8;

  return (
    <table className="cartProductTable">
      <thead>
        <tr>
          <th>이미지</th>
          <th>상품명</th>
          <th>판매가</th>
          <th>수량</th>
          <th>합계</th>
          <th>선택</th>
        </tr>
      </thead>
      <tbody className="cartProductList">
        {cartProducts.map(product => {
          const { id, name, price, quantity, thumbnail_image_url } = product;
          const priceDiscount = Math.floor(price * discount);
          return (
            <tr key={id}>
              <td className="tdImgbox">
                <div className="cartProductImg">
                  <img alt="상품" src={thumbnail_image_url} />
                </div>
              </td>
              <td className="tdNamebox">
                <span>{name}</span>
              </td>
              <td className="tdPricebox">
                <span>{priceDiscount.toLocaleString()}원</span>
              </td>
              <td className="tdCountbox">
                <div className="countBtnbox">
                  <div className="btnbox">
                    <button onClick={() => handleMinusOne(id)}>-</button>
                    <span className="totalCount">{quantity}</span>
                    <button onClick={() => handlePlusOne(id)}>+</button>
                  </div>
                </div>
              </td>
              <td className="tdTotalPricebox">
                <span>{(quantity * priceDiscount).toLocaleString()}원</span>
              </td>
              <td className="tdBtnsbox">
                <button
                  className="orderBtn"
                  onClick={() => {
                    handleOrderThis(id);
                  }}
                >
                  주문하기
                </button>
                <button
                  className="deleteThisBtn"
                  onClick={() => {
                    deleteThisProduct(id);
                  }}
                >
                  삭제
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default cartProductTable;

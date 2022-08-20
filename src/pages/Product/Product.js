import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Product.scss';

const Product = () => {
  const [product, setProduct] = useState({});
  const { img, title, price } = product;
  const params = useParams();
  const productId = params.id;
  const navigate = useNavigate;

  useEffect(() => {
    fetch(`https://reqres.in/api/product/${id}`)
      .then(response => response.json())
      .then(result => setProduct(result.data));
  }, [productId]);

  const toBuy = e => {
    e.preventDefault();
    const token = localStorage.getItem('token') || '';

    if (token) {
      fetch(`http://10.58.4.114:8000/user/cart/${product_id}`, {
        method: 'POST',
        headers: {
          AUTHORIZATION: token,
        },
        body: JSON.stringify({
          quantity: 1,
        }),
      })
        .then(res => res.json())
        .then(res => {
          if (res.ok === true) {
            return navigate('/cart');
          } else {
            alert('로그인이 필요한 기능입니다');
            navigate('/login');
          }
        });
    }

    return (
      <div className="product">
        <div className="productMargin">
          <div className="productPage">
            <img className="productImg" alt="productImg" src={img} />
            <form className="productForm">
              <div className="priceTitle"> {title} </div>
              <div className="price">
                <div className="priceTag"> {price} 원 </div>
                <div className="salePrice"> ({price} * 0.8) 원 </div>
              </div>
              <div className="totalPrice">
                <span className="totalPriceText"> 총 상품 금액 </span>
                <span className="totalPriceNum"> {price} 원 </span>
              </div>

              <div className="btn">
                <button className="buyBtn" onClick={toBuy}>
                  바로 구매하기
                </button>
                <button className="cart" onClick={toBuy}>
                  장바구니
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
};

export default Product;

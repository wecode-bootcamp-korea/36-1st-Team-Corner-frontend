import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Product.scss';
import Modal from './Modal';
import ProductDetail from './ProductDetail';

const Product = () => {
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  const productId = params.id;

  const eventHandler = () => {
    setIsModalOpen(!isModalOpen);
  };

  const { name, thumbnail_image_url, price, stock } = product;
  useEffect(() => {
    fetch(`/data/productData.json`)
      .then(response => response.json())
      .then(result => setProduct(result.data[0]));
  }, [productId]);

  // const token = localStorage.getItem('token') || '';
  const token = {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImV4cCI6MTY2MTAxNTEzMSwiaWF0IjoxNjYwOTc5MTMxfQ.OQkzQtAq4M7tMw6cdWAilKQ1uZK6ld6WFCz3Ng2ol0s',
  };

  const toBuy = e => {
    e.preventDefault();

    if (token) {
      fetch(`http://10.58.7.174:3000/product/${productId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify({
          quantity: { count },
          totalPrice: { priceOfTotal },
          stock: { stock },
        }),
      })
        .then(res => res.json())
        .then(res => {
          if (res.ok) {
            return navigate('/cart');
          } else {
            alert('로그인이 필요한 기능입니다');
            navigate('/login');
          }
        });
    }
  };

  const goToCart = e => {
    e.preventDefault();
    if (token) {
      fetch(`http://10.58.7.174:3000/product/${productId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify({
          quantity: { count },
          totalPrice: { priceOfTotal },
          stock: { stock },
        }),
      })
        .then(res => res.json())
        .then(res => {
          if (res.ok) {
            return setIsModalOpen(true);
          } else {
            alert('로그인이 필요한 기능입니다');
            navigate('/login');
          }
        });
    }
  };

  const countPlus = e => {
    setCount(preCount => preCount + 1);
  };
  const countMinus = e => {
    setCount(preCount => (preCount <= 0 ? 0 : preCount - 1));
  };

  const discountPrice = price * 0.8;
  const priceOfInteger = Math.floor(price);
  const priceOfTotal = priceOfInteger * count;

  return (
    <div className="product">
      <div className="productMargin">
        <div className="productPage">
          <img
            className="productImg"
            alt="productImg"
            src={thumbnail_image_url}
          />
          <form className="productForm">
            <div className="priceTitle"> {name} </div>
            <div className="price">
              <div className="priceTag">{discountPrice} 원</div>
              <div className="salePrice"> {priceOfInteger} 원 </div>
            </div>
            <div className="productOption">
              <div className="optionName">{name}</div>
              <div className="countOption">
                <input value={count} className="countInput" />
                <div className="countBtn">
                  <img
                    className="countUpBtn"
                    src="https://img.echosting.cafe24.com/design/skin/default/product/btn_count_up.gif"
                    alt="수량증가"
                    onClick={countPlus}
                  />
                  <img
                    className="countDownBtn"
                    src="	https://img.echosting.cafe24.com/design/skin/default/product/btn_count_down.gif
                  "
                    alt="수량증가"
                    onClick={countMinus}
                  />
                </div>
              </div>
              <div className="optionPrice">{priceOfInteger} 원</div>
            </div>
            <div className="totalPrice">
              <span className="totalPriceText"> 총 상품 금액 </span>
              <span className="totalPriceNum"> {priceOfTotal} 원 </span>
            </div>
            <div className="btn">
              <button className="buyBtn" onClick={toBuy}>
                바로 구매하기
              </button>
              <button className="cart" onClick={goToCart}>
                장바구니
              </button>
            </div>
          </form>
        </div>
        <Modal isOpen={isModalOpen} toggleModal={eventHandler} />
        <div>
          <ProductDetail />
        </div>
      </div>
    </div>
  );
};

export default Product;
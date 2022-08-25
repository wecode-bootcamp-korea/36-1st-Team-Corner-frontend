import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Product.scss';
import Modal from './Modal';
import ProductDetail from './ProductDetail';

const Product = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const productId = params.id;
  const counted = parseInt(count);
  const { name, thumbnail_image_url, price, detail, stock } = product;
  const token = localStorage.getItem('token') || ' ';

  useEffect(() => {
    fetch(`http://10.58.0.117:3000/product/${productId}`)
      .then(response => response.json())
      .then(result => setProduct(result.data[0]));
  }, [productId]);

  const toBuy = e => {
    e.preventDefault();
    if (!token) {
      alert('로그인이 필요한 기능입니다.');
      navigate('/auth/signIn');
    } else {
      fetch(`http://10.58.0.117:3000/carts/product/${productId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },

        body: JSON.stringify({
          quantity: count,
        }),
      }).then(res => {
        if (res.ok) {
          return navigate('user/carts');
        }
      });
    }
  };

  const goToCart = e => {
    e.preventDefault();
    // const token = localStorage.getItem('token');
    if (!token) {
      alert('로그인이 필요한 기능입니다');
      navigate('/auth/signIn');
    } else {
      fetch(`http://10.58.0.117:3000/carts/product/${productId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify({
          quantity: count,
        }),
      }).then(res => {
        if (res.ok) {
          return setIsModalOpen(true);
        } else if (res.status === 401) {
          alert('재고 수량이 부족합니다.');
        } else {
          alert('로그인이 필요한 기능입니다.');
          navigate('/auth/signIn');
        }
      });
    }
  };

  const countPlus = e => {
    setCount(preCount =>
      preCount < stock ? preCount + 1 : alert('재고 수량을 넘었습니다')
    );
  };

  const countMinus = e => {
    if (count < 2) {
      return;
    }
    setCount(preCount => preCount - 1);
  };
  const discountPrice = price * 0.8;
  const priceOfInteger = Math.floor(price);
  const priceOfTotal = discountPrice * count;

  const toggleModal = () => {
    setIsModalOpen(false);
  };

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
              <div className="priceTag">
                {discountPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
                원
              </div>
              <div className="salePrice">
                {' '}
                {priceOfInteger.toLocaleString()} 원{' '}
              </div>
            </div>
            <div className="productOption">
              <div className="optionName">{name}</div>
              <div className="countOption">
                <input
                  onChange={e => setCount(e.target.value)}
                  type="number"
                  className="countInput"
                  value={counted}
                />
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
                    alt="수량감소"
                    onClick={countMinus}
                  />
                </div>
              </div>
              <div className="optionPrice">
                {discountPrice.toLocaleString()} 원
              </div>
            </div>
            <div className="totalPrice">
              <span className="totalPriceText"> 총 상품 금액 </span>
              <span className="totalPriceNum">
                {' '}
                {priceOfTotal.toLocaleString()} 원 ({count}개)
              </span>
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
        {isModalOpen === true && <Modal toggleModal={toggleModal} />}
        <div>
          <ProductDetail ProductDetails={detail} />
        </div>
      </div>
    </div>
  );
};

export default Product;

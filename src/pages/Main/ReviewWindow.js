import React, { useState, useEffect } from 'react';
import './reviewWindow.scss';

const ReviewWindow = () => {
  const [isReviewExist, setIsReviewExist] = useState(false);
  const [reviewList, setReviewList] = useState([]);
  const [reviewTitle, setReviewTitle] = useState();
  const [reviewText, setReviewText] = useState();

  if (reviewList.length > 0) {
    setIsReviewExist(true);
  }

  const toggleReview = () => {
    const token =
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjYsImV4cCI6MTY2MTQ0MzI2NSwiaWF0IjoxNjYxMDgzMjY1fQ.KmF-Jp46fdHKwxS01SJ8PtF5yD1SkQP8rwQFA6tU9rQ';

    fetch('http://10.58.2.51:3000/product/1/review/access', {
      method: 'GET',
      headers: {
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then(res => {
        if (res.result === true) {
          setIsReviewExist(!isReviewExist);
        } else {
          alert('로그인이 필요한 기능입니다.');
        }
      });
  };

  const putRevTitle = e => {
    setReviewTitle(e.target.value);
  };

  const putRevText = e => {
    setReviewText(e.target.value);
  };

  const submitReview = () => {
    //해당 함수의 headers/body 확인해야함
    fetch('', {
      method: 'POST',
      header: {
        'Contents-Type': 'application/json',
      },
      body: {
        contents: JSON.stringify({ title: reviewTitle, text: reviewText }),
      },
    });
    setReviewTitle('');
    setReviewText('');
  };

  useEffect(
    fetch('url', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(setReviewList),
    []
  );

  return (
    <div className="reviewWindow">
      <div className="reviewHeader">
        <h1>상품 사용 후기</h1>
        <p>로그인하신 고객이 남겨주시는 상품후기입니다. </p>
        <span className="headerTitle">REVIEW</span>
        <span>모두 솔직한 상품평을 작성해 보아요!</span>
        <span>(0)</span>
      </div>
      <div className="reviewContent">
        <div className={!isReviewExist ? 'noReview' : 'noReviewHide'}>
          <p>리뷰가 없습니다.</p>
          <p>리뷰를 작성해 보세요!</p>
          <button onClick={toggleReview}>상품평 작성하기</button>
        </div>
        <div className={isReviewExist ? 'reviews' : 'reviewsHide'}>
          {reviewList.map(review => {
            return (
              <>
                <div className="review" key={review.id}>
                  <p className="reviewText" onChange={putRevText}>
                    {review.contents}
                  </p>
                </div>
                <div className="userInfo">
                  <div>{review.name}</div>
                  <div>{review.created_at}</div>
                </div>
              </>
            );
          })}

          <div className={isReviewExist ? 'reviewInput' : 'reviewInputHide'}>
            <input
              type="text"
              placeholder="제목을 입력하세요."
              onChange={putRevTitle}
            />
            <textarea placeholder="내용을 입력하세요." onChange={putRevText} />
          </div>
          <div
            className={isReviewExist ? 'reviewButtons' : 'reviewButtonsHide'}
          >
            <button className="cancelInput">작성취소</button>
            <button className="registerInput" onClick={submitReview}>
              등록하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReviewWindow;

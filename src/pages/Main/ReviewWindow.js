import React, { useState } from 'react';
import './reviewWindow.scss';

const ReviewWindow = () => {
  const [isReviewExist, setIsReviewExist] = useState(false);
  // const [reviewTitle, setReviewTitle] = useState();
  // const [reviewText, setReviewText] = useState();

  const toggleReview = () => {
    const token =
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjQsImV4cCI6MTY2MTA3ODQwMCwiaWF0IjoxNjYxMDQyNDAwfQ.xJ3DN0wszJB-tsCxHCTr2D-IF4EYNuLKYJDBk3kbqGo';

    fetch('http://10.58.2.51:3000/product/1/review1', {
      method: 'POST',
      headers: {
        'Content-Type': `application/json`,
        Authorization: token,
      },
      body: JSON.stringify({ contents: '너무 덥다 리뷰 테스트!!!!!!' }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'REVIEW_POSTED_SUCCESS') {
          setIsReviewExist(!isReviewExist);
        } else {
          alert('로그인이 필요한 기능입니다.');
        }
      });
  };

  // const putRevTitle = e => {
  //   setReviewTitle(e.target.value);
  // };

  // const putRevText = e => {
  //   setReviewTet(e.target.value);
  // };

  // const submitReview = () => {
  //   fetch(); //
  // };
  // useEffect =(('url', {
  //   method: 'GET',
  // }) => {}, )
  return (
    <div className="reviewWindow">
      <div className="reviewHeader">
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
          <div className="review">
            <p className="reviewTitle">리뷰 제목입니다</p>
            <p className="reviewText">너무 좋아요</p>
          </div>
          <div className="userInfo">규선님</div>
        </div>
        <div className={isReviewExist ? 'reviewInput' : 'reviewInputHide'}>
          <input type="text" placeholder="제목을 입력하세요." />
          <textarea placeholder="내용을 입력하세요." />
        </div>
        <div className={isReviewExist ? 'reviewButtons' : 'reviewButtonsHide'}>
          <button className="cancelInput">작성취소</button>
          <button className="registerInput">등록하기</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewWindow;

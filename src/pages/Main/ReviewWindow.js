import React, { useState, useEffect, useRef } from 'react';
import './ReviewWindow.scss';

const ReviewWindow = () => {
  const [isReturned, setIsReturned] = useState(false);
  const [reviewList, setReviewList] = useState([]);
  const [reviewText, setReviewText] = useState('');
  const [isButtonClicked, setButtonClicked] = useState(false);

  let isReviewExist = useRef(false);
  if (reviewList.length !== 0) isReviewExist.current = true;

  const modifiedReviewList = reviewList.map(review => {
    let maskedName = review.name.replace(/^(.).*(.)$/, '$1**$2');
    let newDate = review.created_at.slice(0, review.created_at.indexOf('T'));
    return { ...review, name: maskedName, created_at: newDate };
  });

  const reviewCount = reviewList.length;

  const authValidation = () => {
    const token =
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjYsImV4cCI6MTY2MTQ0MzI2NSwiaWF0IjoxNjYxMDgzMjY1fQ.KmF-Jp46fdHKwxS01SJ8PtF5yD1SkQP8rwQFA6tU9rQ';

    fetch('http://10.58.2.193:3000/common/access', {
      method: 'GET',
      headers: {
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then(res => {
        if (res.result === true) {
          isReviewExist.current = !isReviewExist.current;
          setIsReturned(!isReturned);
        } else {
          alert('로그인이 필요한 기능입니다.');
        }
      });
  };

  const inputAuthValidation = () => {
    const token =
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjYsImV4cCI6MTY2MTQ0MzI2NSwiaWF0IjoxNjYxMDgzMjY1fQ.KmF-Jp46fdHKwxS01SJ8PtF5yD1SkQP8rwQFA6tU9rQ';

    fetch('http://10.58.2.193:3000/common/access', {
      method: 'GET',
      headers: {
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then(res => {
        if (res.result !== true) alert('로그인이 필요한 기능입니다.');
      });
  };

  const putRevText = e => {
    setReviewText(e.target.value);
  };

  const submitReview = () => {
    fetch('http://10.58.2.193:3000/review/product/1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjYsImV4cCI6MTY2MTQ0MzI2NSwiaWF0IjoxNjYxMDgzMjY1fQ.KmF-Jp46fdHKwxS01SJ8PtF5yD1SkQP8rwQFA6tU9rQ',
      },
      body: JSON.stringify({ contents: reviewText }),
    }).then(() => {
      setIsReturned(!isReturned);
      setReviewText('');
    });
  };

  const firstUpdate = useRef(false);

  const openMyReviewListButton = () => {
    setButtonClicked(!isButtonClicked);
  };

  useEffect(() => {
    if (firstUpdate.current) {
      fetch('http://10.58.2.193:3000/review/product/1', {
        method: 'GET',
        header: {
          'Content-Type': 'application/json',
          /**여기다가 상품 아이디 */
        },
      })
        .then(res => res.json())
        .then(res => {
          setReviewList(res.data);
        });
      firstUpdate.Current = true;
    }
  }, [isButtonClicked]);

  useEffect(() => {
    fetch('http://10.58.2.193:3000/review/product/1', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        setReviewList(res.data);
      });
  }, [isReturned]);

  return (
    <div className="reviewWindow">
      <div className="reviewWindowWrap">
        <div className="reviewHeader">
          <h1 className="reviewHeaderTitle">상품 사용 후기</h1>
          <p className="reviewDescription">
            로그인하신 고객이 남겨주시는 상품후기입니다.
          </p>
          <div className="subHeader">
            <span className="subHeaderTitle">REVIEW |</span>
            <span className="subHeaderTitleDescription">
              모두 솔직한 상품평을 작성해 보아요!
            </span>

            <span className="reviewCount">({reviewCount})</span>
            <p className="showMyReviewWrapper">
              <button className="showMyReview" onClick={openMyReviewListButton}>
                내 리뷰 보기.
              </button>
            </p>
          </div>
        </div>
        <div className="reviewContent">
          <div className={!isReviewExist.current ? 'noReview' : 'noReviewHide'}>
            <p className="phraseNoReview">리뷰가 없습니다.</p>
            <p className="phrasePleaseReview">리뷰를 작성해 보세요!</p>
            <button className="openReviewInput" onClick={authValidation}>
              상품평 작성하기
            </button>
          </div>
          <div className={isReviewExist.current ? 'reviews' : 'reviewsHide'}>
            {modifiedReviewList.map(review => {
              return (
                <div className="reviewContainer" key={review.id}>
                  <div className="review">
                    <p className="reviewText">{review.contents}</p>
                  </div>
                  <div className="userInfo">
                    <div className="userInfoWrap">
                      <div className="userName">
                        <span className="userLevelTag">Basic</span>
                        <span className="reviewer">{review.name}</span>님의
                        리뷰입니다.
                      </div>
                      <div className="dateReviewWritten">
                        <span className="date">작성날짜: </span>
                        {review.created_at}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            <div
              className={
                isReviewExist.current ? 'reviewInput' : 'reviewInputHide'
              }
            >
              <textarea
                className="reviewTextArea"
                placeholder="내용을 입력하세요."
                onChange={putRevText}
                value={reviewText}
                onClick={inputAuthValidation}
              />

              <div
                className={
                  isReviewExist.current ? 'reviewButtons' : 'reviewButtonsHide'
                }
              >
                <button className="cancelInput">작성취소</button>

                <button className="registerInput" onClick={submitReview}>
                  등록하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReviewWindow;

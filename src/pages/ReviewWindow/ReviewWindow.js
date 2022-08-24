import React, { useState, useEffect, useRef } from 'react';

import './ReviewWindow.scss';
const ReviewWindow = () => {
  const [isReturned, setIsReturned] = useState(false);
  const [reviewList, setReviewList] = useState([]);
  const [reviewText, setReviewText] = useState('');
  const [myReviewUpdate, setMyReviewUpdate] = useState(false);
  const myReviews = useRef(false);

  let isReviewExist = useRef(false);
  if (reviewList.length !== 0) isReviewExist.current = true;

  const token =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjgsImV4cCI6MTY2MTM4NTYwMSwiaWF0IjoxNjYxMzQ5NjAxfQ.0hQGIVvBN0fypuWx2SWKV7unPH9bziIZBiFf8S_FjJo';

  const modifiedReviewList = reviewList.map(review => {
    let maskedName = review.name.replace(/^(.).*(.)$/, '$1**$2');
    let newDate = review.created_at.slice(0, review.created_at.indexOf('T'));
    return { ...review, name: maskedName, created_at: newDate };
  });

  const reviewCount = reviewList.length;

  const authValidation = () => {
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

  const backToList = () => {
    myReviews.current = false;
    setIsReturned(!isReturned);
  };

  const submitReview = () => {
    if (reviewText !== '') {
      fetch('http://10.58.2.193:3000/review/product/1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify({ contents: reviewText }),
      }).then(() => {
        setIsReturned(!isReturned);
        setReviewText('');
      });
    } else {
      alert('내용을 입력 하세요.');
    }
  };

  const openMyReviewListButton = () => {
    if (reviewList.length > 0) {
      myReviews.current = true;
      setMyReviewUpdate(true);
    } else {
      alert('작성 된 리뷰가 없습니다');
    }
  };

  const deleteMyReview = id => {
    fetch(`http://10.58.2.193:3000/review/product/1/${id}/my`, {
      method: 'DELETE',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ reviewId: id }),
    }).then(() => setMyReviewUpdate(!myReviewUpdate));
  };

  const firstUpdate = useRef(false);

  useEffect(() => {
    if (firstUpdate.current) {
      fetch('http://10.58.2.193:3000/review/product/1/my', {
        method: 'GET',
        headers: {
          Authorization: token,
        },
      })
        .then(res => {
          if (res.ok) {
            return res.json();
          } else if (res.ok === false) {
            alert('로그인이 필요힙니다.');
          }
        })
        .then(reviewData => {
          setReviewList(reviewData.reviewList);
        });
    }
    firstUpdate.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myReviewUpdate]);

  useEffect(() => {
    fetch('http://10.58.2.193:3000/review/product/1?page=1&pageSize=8', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(reviewData => setReviewList(reviewData.reviewList));
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
              <button className="backToFullReview" onClick={backToList}>
                전체 리뷰 보기
              </button>
            </p>
          </div>
        </div>
        <div className="reviewContent">
          {!isReviewExist.current && (
            <div className="noReview">
              <p className="phraseNoReview">리뷰가 없습니다.</p>
              <p className="phrasePleaseReview">리뷰를 작성해 보세요!</p>
              <button className="openReviewInput" onClick={authValidation}>
                상품평 작성하기
              </button>
            </div>
          )}

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
                    {myReviews.current && (
                      <div className="buttonWrapper">
                        <button
                          className="deleteThisReview"
                          onClick={() => deleteMyReview(review.id)}
                        >
                          삭제하기
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
            {!myReviews.current && (
              <div className="reviewInput">
                <div className="modifyInputWindow">
                  <textarea
                    className="reviewTextArea"
                    placeholder="내용을 입력하세요."
                    onChange={putRevText}
                    value={reviewText}
                    onClick={inputAuthValidation}
                  />

                  <div
                    className={
                      isReviewExist.current
                        ? 'reviewButtons'
                        : 'reviewButtonsHide'
                    }
                  >
                    <button className="cancelInput">작성취소</button>
                    <button className="registerInput" onClick={submitReview}>
                      등록하기
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReviewWindow;

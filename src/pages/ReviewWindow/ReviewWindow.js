import React, { useState, useEffect, useRef } from 'react';

import './ReviewWindow.scss';

const ReviewWindow = () => {
  const [isReturned, setIsReturned] = useState(false);
  const [reviewList, setReviewList] = useState([]);
  const [reviewText, setReviewText] = useState('');
  const [myReviewUpdate, setMyReviewUpdate] = useState(false);
  const [myReviews, setMyReviews] = useState(false);
  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [reviewCount, setReviewCount] = useState(0);
  const isReviewExist = useRef(false);
  const firstUpdate = useRef(false);
  const secondReviewsCall = useRef(false);

  const token = localStorage.getItem('token');

  const putRevText = e => {
    setReviewText(e.target.value);
  };
  if (reviewList.length !== 0) isReviewExist.current = true;

  const modifiedReviewList = reviewList.map(review => {
    let maskedName = review.name.replace(/^(.).*(.)$/, '$1**$2');
    let newDate = review.created_at.slice(0, review.created_at.indexOf('T'));
    return { ...review, name: maskedName, created_at: newDate };
  });

  const authValidation = () => {
    fetch('http://10.58.2.193:3000/common/access', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
      .then(res => res.json())
      .then(res => {
        if (res.result === true) {
          isReviewExist.current = !isReviewExist.current;
          if (myReviews !== true) setIsReturned(!isReturned);
        } else {
          alert('로그인이 필요한 기능입니다.');
        }
      });
  };

  const inputAuthValidation = () => {
    fetch('http://10.58.2.193:3000/common/access', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
      .then(res => res.json())
      .then(res => {
        if (res.result !== true) alert('로그인이 필요한 기능입니다.');
      });
  };

  const submitReview = () => {
    if (reviewText !== '') {
      fetch('http://10.58.2.193:3000/review/product/1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify({ contents: reviewText }),
      }).then(() => {
        setReviewText('');

        return setIsReturned(!isReturned);
      });
    } else {
      alert('내용을 입력 하세요.');
    }
  };

  const openMyReviewListButton = () => {
    fetch('http://10.58.2.193:3000/common/access', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
      .then(res => res.json())
      .then(res => {
        if (res.result !== true) {
          alert('로그인이 필요한 기능입니다.');
        } else {
          setMyReviewUpdate(true);
          setPage(1);
          setCurrentPage(1);
        }
      });
  };

  const backToList = () => {
    setMyReviewUpdate(false);
    setIsReturned(!isReturned);
  };

  const deleteMyReview = id => {
    fetch(`http://10.58.2.193:3000/review/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ reviewId: id }),
    }).then(() => setMyReviewUpdate(!myReviewUpdate));
  };

  useEffect(() => {
    if (firstUpdate.current && myReviewUpdate === true) {
      fetch(
        `http://10.58.2.193:3000/review/product/1/my?page=${page}&pageSize=6`,
        {
          method: 'GET',
          headers: {
            Authorization: 'Bearer ' + token,
          },
        }
      )
        .then(res => {
          if (res.ok) {
            return res.json();
          } else if (res.ok === false) {
            alert('로그인이 필요힙니다.');
          }
        })
        .then(reviewData => {
          if (reviewData.reviewList.length !== 0) {
            setMyReviews(true);
            setReviewList(reviewData.reviewList);
            setReviewCount(reviewData.reviewCount[0].reviewCount);
          } else {
            alert('작성 된 리뷰가 없습니다');
          }
        });

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }
    firstUpdate.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, myReviewUpdate]);

  useEffect(() => {
    fetch('http://10.58.2.193:3000/review/product/1?page=1&pageSize=6', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(reviewData => {
        setReviewList(reviewData.reviewList);
        setReviewCount(reviewData.reviewCount[0].reviewCount);
      });

    secondReviewsCall.current = true;
  }, []);

  useEffect(() => {
    if (secondReviewsCall.current !== false) {
      if (myReviewUpdate === false) {
        fetch(
          `http://10.58.2.193:3000/review/product/1?page=${page}&pageSize=6`,
          {
            method: 'GET',
          }
        )
          .then(res => res.json())
          .then(reviewData => {
            setReviewList(reviewData.reviewList);
            setReviewCount(reviewData.reviewCount[0].reviewCount);
          });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isReturned, page]);

  const pageNumber = Math.ceil(reviewCount / 6);
  const pageNumbers = [];
  for (let i = 0; i < pageNumber; i++) {
    pageNumbers.push(i + 1);
  }

  const movePrev = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      setPage(page - 1);
    }
  };

  const moveNext = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1);
      setPage(page + 1);
    }
  };

  const movePage = click => {
    if (currentPage !== click) {
      setCurrentPage(click);
      setPage(click);
    }
  };

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

            <span className="secondReviewCall">({reviewCount})</span>
            <p className="showMyReviewWrapper">
              {!myReviewUpdate ? (
                <button
                  className="showMyReview"
                  onClick={openMyReviewListButton}
                >
                  내 리뷰 보기
                </button>
              ) : (
                <button className="backToFullReview" onClick={backToList}>
                  전체 리뷰 보기
                </button>
              )}
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
            <div className="reviewAndPages">
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
                      {myReviews && (
                        <div className="buttonWrapper">
                          <button
                            className="deleteThisReview"
                            onClick={() => deleteMyReview(review.id)}
                          >
                            이 리뷰 삭제하기 &#x2716;
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
              {pageNumbers !== 0 && (
                <div className="paginationGroup">
                  <button className="prevPage" onClick={movePrev}>
                    이전
                  </button>

                  <p className="pageNumbers">
                    {pageNumbers.map(page => {
                      return (
                        <button
                          className={
                            !(currentPage === page)
                              ? 'pageNumber'
                              : 'clickedPageNumber'
                          }
                          key={page}
                          onClick={() => movePage(page)}
                          value={page}
                        >
                          {page}
                        </button>
                      );
                    })}
                  </p>
                  <button className="nextPage" onClick={moveNext}>
                    다음
                  </button>
                </div>
              )}
            </div>
          </div>
          {!myReviews && (
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
  );
};

export default ReviewWindow;

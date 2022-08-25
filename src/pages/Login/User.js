import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const User = ({ content, isSelectLogin }) => {
  const { title, btnText, img } = content;
  const [info, setInfo] = useState({
    userId: '',
    userPw: '',
  });

  const onChangeinfo = e => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };
  const navigate = useNavigate();

  const passed =
    info.userId.length > 5 &&
    info.userPw.length > 5 &&
    info.userId.includes('@', '.');

  const goToSignUp = e => {
    navigate('/auth/signUp');
  };

  const goToMain = e => {
    navigate('/');
  };

  const toSignUp = e => {
    e.preventDefault();
    fetch('http://10.58.7.174:3000/auth/signUp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: info.userId,
        password: info.userPw,
      }),
    })
      .then(response => {
        if (response.ok) {
          alert('회원가입 성공');
          navigate('/auth/signIn');
        }
        return response.json();
      })
      .then(response => response.json());
  };

  const toLogin = e => {
    e.preventDefault();
    fetch('http:///10.58.7.174:3000/auth/signIn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: info.userId,
        password: info.userPw,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.accessToken) {
          localStorage.setItem('token', result.accessToken);
          alert('로그인 성공');
          navigate('/');
        } else {
          alert('아이디 혹은 비밀번호를 확인 해 주세요');
        }
      });
  };

  return (
    <div className="user">
      <img alt="mainImg" src={img} />
      <div className="layoutLeftPage">
        <div className="formOuter">
          <div className="imgOuter">
            <img
              onClick={goToMain}
              alt="logo"
              src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FxRctI%2FbtrKqFjVPvE%2FUGGxknuQ3SjbN6B6RzWafk%2Fimg.png"
              className="logo"
            />
          </div>
          <form>
            <h2 className="title"> {title} </h2>
            <input
              type="text"
              placeholder="이메일"
              name="userId"
              value={info.userId}
              onChange={onChangeinfo}
            />
            <input
              type="password"
              placeholder="비밀번호(영문 대소문자/숫자 4~16자)"
              name="userPw"
              value={info.userPw}
              onChange={onChangeinfo}
            />
            <button
              disabled={!passed}
              onClick={isSelectLogin ? toLogin : toSignUp}
            >
              {btnText}
            </button>

            {title === '로그인' && (
              <button onClick={goToSignUp}>회원가입하기</button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;

import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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

  // const goToLogin = e => {
  //   navigate('/login');
  //   alert('회원가입이 완료 되었습니다. 로그인해주세요');
  // };
  //backend팀과 fetch 함수에 어떻게 넣을지 몰라 주석처리

  const passed =
    info.userId.length > 5 &&
    16 > info.userPw.length > 5 &&
    info.userId.includes('@', '.');

  const toSignUp = e => {
    e.preventDefault();
    fetch('http://10.58.2.51:3000/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: info.userId,
        password: info.userPw.toString(),
      }),
    });
  };

  const toLogin = e => {
    e.preventDefault();
    fetch('http://10.58.2.51:3000/users/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: info.userId,
        password: info.userPw.toString(),
      }),
    }).then(response => {
      if (response.status === 200) {
        localStorage.setItem('token', String(response.accessToken));
        alert('로그인 성공');
      } else if (response.status === 400) {
        alert('아이디 혹은 비밀번호를 확인 해 주세요');
      }
      return response.json();
    });
  };

  return (
    <div className="layout">
      <img alt="mainImg" src={img} />
      <div className="layoutLeftPage">
        <div className="formOuter">
          <p>BODYLIKE</p>
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
              <Link to="/signup">
                <button>회원가입하기</button>
              </Link>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;

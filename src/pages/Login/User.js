import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const User = ({ content }) => {
  const { title, btnText } = content;
  const [info, setInfo] = useState({
    userId: '',
    userPw: '',
  });
  const onChangeinfo = e => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const navigate = useNavigate();
  const goToMain = e => {
    navigate('/main');
  };

  const passed =
    info.userId.toLowerCase() &&
    info.userId.length > 5 &&
    info.userPw.length > 5;
  // console.log(passed);
  // 유효성 검사 기준 (아이디 소문자,(length 4~16), 비밀번호 대소문자 포함 )

  return (
    <div className="layout">
      <img
        alt="mainImg"
        src="https://images.unsplash.com/photo-1611489704164-6f73c62bd810?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      />
      <div className="layoutLeftPage">
        <div className="formOuter">
          <p>BODYLIKE</p>
          <form>
            <h2 className="title"> {title} </h2>
            <input
              type="text"
              placeholder="아이디(영문 소문자/숫자 4~16자)"
              value={info.userId}
              onChange={onChangeinfo}
              name="userId"
            />
            <input
              type="password"
              placeholder="비밀번호(영문 대소문자/숫자 4~16자)"
              value={info.userPw}
              onChange={onChangeinfo}
              name="userPw"
            />
            <button disabled={!passed} onClick={goToMain}>
              {btnText}
            </button>

            {/* <Link to="{SIGNUP_DATA}"> */}
            <button>회원가입하기</button>
            {/* 조건부 렌더링 */}
            {/* </Link> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;

import React from 'react';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const User = ({ content }) => {
  const { title, btnText, img } = content;
  const [info, setInfo] = useState({
    userId: '',
    userPw: '',
  });
  // const [emailInfo, setEmailInfo] = useState('')
  const onChangeinfo = e => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const navigate = useNavigate();
  const goToLogin = e => {
    navigate('/login');
    alert('회원가입이 완료 되었습니다. 로그인해주세요');
  };

  const passed =
    // info.userId.toLowerCase() &&
    info.userId.length > 5 &&
    info.userPw.length > 5 &&
    info.userId.includes('@');
  // 유효성 검사 기준 (아이디 소문자,(length 4~16), 비밀번호 대소문자 포함 )

  console.log(passed);

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

            <button disabled={!passed} onClick={goToLogin}>
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

import React from 'react';
import './Login.scss';
// import { useNavigate } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  // const [info, setInfo] = useState({
  //   userEmail: '',
  //   userPw: '',
  // });
  const navigate = useNavigate();
  const goToMain = e => {
    navigate('/main');
  };

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
            <h2 className="loginText"> 로그인 </h2>
            <input type="email" placeholder="아이디(영문 소문자/숫자 4~16자)" />
            <input
              type="password"
              placeholder="비밀번호(영문 대소문자/숫자 4~16자)"
            />
            <Link to="/main">
              <button onClick={goToMain}>로그인하기</button>
            </Link>

            <Link to="/signUp">
              <button>회원가입하기</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { post } from '../api';
import { AccessTokenContext } from '../contexts/AccessTokenContext';
import AskRedirect from '../components/AuthUI/AskRedirect';

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setToken } = useContext(AccessTokenContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isFormValid) {
        const res = await post('auth/signin', {
          email,
          password,
        });
        const userToken = res.data.access_token;
        if (userToken) localStorage.setItem('userToken', userToken);
        setToken((prev) => !prev);
      }
      alert('환영합니다!');
      navigate('/todo');
    } catch (error) {
      console.log(error);
      if (error.response.data.message) {
        error.response.data.message === 'Unauthorized'
          ? alert('이메일과 비밀번호를 다시 확인해주세요.')
          : alert(error.response.data.message);
      }
    }
  };

  const isFormValid = email.includes('@') && password.length >= 8;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">이메일</label>
        <input
          id="email"
          data-testid="email-input"
          type="email"
          placeholder="example@gmail.com"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label htmlFor="password">비밀번호</label>
        <input
          id="password"
          data-testid="password-input"
          type="password"
          placeholder="8자리 이상 입력"
          minLength={8}
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button
          data-testid="signup-button"
          type="submit"
          disabled={!isFormValid}
        >
          로그인
        </button>
      </form>
      <AskRedirect />
    </>
  );
}

export default SignIn;

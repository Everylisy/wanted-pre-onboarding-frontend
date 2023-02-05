import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { post } from '../api';
import AskRedirect from '../components/AuthUI/AskRedirect';

function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isFormValid) {
        await post('auth/signup', {
          email,
          password,
        });
      }
      alert('회원가입을 환영합니다!');
      navigate('/signin');
    } catch (error) {
      console.log(error);
      if (error.response.data.message) alert(error.response.data.message);
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
          회원가입
        </button>
      </form>
      <AskRedirect />
    </>
  );
}

export default SignUp;

import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { post } from '../api';
import { AccessTokenContext } from '../contexts/AccessTokenContext';
import AskRedirect from '../components/AuthUI/AskRedirect';
import Input from '../components/AuthUI/Input';
import Button from '../components/AuthUI/Button';

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setToken } = useContext(AccessTokenContext);

  const saveAccessToken = (res) => {
    const userToken = res.data.access_token;
    if (userToken) localStorage.setItem('userToken', userToken);
    setToken((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isFormValid) {
        const res = await post('auth/signin', {
          email,
          password,
        });
        saveAccessToken(res);
      }
      alert('환영합니다!');
      navigate('/todo');
    } catch (error) {
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
        <Input
          label="이메일"
          input={{
            id: 'email',
            [`data-testid`]: 'email-input',
            type: 'email',
            placeholder: 'example@gmail.com',
            required: true,
            onChange: (e) => setEmail(e.target.value),
            value: email,
          }}
        />
        <Input
          label="비밀번호"
          input={{
            id: 'password',
            [`data-testid`]: 'password-input',
            type: 'password',
            placeholder: '8자리 이상 입력',
            minLength: 8,
            required: true,
            onChange: (e) => setPassword(e.target.value),
            value: password,
          }}
        />
        <Button
          btnText="로그인"
          button={{
            [`data-testid`]: 'signin-button',
            type: 'submit',
            disabled: !isFormValid,
          }}
        />
      </form>
      <AskRedirect />
    </>
  );
}

export default SignIn;

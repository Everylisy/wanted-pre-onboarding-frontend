import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { post } from '../api';
import { AccessTokenContext } from '../contexts/AccessTokenContext';
import Input from '../components/AuthUI/Input';
import Button from '../components/AuthUI/Button';
import Layout from '../components/AuthUI/Layout';
import InputValidation from '../components/AuthUI/InputValidation';

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmited, setIsSubmited] = useState(false);
  const { setToken } = useContext(AccessTokenContext);

  const saveAccessToken = (res) => {
    const userToken = res.data.access_token;
    if (userToken) localStorage.setItem('userToken', userToken);
    setToken((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmited === true) return;
    try {
      if (isFormValid) {
        setIsSubmited(true);
        const res = await post('auth/signin', {
          email,
          password,
        });
        saveAccessToken(res);
      }
      navigate('/todo', { replace: true });
    } catch (error) {
      if (error.response.data.message) {
        error.response.data.message === 'Unauthorized'
          ? alert('이메일과 비밀번호를 다시 확인해주세요.')
          : alert(error.response.data.message);
      }
    }
    setIsSubmited(false);
  };

  const isEmailValid = email.includes('@');
  const isPasswordValid = password.length >= 8;
  const isFormValid = isEmailValid && isPasswordValid;

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <Input
          label="이메일"
          input={{
            id: 'email',
            [`data-testid`]: 'email-input',
            type: 'email',
            placeholder: 'example@gmail.com',
            required: true,
            autoFocus: true,
            onChange: (e) => setEmail(e.target.value),
            value: email,
          }}
        />
        {!isEmailValid && email.length > 0 && (
          <InputValidation inputType="email" />
        )}
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
        {!isPasswordValid && password.length > 0 && (
          <InputValidation inputType="password" />
        )}
        <Button
          btnText="로그인"
          button={{
            [`data-testid`]: 'signin-button',
            type: 'submit',
            disabled: !isFormValid,
          }}
        />
      </form>
    </Layout>
  );
}

export default SignIn;

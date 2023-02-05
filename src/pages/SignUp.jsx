import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { post } from '../api';
import Input from '../components/AuthUI/Input';
import Button from '../components/AuthUI/Button';
import Layout from '../components/AuthUI/Layout';

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
      if (error.response.data.message) alert(error.response.data.message);
    }
  };

  const isFormValid = email.includes('@') && password.length >= 8;

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
          btnText="회원가입"
          button={{
            [`data-testid`]: 'signup-button',
            type: 'submit',
            disabled: !isFormValid,
          }}
        />
      </form>
    </Layout>
  );
}

export default SignUp;

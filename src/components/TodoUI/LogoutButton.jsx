import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AccessTokenContext } from '../../contexts/AccessTokenContext';
import Button from './Button';

function LogoutButton() {
  const navigate = useNavigate();
  const { token, setToken } = useContext(AccessTokenContext);

  const logout = () => {
    if (token) localStorage.removeItem('userToken');
    setToken((prev) => !prev);
    alert('로그아웃 되었습니다.');
    navigate('/', { replace: true });
  };

  return (
    <Button
      btnText="로그아웃"
      button={{
        onClick: logout,
      }}
    />
  );
}

export default LogoutButton;

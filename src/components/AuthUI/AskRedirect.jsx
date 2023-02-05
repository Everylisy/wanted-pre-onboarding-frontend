import { useNavigate, useLocation } from 'react-router-dom';

function AskRedirect() {
  const navigate = useNavigate();
  const location = useLocation();

  let pathName = location.pathname;

  return (
    <>
      {(pathName === '/' || pathName === '/signin') && (
        <div>
          <span>아직 회원이 아니신가요?</span>
          <span onClick={() => navigate('/signup')}>회원가입</span>
        </div>
      )}
      {pathName === '/signup' && (
        <div>
          <span>이미 계정이 있으신가요?</span>
          <span onClick={() => navigate('/signin')}>로그인</span>
        </div>
      )}
    </>
  );
}

export default AskRedirect;

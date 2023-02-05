import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

function AskRedirect() {
  const navigate = useNavigate();
  const location = useLocation();

  let pathName = location.pathname;

  return (
    <>
      {(pathName === '/' || pathName === '/signin') && (
        <AskWrapper>
          <AskDesc>아직 회원이 아니신가요?</AskDesc>
          <AskLink onClick={() => navigate('/signup')}>회원가입</AskLink>
        </AskWrapper>
      )}
      {pathName === '/signup' && (
        <AskWrapper>
          <AskDesc>이미 계정이 있으신가요?</AskDesc>
          <AskLink onClick={() => navigate('/signin')}>로그인</AskLink>
        </AskWrapper>
      )}
    </>
  );
}

export default AskRedirect;

const AskWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 0.98rem;
`;

const AskDesc = styled.p`
  margin-right: 8px;
`;

const AskLink = styled.p`
  text-decoration: underline;
  cursor: pointer;
`;

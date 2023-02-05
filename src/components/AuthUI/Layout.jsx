import styled from 'styled-components';
import AskRedirect from './AskRedirect';

function Layout({ children }) {
  return (
    <Wrapper>
      <Container>
        <HeaderWrapper>
          <Header>Simple Todo</Header>
          <Description>할 일을 계획하고, 실천해보세요.</Description>
        </HeaderWrapper>
        <FormWrapper>
          {children}
          <AskRedirect />
        </FormWrapper>
      </Container>
    </Wrapper>
  );
}

export default Layout;

const Wrapper = styled.div`
  max-width: 640px;
  padding-top: 16vh;
  margin: 0px auto;
`;

const Container = styled.div`
  min-height: 392px;
`;

const HeaderWrapper = styled.div`
  padding: 24px 18px 4px;
`;

const Header = styled.h3`
  font-size: 1.65rem;
  font-weight: 700;
  margin-bottom: 8px;
`;

const Description = styled.p`
  color: grey;
  font-size: 0.9rem;
`;

const FormWrapper = styled.div`
  padding: 24px 18px;
`;

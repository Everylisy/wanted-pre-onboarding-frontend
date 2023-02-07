import styled from 'styled-components';

function Layout({ children }) {
  return (
    <Wrapper>
      <Container>
        <HeaderWrapper>
          <Header>Simple Todo</Header>
          <Description>할 일을 계획하고, 실천해보세요.</Description>
        </HeaderWrapper>
        <FormWrapper>{children}</FormWrapper>
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
  display: flex;
  flex-direction: column;
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
  width: 100%;
  padding: 24px 18px;
  word-break: break-all;
`;

export const AddtodoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 18px;
`;

export const Space = styled.div`
  width: 14px;
  height: 0;
  flex-grow: 0;
  flex-shrink: 0;
`;

export const ListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  label {
    display: flex;
    align-items: center;
  }
  form {
    display: flex;
    width: 100%;
    input {
      margin-right: 16px;
    }
  }
  span {
    max-width: 90%;
  }
`;

export const TodoButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  button {
    &:first-child {
      margin-right: 12px;
    }
  }
`;

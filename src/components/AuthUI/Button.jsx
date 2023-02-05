import styled from 'styled-components';

const Button = (props) => {
  return (
    <StyledBtn {...props.button}>
      <span>{props.btnText}</span>
    </StyledBtn>
  );
};

export default Button;

const StyledBtn = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 6px 0 20px 0;
  padding: 16px 18px;
  border: none;
  border-radius: 8px;
  background-color: #0a0f18;
  cursor: pointer;
  span {
    color: white;
    font-size: 1rem;
    font-weight: 700;
    font-family: 'Pretendard', sans-serif;
  }
`;

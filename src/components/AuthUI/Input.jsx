import styled from 'styled-components';

const Input = (props) => {
  return (
    <InputContainer>
      <StyledLabel htmlFor={props.input.id}>{props.label}</StyledLabel>
      <StyledInput {...props.input} />
    </InputContainer>
  );
};

export default Input;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  word-break: keep-all;
  margin-bottom: 12px;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 14px 16px;
  outline-style: none;
  border-color: #c1c4c9;
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
  font-family: 'Pretendard', sans-serif;
  font-size: 0.9rem;
  &:focus {
    border-color: #626972;
    border-width: 1px;
    border-style: solid;
  }
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  color: #b8b8b8;
  font-size: 0.825rem;
`;

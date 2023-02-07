import styled from 'styled-components';

const Input = (props) => {
  return (
    <>
      {props?.input.type === 'checkbox' ? (
        <StyledCheckbox {...props.input} />
      ) : (
        <>
          <StyledLabel htmlFor={props.input.id}>{props.label}</StyledLabel>
          <StyledInput {...props.input} />
        </>
      )}
    </>
  );
};

export default Input;

const StyledInput = styled.input`
  width: 100%;
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

const StyledCheckbox = styled.input`
  appearance: none;
  height: 20px;
  width: 20px;
  margin: 0 10px 0 0;
  border-radius: 4px;
  border: 1px solid #626972;
  transition: background 0.2s;
  outline: none;
  cursor: pointer;

  &:checked {
    background: black;
  }

  &::after {
    display: none;
    position: relative;
    width: 15%;
    height: 40%;
    top: 20%;
    left: 40%;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    content: '';
    transform: rotate(45deg);
  }

  &:checked::after {
    display: block;
  }
`;

import styled from 'styled-components';

const Button = (props) => {
  return (
    <>
      {props?.btnText === '추가' ? (
        <AddButton {...props.button}>
          <span>{props.btnText}</span>
        </AddButton>
      ) : (
        <TodoButton {...props.button} color={props.color}>
          <span>{props.btnText}</span>
        </TodoButton>
      )}
    </>
  );
};

export default Button;

const AddButton = styled.button`
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  background-color: #0a0f18;
  cursor: pointer;
  span {
    color: white;
    white-space: nowrap;
    font-size: 1rem;
    font-weight: 500;
    font-family: 'Pretendard', sans-serif;
  }
`;

const TodoButton = styled.button`
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  span {
    color: ${(props) => props?.color};
    white-space: nowrap;
    font-size: 1rem;
    font-family: 'Pretendard', sans-serif;
    text-decoration: underline;
    font-weight: 500;
  }
`;

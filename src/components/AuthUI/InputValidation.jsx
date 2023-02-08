import styled from 'styled-components';

function InputValidation({ inputType }) {
  return (
    <>
      {inputType === 'email' ? (
        <FeedbackMessage>특수문자 @를 포함해주세요.</FeedbackMessage>
      ) : (
        <FeedbackMessage>8자리 이상 입력해주세요.</FeedbackMessage>
      )}
    </>
  );
}

export default InputValidation;

const FeedbackMessage = styled.p`
  color: #ff3e55;
  font-size: 0.8rem;
  margin-bottom: 10px;
`;

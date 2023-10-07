import styled from "styled-components";

export const TextAreaWrapper = styled.div`
  label,
  .ant-form-item-label {
    font-weight: 500;
    text-align: left;
    color: #344054;
    margin-bottom: 5px;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    padding: 0;

    label {
      color: #344054;
    }
  }
  .ant-input {
    border-radius: 5px;
    padding: 10px;

    &::placeholder {
      font-family: "DM Sans";
      font-weight: normal;
      font-size: 13px;
      text-align: left;
      color: #4e667e;
    }
  }
  .ant-form-item-explain-error {
    font-size: 12px;
  }
`;

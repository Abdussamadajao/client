import styled from "styled-components";

export const InputWrapper = styled.div`
  label,
  .ant-form-item-label {
    font-weight: 500;
    text-align: left;
    color: ${({ theme }) => theme.colors.gray6};
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
    border-radius: 4px;
    padding: 11px 14px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.gray6};
  }

  /* react phone input */
  .phone-input {
    width: 100% !important;
    height: 45px !important;
  }

  .ant-form-item-explain-error {
    font-size: 12px;
  }
`;

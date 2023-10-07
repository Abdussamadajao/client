import { Input as AntdInput, Form } from "antd";
import PhoneInput from "react-phone-input-2";

import { InputWrapper } from "./styles";

function Input(props: any) {
  const { formItem, type, ...rest } = props;

  return (
    <InputWrapper>
      <Form.Item {...formItem}>

          <AntdInput {...rest} value={props.value} />
      
      </Form.Item>
    </InputWrapper>
  );
}

export default Input;

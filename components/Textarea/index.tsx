import { Input as AntdInput, Form } from "antd";
import { TextAreaWrapper } from "./styles";

const TextArea = (props: any) => {
  const { formItem, ...rest } = props;
  return (
    <TextAreaWrapper>
      <Form.Item {...formItem}>
        <AntdInput.TextArea {...rest} />
      </Form.Item>
    </TextAreaWrapper>
  );
};

export default TextArea;

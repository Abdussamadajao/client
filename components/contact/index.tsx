import type { NextPage } from "next";
import { useState } from "react";
import { Form, message } from "antd";
import { init, send } from "emailjs-com";

import Button from "components/Button";
import Input from "components/Input";
import TextArea from "components/Textarea";
import { Wrapper } from "./style";

const Home: NextPage = () => {
  const [demoForm] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);

  type DemoType = {
    email: string;
    phone: string;
    name: string;
    company: string;
    message: string;
  };

  async function sendEmail(values: any) {
    const _values = values as DemoType;

    const emailTemplate = {
      name: _values.name,
      email: _values.email,
      company: _values.company,
      phone: _values.phone,
      message: _values.message,
    };
    setIsLoading(true);
    try {
      init(process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string),
        await send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
          "template_opv53nk",
          emailTemplate,
          "1TDXE5YKiOOff89QL"
        );
      message.success(
        "Recieved your request. A representative will be in touch soon!"
      );
      demoForm.resetFields();
    } catch (err) {
      message.error("Unable to send your request. Please try again!");
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Wrapper>
      <section className="form-wrapper">
        <h2>Contact us</h2>

        <Form
          name="basicForm"
          form={demoForm}
          layout="vertical"
          onFinish={sendEmail}
        >
          <Input
            formItem={{
              name: "name",
              label: "Name",
              rules: [{ required: true, message: "Please enter your name" }],
            }}
          />

          <Input
            formItem={{
              name: "email",
              label: "Email",
              rules: [
                { required: true, message: "Please enter your work email" },
                {
                  type: "email",
                  message: "Please input a valid email address",
                },
              ],
            }}
            type="email"
          />
          <Input
            formItem={{
              name: "phone",
              label: "Phone Number",
              rules: [
                { required: true, message: "Please enter your phone number" },
                {
                  type: "phone",
                  message: "Please enter a valid phone number",
                },
              ],
            }}
            type="phone"
          />
          <Input
            formItem={{
              name: "company",
              label: "Company / Organization",
              rules: [
                {
                  required: true,
                  message: "Please enter your company/organization name",
                },
              ],
            }}
          />

          <TextArea
            formItem={{
              name: "message",
              label: "Message",
              rules: [
                {
                  required: true,
                  message: "Please tell us why you want to us to help you with",
                },
              ],
            }}
            autoSize={{ minRows: 4, maxRows: 4 }}
          />

          <div className="btn-wrapper">
            <Button htmlType="submit" type="primary" disabled={isLoading}>
              {isLoading ? "Sending" : "Send Message"}
            </Button>
          </div>
        </Form>
      </section>

      <section className="img-wrapper"></section>
    </Wrapper>
  );
};

export default Home;

import React from "react";
import { Wrapper } from "./style";
import Image from "next/image";

const Firm = () => {
  return (
    <Wrapper>
      <div className="content">
        <div className="content__img">
          <Image
            src="/images/office3.jpg"
            height={460}
            width={500}
            objectFit="cover"
            placeholder="blur"
            blurDataURL="/images/office3.jpg"
            alt={'about-alt'}
          />
        </div>
        <div className="content__text">
          <p>
            Lex Gateway Legal Practitioners (Lex Gateway LP) is a law firm
            established with the purpose of providing quality and highly
            professional legal services to clients in Nigeria and abroad. We
            have our main office in Abuja and affiliate offices across states in
            Nigeria. We are a seasoned, recognized and dynamic law firm with the
            aim of providing transactional, corporate, property, and other legal
            services to our teeming clients.
          </p>
          <p>
            {" "}
            We have solid and proven expertise in Pre-Election and Election
            Petition Litigation, Information Communication Technology Law,
            Intellectual Property, Corporate and Commercial practice, Property
            Law and General Litigation with several years of experience in
            service to numerous organizations and individuals. The firm can
            boast of partners, associates, and counsel who are tech-savvy with
            knowledge and expertise in banking laws and policies.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Firm;

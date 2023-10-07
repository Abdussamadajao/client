import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ContactLink, Container, CopyrightWrapper } from "./style";
import {
  BsFacebook,
  BsFillTelephoneFill,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { AiFillHome } from "react-icons/ai";

const Footer = () => {
  return (
    <Container>
      <ContactLink>
        <div className="contact">
          <div className="logo">
            <h1>Lex Gateway Legal Practitioners</h1>
          </div>

          <div className="address">
            <div>
              <BsFillTelephoneFill />
              <p>
                <Link href="tel:+2348034262744">+2348034262744</Link>
                {","}
                <Link href="tel:+2348109690615">+2348109690615</Link>
              </p>
            </div>

            <div>
              <GrMail />
              <p>
                <a
                  href="mailto:lexgatewaylp@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  lexgatewaylp@gmail.com
                </a>
              </p>
            </div>
            <div>
              <AiFillHome />
              <p>No.8, Faskari Street, Area 3, Abuja</p>
            </div>
          </div>
        </div>
        <div className="links">
          <div className="link-row">
            <h3>Company</h3>
            <Link href="/about">About </Link>
            <a>Blog </a>
            <a
              href="mailto:lexgatewaylp@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Contact Us
            </a>
          </div>
        </div>
      </ContactLink>

      <CopyrightWrapper>
        <p className="copyright">
          <span>
            Copyright &copy; Lex Gate Way Legal Practitioners{" "}
            {new Date().getFullYear()}. All rights reserved.
          </span>
        </p>

        <div className="social-links">
          <a
            href="https://www.linkedin.com/company/lexgatewaylp/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://www.instagram.com/lexgatewaylp/"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram />
          </a>
          <a
            href="https://web.facebook.com/lexgatewaylp"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook />
          </a>
          <a
            href="https://twitter.com/lexgateway"
            target="_blank"
            rel="noreferrer"
          >
            <BsTwitter />
          </a>
        </div>
      </CopyrightWrapper>
    </Container>
  );
};

export default Footer;

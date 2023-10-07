import styled from "styled-components";
import { deviceSizes } from "styles/themes";

export const Wrapper = styled.header`
  padding: 120px 20px 20px;
  background-image: linear-gradient(to right bottom, #000000cc, #00000030),
    url(/images/low-key-filter-wooden.webp);
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: top;
  min-height: 100vh;

  @media ${deviceSizes.laptop} {
    padding: 120px 80px 20px;
    justify-content: flex-start;
  }
`;

export const TextBox = styled.div`
  animation-name: moveInLeft;
  animation-duration: 1s;
  animation-timing-function: ease-out;
  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 35px;
    text-transform: uppercase;
    letter-spacing: -0.01em;
    text-align: center;
    color: #fff;
    margin-bottom: 20px;

    @media ${deviceSizes.laptop} {
      text-align: left;
      font-size: 60px;
    }
    @media ${deviceSizes.desktop} {
      font-size: 40px;
    }

    span {
      display: block;
    }
  }

  p {
    width: 100%;
    font-size: 20px;
    color: #fff;
    text-align: center;
    @media ${deviceSizes.laptop} {
      width: 60%;
      text-align: left;
    }
  }

  @keyframes moveInLeft {
    0% {
      opacity: 0;
      transform: translateX(-10rem);
    }
    80% {
      transform: translateX(1rem);
    }
    100% {
      opacity: 1;
      transform: translate(0);
    }
  }
`;

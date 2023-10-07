import styled from "styled-components";
import { deviceSizes } from "styles/themes";

export const Wrapper = styled.section`
  padding: 120px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${deviceSizes.laptop} {
    padding: 120px 80px 100px;
  }

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 120%;
    text-align: left;
    letter-spacing: -0.02em;
    margin-bottom: 32px;

    span {
      color: ${({ theme }) => theme.colors.Blue};
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 70px;

    @media ${deviceSizes.laptop} {
      flex-direction: row;
      justify-content: center;
    }

    .content__img {
      animation-name: moveInLeft;
      animation-duration: 1s;
      animation-timing-function: ease-out;
      width: 100%;
      @media ${deviceSizes.laptop} {
        width: 40%;
      }
    }

    .content__text {
      width: 100%;
      animation-name: moveInRight;
      animation-duration: 1s;
      animation-timing-function: ease-out;

      p {
        font-family: "DM Sans";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 150%;
        color: #333333;
        margin-bottom: 20px;
      }

      @media ${deviceSizes.laptop} {
        width: 45%;
      }
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

  @keyframes moveInRight {
    0% {
      opacity: 0;
      transform: translateX(10rem);
    }
    80% {
      transform: translateX(-1rem);
    }
    100% {
      opacity: 1;
      transform: translate(0);
    }
  }
`;

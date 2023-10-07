import styled from "styled-components";
import { deviceSizes } from "styles/themes";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffff;

  padding: 120px 20px 20px;
  background-color: ${({ theme }) => theme.colors.Blue10};

  @media ${deviceSizes.laptop} {
    padding: 120px 80px 20px;
  }

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 120%;
    text-align: center;
    letter-spacing: -0.02em;
    margin-bottom: 32px;
    color: ${({ theme }) => theme.colors.White};

    span {
      color: ${({ theme }) => theme.colors.Blue};
    }
  }

  a {
    color: ${({ theme }) => theme.colors.Blue};
    border-bottom: 1px solid ${({ theme }) => theme.colors.Blue1};
  }

  .text {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 120%;
    text-align: center;
    margin-bottom: 62px;
    width: 80%;
  }

  .content {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    column-gap: 20px;
    justify-content: center;

    @media ${deviceSizes.desktop} {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    @media ${deviceSizes.laptop} {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
      margin-bottom: 60px;

      .icon {
        img {
          font-size: 40px;
          /* padding: 40px 40px; */
          height: 200px !important; 
          width: 200px !important;
          border-radius: 50%;
          color: ${({ theme }) => theme.colors.Blue6};
        }
      }

      p {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        text-align: center;
        height: 90%;
        width: 90%;
      }

      a {
        color: ${({ theme }) => theme.colors.Blue};
        margin-top: 10px;
      }
    }
  }

  .swiper-pagination-bullet {
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    color: #000;
    opacity: 1;
    background: rgba(0, 0, 0, 0.2);
  }

  .swiper-pagination-bullet-active {
    color: #fff;
    background: #007aff;
  }
`;

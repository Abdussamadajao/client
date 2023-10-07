import styled from "styled-components";
import { deviceSizes } from "styles/themes";

export const Wrapper = styled.main`
  padding: 150px 20px 60px;
  background-color: ${({ theme }) => theme.backgrounds.white};
  position: relative;

  @media ${deviceSizes.tablet} {
    padding: 180px 40px 60px;
  }

  @media ${deviceSizes.laptop} {
    padding: 160px 80px 80px;
    display: flex;
    gap: 100px;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      width: 50%;
      height: 100%;
      background-image: url("/images/about.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: top bottom;
      overflow: hidden;
    }
  }

  .form-wrapper {
    @media ${deviceSizes.tablet} {
      width: 70%;
      margin: 0 auto;
    }

    @media ${deviceSizes.laptop} {
      flex: 1;
    }

    h2 {
      font-weight: 500;
      font-size: 32px;
      line-height: 42px;
      color: ${({ theme }) => theme.colors.gray5};
      margin: 0 0 8px;

      @media ${deviceSizes.laptop} {
        font-size: 36px;
        line-height: 47px;
      }
    }

    p {
      font-weight: 400;
      font-size: 18px;
      line-height: 140%;
      color: ${({ theme }) => theme.colors.gray4};
      margin: 0 0 24px;

      @media ${deviceSizes.laptop} {
        max-width: 550px;
      }
    }

    form {
      @media ${deviceSizes.laptop} {
        max-width: 70%;
      }

      .btn-wrapper {
        text-align: center;
        display: flex;
        flex-direction: column;
        margin-top: 32px;
        gap: 14px;

        button {
          width: 100%;
        }

        small {
          font-size: 14px;
          line-height: 12px;
        }
      }
    }
  }

  .img-wrapper {
    display: none;

    @media ${deviceSizes.laptop} {
      display: block;
      flex: 1;
    }
  }
`;

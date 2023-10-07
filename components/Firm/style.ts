import styled from "styled-components";
import { deviceSizes } from "styles/themes";

export const Wrapper = styled.section`
  padding: 120px 20px 20px;

  @media ${deviceSizes.laptop} {
    padding: 120px 80px 60px;
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
      width: 100%;
      @media ${deviceSizes.laptop} {
        width: 40%;
      }
    }

    .content__text {
      width: 100%;

      p {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        color: #333333;
        margin-bottom: 20px;
      }

      @media ${deviceSizes.laptop} {
        width: 45%;
      }
    }
  }
`;

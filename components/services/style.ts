import styled from "styled-components";
import { deviceSizes } from "styles/themes";

export const Wrapper = styled.section`
  padding: 90px 20px 20px;

  @media ${deviceSizes.laptop} {
    padding: 120px 80px 20px;
  }

  .accordion {
    background-color: ${({ theme }) => theme.colors.White};
    border: 1px solid #ffff;
    overflow: hidden;
    transition: all 5s ease;
    box-shadow: 0px 0px 28px rgba(170, 170, 170, 0.12);
    margin-bottom: 10px;
    padding: 23px 25px 23px 30px;

    &__main {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;

      position: relative;
      transition: all 5s ease-in-out;

      h3 {
        font-size: 20px;
        font-weight: 700;
        text-transform: uppercase;
      }
      span {
        font-size: 20px;
        svg {
          width: 50px;
        }
      }
    }

    .text {
      padding: 10px 20px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      transition: all 6s ease;

      p {
        font-size: 20px;
      }

      ul {
        li {
          font-size: 20px;
        }
      }
    }
  }
`;

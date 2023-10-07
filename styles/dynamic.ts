import styled from "styled-components";
import { deviceSizes } from "./themes";

export const Wrapper = styled.section`
  padding: 120px 20px 20px;

  @media ${deviceSizes.laptop} {
    padding: 120px 20px 20px;
  }
  .back {
    height: 30px;
    width: 80px;
    color: ${({ theme }) => theme.colors.gray1};
    display: flex;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.colors.gray1};
    justify-content: center;
    border-radius: 7px;
  }
  li {
    font-size: 18px;
  }
  p {
    font-size: 18px;
  }
  .content {
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    margin-top: 2.5rem;
    
    @media ${deviceSizes.laptop} {
      padding: 0 7rem;
     
    }

    .left {
  

      @media ${deviceSizes.laptop} {
        grid-column: span 1 / span 1;
        max-width: 400px;
        max-height: 1000px;
      }

      img {
        width: 100%;
        border-radius: 5px;
        background-color: ${({ theme }) => theme.colors.gray1};
      }

      h1 {
        font-size: 28px;
        font-weight: 500;
      }
    }

    div {
      list-style: none;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
    }
    label {
      font-size: 20px;
      font-weight: 700;
    }

    .right {
      position: relative;
      grid-column: span 1 / span 1;
      padding-top: 1.75rem;
      padding-bottom: 1.25rem;
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }
`;

// 0308085018 fcmb

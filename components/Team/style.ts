import styled from "styled-components";
import { deviceSizes } from "styles/themes";

export const Wrapper = styled.section`
  padding: 120px 20px 20px;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${deviceSizes.laptop} {
    padding: 120px 90px 20px;
  }

  h1 {
    font-size: 36px;
    color: #333;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 82px;

    span {
      color: ${({ theme }) => theme.colors.Blue};
    }
  }

  .content {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 40px;
    justify-content: center;

    @media ${deviceSizes.desktop} {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    @media ${deviceSizes.laptop} {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
`;

export const AttorneyCard = styled.div`
  width: 100%;
  max-height: 100%;
  /* margin: 0 auto 1rem auto; */
  border-radius: 5px;
  cursor: pointer;

  .img {
    max-width: 100%;
    max-height: 100%;
  }

  img {
    width: 100%;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.gray1};
  }

  .img {
    width: 100%;
    height: 100%;
    float: left;
    position: relative;

    img {
      height: 100%;
      backface-visibility: hidden;
      transition: all 0.5s;
    }

    .caption {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, 20%);
      color: #fff;
      text-transform: uppercase;
      font-size: 20px;
      font-weight: 400;
      text-align: center;
      opacity: 0;
      transition: all 0.5s ease-in-out;
      backface-visibility: hidden;
      display: flex;
      flex-direction: column;
    }
    button {
      margin-top: 20px;
    }
    &:hover .caption {
      opacity: 1;
      transform: translate(-50%, -50%);
    }

    &:hover img {
      filter: blur(0.9rem) brightness(80%);
      border-radius: 5px;
    }
  }
`;


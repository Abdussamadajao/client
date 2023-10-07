import styled from "styled-components";
import { deviceSizes } from "styles/themes";

export type BGProps = {
  image_path: string;
};

export const Wrapper = styled.section<BGProps>`
  padding: 120px 20px 20px;
  background-image: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.8)
    ),
    url("${(props) => props.image_path}");
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-size: cover;
  background-position: center;
  height: 70vh;
  @media ${deviceSizes.laptop} {
    padding: 120px 80px 20px;
  }

  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    text-transform: uppercase;
    letter-spacing: -0.01em;
    text-align: center;
    color: #fff;
    margin-bottom: 20px;
    @media ${deviceSizes.laptop} {
      text-align: left;
      font-size: 60px;
      margin-bottom: 20px;
    }
    @media ${deviceSizes.desktop} {
      font-size: 40px;
    }
  }

  p {
    width: 100%;
    font-size: 18px;
    color: #fff;
    text-align: center;
    font-weight: 400;
    @media ${deviceSizes.laptop} {
      width: 90%;
      //text-align: left;
      font-size: 30px;
    }
  }
`;

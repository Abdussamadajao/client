import React from "react";
import { Wrapper } from "./style";

type BannerProps = {
  heading: string;
  text: string;
  image: string;
};
const Banner = ({ heading, text, image }: BannerProps) => {
  return (
    <Wrapper image_path={image}>
      <h1>{heading}</h1>
      <p>{text}</p>
    </Wrapper>
  );
};

export default Banner;

import React from "react";
import { AttorneyCard, Wrapper } from "./style";
import Image from "next/image";
import { data } from "./data";
import Link from "next/link";
import { Button } from "antd";

const Attorney = () => {
  return (
    <Wrapper>
      <h1>
        <span>Meet </span>The Team
      </h1>

      <div className="content">
        {data.map((item, index) => {
          const { name, img } = item;
          return (
            <AttorneyCard key={index}>
              <figure className="img">
                <Image
                  src={img}
                  height={490}
                  width={370}
                  alt={name}
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL={img}
                />
                <figcaption className={"caption"}>{name}</figcaption>
              </figure>
            </AttorneyCard>
          );
        })}

        <Link href="/team">
          <Button type="primary" style={{ width: '200px'}}>Show All</Button>
        </Link>
      </div>
    </Wrapper>
  );
};

export default Attorney;

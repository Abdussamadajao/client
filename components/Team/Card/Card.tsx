import React, { FunctionComponent } from "react";
import { AttorneyCard } from "../style";
import Image from "next/image";

import Link from "next/link";
import Button from "components/Button";

const Card: FunctionComponent<{
  item: any;
}> = ({ item: { img, id, name } }) => {
  return (
    <>
      <AttorneyCard>
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
          <figcaption className={"caption"}>
            {name}
            <Link key={id} href="/member/[id]" as={`/member/${id}`}>
              <a>
                <Button type="white">Profile</Button>
              </a>
            </Link>
          </figcaption>
        </figure>
      </AttorneyCard>
    </>
  );
};

export default Card;

import React, { useState } from "react";
import { Wrapper } from "./style";
import Card from "./Card/Card";
import { GetStaticProps } from "next";
import { ITeam } from "type";

type Props = {
  teams: ITeam[];
};

const Team = ({ teams }: Props) => {
  return (
    <Wrapper>
      <div className="content">
        {teams.map((team) => (
          <Card key={team.id} item={team} />
        ))}
      </div>
    </Wrapper>
  );
};

export default Team;

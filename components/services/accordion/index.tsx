import React, { FunctionComponent, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { IData, ITeam } from "type";
import { Wrapper } from "../style";

const Accordion: FunctionComponent<{ item: IData }> = ({
  item: { content, heading },
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="accordion">
      <div onClick={() => setIsOpen(!isOpen)} className="accordion__main">
        <h3>{heading}</h3>
        <span >
          {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </span>
      </div>

      {isOpen && (
        <div className="text" dangerouslySetInnerHTML={{ __html: content }} />
      )}
    </div>
  );
};

export default Accordion;

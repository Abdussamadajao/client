import { IconType } from "react-icons";

export interface IArea {
  name: string;
  img: string;
}

export interface ITeam {
  id: number;
  img: string;
  name: string;
  about: string;
  education: string;
  area: string;
  certifications: string;
  ProfessionalBody: string;
}

export interface IData {
  heading: string;
  content: string;
}

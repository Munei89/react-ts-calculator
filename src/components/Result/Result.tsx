import React from "react";
import { ResultWrapper } from "./styles";

interface IResultProps {
  children: React.ReactNode;
}

const Result = (props: IResultProps) => (
  <ResultWrapper role="result">{props.children}</ResultWrapper>
);
export default Result;

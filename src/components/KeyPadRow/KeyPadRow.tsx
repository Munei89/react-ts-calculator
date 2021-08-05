import React from "react";
import { KeyPadRowWrapper } from "./styles";

interface KeyPadRowProps {
  children: React.ReactNode;
}

const KeyPadRow = (props: KeyPadRowProps) => (
  <KeyPadRowWrapper role="row">{props.children}</KeyPadRowWrapper>
);
export default KeyPadRow;

import React from "react";
import { Col } from "antd";
import { StyledButton } from "./styles";

interface KeyButtonProps {
  children: React.ReactNode;
  onButtonClick: (event: any) => void;
}

const KeyButton = (props: KeyButtonProps) => (
  <Col span={6}>
    <StyledButton className="btn" onClick={props.onButtonClick}>
      {props.children}
    </StyledButton>
  </Col>
);
export default KeyButton;

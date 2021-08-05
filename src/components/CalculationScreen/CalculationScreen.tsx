import React from "react";
import { CalculationWrapper } from "./styles";

interface ICalculationScreenProps {
  children?: React.ReactNode;
}

const CalculationScreen = (props: ICalculationScreenProps) => (
  <CalculationWrapper role="calc-screen">{props.children}</CalculationWrapper>
);
export default CalculationScreen;

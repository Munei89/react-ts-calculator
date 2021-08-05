import React from "react";
import Result from "../Result";
import CalculationScreen from "../CalculationScreen";
import { ScreenWrapper } from "./styles";

interface ScreenProps {
  equation: string;
  result: number;
}

const Screen = (props: ScreenProps) => {
  const { equation, result } = props;
  return (
    <ScreenWrapper>
      <Result>{result}</Result>
      <CalculationScreen>{equation}</CalculationScreen>
    </ScreenWrapper>
  );
};
export default Screen;

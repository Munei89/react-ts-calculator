import React, { useState } from "react";
import KeyPad from "../../components/KeyPad/KeyPad";
import Screen from "../../components/Screen";
import { evaluate } from "mathjs";

import { CalculatorWapper } from "./styles";

const Calculator = () => {
  const [equation, setEquation] = useState<string>("");
  const [result, setResult] = useState<number>(0);

  const onButtonClick = (event: React.ChangeEvent) => {
    let calcEquation = equation;
    const clickedButton = event.target.innerHTML;
    if (clickedButton === "C") return clear();
    else if (clickedButton >= "0" && clickedButton <= "9")
      calcEquation += clickedButton;
    else if (["+", "-", "*", "/", "%"].indexOf(clickedButton) !== -1)
      calcEquation += " " + clickedButton + " ";
    else if (clickedButton === "=") {
      try {
        const evalResult = evaluate(calcEquation);
        const result = Number.isInteger(evalResult)
          ? evalResult
          : evalResult.toFixed(2);
        setResult(result);
      } catch (error) {
        alert("Invalid");
      }
    } else {
      calcEquation = equation.trim();
      calcEquation = equation.substr(0, equation.length - 1);
    }

    setEquation(calcEquation);
  };
  const clear = () => {
    setEquation("");
    setResult(0);
  };

  return (
    <CalculatorWapper>
      <Screen equation={equation} result={result} />
      <KeyPad onButtonClick={onButtonClick} />
    </CalculatorWapper>
  );
};

export default Calculator;

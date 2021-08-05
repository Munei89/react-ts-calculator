import React from "react";
import KeyPadRow from "../KeyPadRow";
import KeyButton from "../Button";
import { KeyPadStyle } from "./styles";

const rows = [
  [7, 8, 9, "+"],
  [4, 5, 6, "-"],
  [1, 2, 3, "*"],
  [0, "/"],
];
const equalSign = "=";
const clear = "C";

interface KeyPadProps {
  onButtonClick: (event: React.ChangeEvent) => void;
}

const KeyPad = (props: KeyPadProps) => {
  const { onButtonClick } = props;
  return (
    <KeyPadStyle>
      {rows.map((row, i) => {
        return (
          <KeyPadRow key={row.toString()}>
            {i === 3 && (
              <KeyButton onButtonClick={onButtonClick}>{clear}</KeyButton>
            )}
            {row.map((n) => (
              <KeyButton onButtonClick={onButtonClick} key={n}>
                {n.toString()}
              </KeyButton>
            ))}
            {i === 3 && (
              <KeyButton onButtonClick={onButtonClick}>{equalSign}</KeyButton>
            )}
          </KeyPadRow>
        );
      })}
    </KeyPadStyle>
  );
};
export default KeyPad;

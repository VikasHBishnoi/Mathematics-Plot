import React from "react";
import Input from "../FormElements/Input/Input";
import EquationCanvas from "../EquationCanvas/EquationCanvasProps";
import { ExpressionInterface } from "../../Interface";
import Button from "../FormElements/Button/Button";

interface ExpressionProps {
  expressionId: string;
  inputValue: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  expression: ExpressionInterface;
  onDelete: () => void;
}
const Expression: React.FC<ExpressionProps> = ({
  expressionId,
  inputValue,
  handleInputChange,
  expression,
  onDelete,
}) => {
  return (
    <div className="expression-container">
      <div className="expression-interaction">
        <Input
          id={expressionId}
          inputValue={inputValue}
          handleInputChange={handleInputChange}
        />
        <Button onClick={onDelete} bgClassName="cross-btn">
          &#10006;
        </Button>
      </div>
      <EquationCanvas expression={expression} />
    </div>
  );
};

export default Expression;

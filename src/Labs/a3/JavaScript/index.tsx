import MapFunction from "./arrays/MapFunction";
import WorkingWithArrays from "./arrays/WorkingWithArrays";
import IfElse from "./conditionals/IfElse";
import TernaryOperator from "./conditionals/TernaryOperator";
import ArrowFunctions from "./functions/ArrowFunctions";
import ES5Functions from "./functions/ES5Functions";
import ImpliedReturn from "./functions/ImpliedReturn";
import Destructing from "./json/Destructing";
import FunctionDestructing from "./functions/FunctionDestructing";
import Spreading from "./json/Spreading";
import BooleanVariables from "./variables/BooleanVariables";
import VariablesAndConstants from "./variables/VariablesAndConstants";
import VariableTypes from "./variables/VariableTypes";
import FunctionParenthesisAndParameters from "./functions/FunctionsParenthesisAndParameters";
import JsonStringify from "./json/JsonStringify";
import TemplateLiterals from "./string/TemplateLiterals";
import House from "./json/House";

function JavaScript() {
  return (
    <div>
      <h3>JavaScript</h3>
      <FunctionDestructing />
      <Destructing />
      <Spreading />
      <House/>
      <TemplateLiterals/>
      <JsonStringify/>
      <MapFunction />
      <WorkingWithArrays />
      <FunctionParenthesisAndParameters />
      <ImpliedReturn />
      <ArrowFunctions />
      <ES5Functions />
      <TernaryOperator />
      <IfElse />
      <BooleanVariables /> 
      <VariableTypes />
      <VariablesAndConstants />
    </div>
  );
}

export default JavaScript;
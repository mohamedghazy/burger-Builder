import React from "react";
import clasess from "./Input.css";
const inputs = props => {
  let inputElement = null;
  const inputClasses = [clasess.InputElement];
  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(clasess.Invalid);
  }
  switch (props.elementtype) {
    case "input":
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementconfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={inputClasses.join(" ")}
          {...props.elementconfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          className={inputClasses.join(" ")}
          value={props.value}
          onChange={props.changed}
        >
          {props.elementconfig.option.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementconfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }
  return (
    <div>
      <label className={clasess.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};
export default inputs;

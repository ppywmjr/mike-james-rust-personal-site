import React, { FunctionComponent } from "react";
import { TextInputProps } from "./types";

const TextInput: FunctionComponent<TextInputProps> = ({ id, name, label }) => {
  if (!id) {
    id = name;
  }
  return (
    <label htmlFor={id} className="block w-full">
      <div className="w-20 my-1">{label}</div>
      <input
        id={id}
        className="border-2 border-mjr_orange w-full sm:w-96 px-2"
        name={name}
      />
    </label>
  );
};

export default TextInput;

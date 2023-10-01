import React, { FunctionComponent } from "react";
import { TextInputProps } from "./types";

const TextInput: FunctionComponent<TextInputProps> = ({
  id,
  name,
  label,
  type,
  register,
  errors,
}) => {
  if (!id) {
    id = name;
  }
  return (
    <label htmlFor={id} className="block w-full">
      <span className="w-20 my-1 block">{label}</span>
      <input
        id={id}
        className="border-2 border-mjr_orange w-full sm:w-96 px-2
        focus:outline-none focus:border-mjr_dark_blue focus:ring-1 focus:ring-mjr_dark_blue
         invalid:border-pink-500  invalid:ring-pink-500
       "
        name={name}
        type={type}
        {...register(name)}
      />
      {errors && (
        <span className="text-mjr_very_dark_orange block mt-2">
          {errors.message as string}
        </span>
      )}
    </label>
  );
};

export default TextInput;

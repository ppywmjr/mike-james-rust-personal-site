import React, { FunctionComponent } from "react";
import { InputProps } from "./types";

const Input: FunctionComponent<InputProps> = ({
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
      <span className="w-full my-1 block">{label}</span>
      <input
        id={id}
        className="border-2 border-mjr_orange w-full sm:w-96 px-2
        focus:outline-none focus:border-mjr_dark_blue focus:ring-1 focus:ring-mjr_dark_blue
         invalid:border-red-800  invalid:ring-red-800
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

export default Input;

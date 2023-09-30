import React, { FunctionComponent } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProps } from "./types";
import Submit from "./submit";

const Form: FunctionComponent<FormProps> = ({
  children,
  action,
  submitText = "Submit form",
  schema,
}) => {
  type FormSchemaType = z.infer<typeof schema>;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
    console.log(data);
    action(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label className="block  w-full" htmlFor="email">
        Email
      </label>
      <input
        className="block  w-full border-2 border-pink my-2"
        type="text"
        id="email"
        {...register("email")}
      />
      {errors.email && (
        <span className="text-red-800 block mt-2">{errors.email?.message as string}</span>
      )}
      <label className="block  w-full" htmlFor="message">
        Message
      </label>
      <input
        className="block w-full border-2 border-pink my-2"
        type="text"
        id="message"
        {...register("message")}
      />
      {errors.message && (
        <span className="text-red-800 block mt-2">
          {errors.message?.message as string}
        </span>
      )}
      {children}
      <Submit disabled={isSubmitting}>{submitText}</Submit>
    </form>
  );
};

export default Form;

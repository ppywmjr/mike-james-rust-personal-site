"use client";

import { useTransition } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import Form from "@components/form";
// import TextInput from "@components/form/text-input/TextInput";
import { action, FormSchemaType, formSchema } from "./action";

export function SampleForm() {
  // const [isPending, startTransition] = useTransition();
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<FormData>();

  // const onSubmit = handleSubmit((data) => {
  //   startTransition(() => {
  //     action(data);
  //   });
  // });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  // const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
  //   console.log(data);
  // };

  return (
    <form onSubmit={handleSubmit(action)}>
      {/* <TextInput name="message" label="Message:" />
      <TextInput name="email" label="Email:" isRequired={true} type="email" /> */}
      <label className="block  w-full" htmlFor="email">
        Email
      </label>
      <input
        className="block  w-full border-2 border-pink my-2"
        type="text"
        id="email"
        {...register("email", { required: true })}
      />
      {errors.email && (
        <span className="text-red-800 block mt-2">{errors.email?.message}</span>
      )}
      <label className="block  w-full" htmlFor="message">
        Message
      </label>
      <input
        className="block w-full border-2 border-pink my-2"
        type="text"
        id="message"
        {...register("message", { required: true })}
      />
      {errors.message && (
        <span className="text-red-800 block mt-2">
          {errors.message?.message}
        </span>
      )}
      <button
        type="submit"
        disabled={isSubmitting}
        className="block bg-mjr_orange hover:bg-mjr_very_dark_orange p-2 my-3 w-40 center"
      >
        Submit
      </button>
    </form>
  );
}

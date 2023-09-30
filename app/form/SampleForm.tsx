"use client";

import { useTransition } from "react";
import { useForm } from "react-hook-form";
import Form from "@components/form";
import TextInput from "@components/form/text-input/TextInput";
import { action, type FormData } from "./action";

export function SampleForm() {
  const [isPending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => {
    startTransition(() => {
      action(data);
    });
  });

  return (
    <Form action={onSubmit}>
      {/* <TextInput name="message" label="Message:" />
      <TextInput name="email" label="Email:" isRequired={true} type="email" /> */}
      <label className="block  w-full" htmlFor="email">
        Name
      </label>
      <input
        className="block  w-full border-2 border-pink my-2"
        type="text"
        id="email"
        {...register("email", { required: true })}
      />
      {errors.email && <span>This field is required</span>}
      <label className="block  w-full" htmlFor="message">
        Description
      </label>
      <input
        className="block w-full border-2 border-pink my-2"
        type="text"
        id="message"
        {...register("message", { required: true })}
      />
      {errors.message && <span>This field is required</span>}
    </Form>
  );
}

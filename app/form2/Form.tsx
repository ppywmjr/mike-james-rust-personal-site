"use client";

import { useTransition } from "react";
import { useForm } from "react-hook-form";

import { action, type FormData } from "./action";

export function Form() {
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
    <form onSubmit={onSubmit}>
      <label className="block  w-full" htmlFor="name">
        Name
      </label>
      <input
        className="block  w-full border-2 border-pink my-2"
        type="text"
        id="name"
        {...register("name", { required: true })}
      />
      {errors.name && <span>This field is required</span>}
      <label className="block  w-full" htmlFor="description">
        Description
      </label>
      <input
        className="block w-full border-2 border-pink my-2"
        type="text"
        id="description"
        {...register("description", { required: true })}
      />
      {errors.description && <span>This field is required</span>}
      <button
        className="block w-full bg-orange-300"
        type="submit"
        disabled={isPending}
      >
        Submit
      </button>
    </form>
  );
}

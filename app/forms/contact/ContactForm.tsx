"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Form from "@components/form";
import TextInput from "@components/form/text-input";
import { action } from "./action";
import { FormSchemaType, formSchema } from "./schema";
import Submit from "@components/form/submit";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    console.log("The data submitted by the browser was", data);
    const serverData = await action(data);
    console.log("The data parsed by the server was", serverData);
  };

  return (
    <Form action={handleSubmit(onSubmit)}>
      <TextInput
        name="message"
        label="Message:"
        register={register}
        errors={errors.message}
      />
      <TextInput
        name="name"
        label="Name:"
        register={register}
        errors={errors.name}
      />
      <TextInput
        name="email"
        label="Email:"
        register={register}
        errors={errors.email}
        type="email"
      />
      <Submit disabled={isSubmitting}>Submit</Submit>
    </Form>
  );
}

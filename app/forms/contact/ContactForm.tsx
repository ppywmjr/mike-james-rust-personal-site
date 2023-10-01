"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Form from "@components/form";
import TextInput from "@components/form/text-input";
import { action } from "./action";
import { FormSchemaType, formSchema } from "./schema";
import Submit from "@components/form/submit";
import { useState } from "react";
import Paragraph from "@components/article/paragraph";
import Button from "@components/button/Button";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  const [submitted, setSubmitted] = useState(false);
  const [serverData, setServerData] = useState({
    name: "",
    message: "",
    email: "",
  });

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    console.log("The data submitted by the browser was", data);
    setServerData(await action(data));
    setSubmitted(true);
    console.log("The data parsed by the server was", serverData);
  };

  return (
    <>
      {!submitted && (
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
      )}
      {submitted && (
        <>
          <Paragraph>{`Thanks for the message! This is the data you sent was:`}</Paragraph>
          {serverData?.message && (
            <Paragraph>{`Message: ${serverData?.message}`}</Paragraph>
          )}
          {serverData?.name && (
            <Paragraph>{`Name: ${serverData?.name}`}</Paragraph>
          )}
          {serverData?.email && (
            <Paragraph>{`Email: ${serverData?.email}`}</Paragraph>
          )}
          <Button
            onClick={() => setSubmitted(false)}
            text="Send another message"
          />
        </>
      )}
    </>
  );
}

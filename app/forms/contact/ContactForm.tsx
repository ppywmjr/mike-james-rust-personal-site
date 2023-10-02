"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Form from "@components/form";
import Input from "@components/form/text-input";
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
    <div className="mb-10">
      {!submitted && (
        <Form action={handleSubmit(onSubmit)}>
          <Input
            name="message"
            label="Message:"
            register={register}
            errors={errors.message}
          />
          <Input
            name="name"
            label="Name:"
            register={register}
            errors={errors.name}
          />
          <Input
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
          <div className="mb-2 bg-mjr_light_green rounded-md w-96 p-5 text-center m-auto text-lg ">
            <Paragraph>{`Thanks for the message! This is the data you sent:`}</Paragraph>
            {serverData?.message && (
              <Paragraph>{`Message: ${serverData?.message}`}</Paragraph>
            )}
            {serverData?.name && (
              <Paragraph>{`Name: ${serverData?.name}`}</Paragraph>
            )}
            {serverData?.email && (
              <Paragraph>{`Email: ${serverData?.email}`}</Paragraph>
            )}
          </div>
          <Button
            onClick={() => setSubmitted(false)}
            text="Send another message"
          />
        </>
      )}
    </div>
  );
}

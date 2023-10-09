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
    message: "",
    email: "",
  });
  const [emailError, setEmailError] = useState(false);

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    try {
      const response = await action(data);
      setServerData({ message: data.message, email: data.email });
      setSubmitted(true);
    } catch (error) {
      console.log(error);
      setEmailError(true);
      setSubmitted(true);
    }
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
            type="multiline"
          />
          <Input
            name="email"
            label="Email:"
            register={register}
            errors={errors.email}
            type="email"
          />
          <Submit disabled={isSubmitting} text="Submit" />
        </Form>
      )}
      {submitted && (
        <>
          <div className="mb-2 bg-mjr_light_green rounded-md max-w-96 p-5 text-center m-auto text-lg ">
            {emailError ? (
              <Paragraph>
                Unfortunately there was an error sending the email. Please, try
                again later.
              </Paragraph>
            ) : (
              <>
                <Paragraph>
                  Thanks for your message!
                </Paragraph>
                {serverData?.message && (
                  <Paragraph>{`Message sent: ${serverData?.message}`}</Paragraph>
                )}
                {serverData?.email ? (
                  <><Paragraph>{`Email: ${serverData?.email}`}</Paragraph>
<Paragraph>I&rsquo;ll get back to you as soon as I can.</Paragraph></>
                ) : (
                  <Paragraph>
                    You didn&rsquo;t submit an email addres so I won&rsquo;t be able to
                    get back to you, but I appreciate the message anyway.
                  </Paragraph>
                )}
              </>
            )}
          </div>
          <Button
            className="m-auto"
            onClick={() => setSubmitted(false)}
            text="Send another message"
          />
        </>
      )}
    </div>
  );
}

"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Form from "@components/form";
import Input from "@components/form/text-input";
import { action } from "./action";
import { FormSchemaType, formSchema } from "./schema";
import Submit from "@components/form/submit";
import { useState } from "react";
import Button from "@components/button/Button";

export function CalculationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  const [submitted, setSubmitted] = useState(false);
  const [serverData, setServerData] = useState({
    faces: undefined,
  });

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    setServerData(await action(data));
    setSubmitted(true);
  };

  return (
    <>
      {!submitted && (
        <Form action={handleSubmit(onSubmit)}>
          <Input
            name="vertices"
            label="The first input."
            register={register}
            errors={errors.vertices}
            type="number"
          />
          <Input
            name="edges"
            label="The second input."
            register={register}
            errors={errors.edges}
            type="number"
          />
          {
            // @ts-expect-error This error was added via Zod, but RHF's type is not aware of it.
            errors?.form?.message && <p>{errors?.form?.message as string}</p>
          }
          <Submit disabled={isSubmitting}>Find out the result</Submit>
        </Form>
      )}
      {submitted && (
        <>
          <p className="mb-2 bg-mjr_light_green rounded-md w-96 p-5 text-center m-auto text-lg ">{`The result is: ${serverData.faces} faces`}</p>
          <Button
            onClick={() => setSubmitted(false)}
            text="Try another calculation"
          />
        </>
      )}
    </>
  );
}

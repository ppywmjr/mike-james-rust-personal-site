"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Form from "@components/form";
import Input from "@components/form/text-input";
import { action } from "./action";
import { FormSchemaType, formSchema } from "./schema";
import Submit from "@components/form/submit";
import { FunctionComponent, useState } from "react";
import Button from "@components/button/Button";
import { EquationGuessProps } from "./types";

export const EquationGuess: FunctionComponent<EquationGuessProps> = ({
  closeForm,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  const [submitted, setSubmitted] = useState(false);
  const [serverData, setServerData] = useState<{
    message: string;
    correct: boolean;
  }>({ message: "", correct: false });
  const [guessNumber, setGuessNumber] = useState(0);

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    const result = await action(data, guessNumber);
    setGuessNumber(guessNumber + 1);
    setServerData(result);
    setSubmitted(true);
  };

  return (
    <div className="mb-4 w-full m-auto">
      {!submitted && (
        <Form
          className="min-h-[150px]"
          action={handleSubmit(onSubmit)}
          error={
            // @ts-expect-error This error was added via Zod, but the React Hook Form type is not aware of it.
            errors?.form?.message
          }
        >
          <Input
            name="equation"
            label="Enter the name of the mathematician who created the equation, the name of the equation, or write out the actual equation."
            register={register}
            errors={errors.equation}
            type="text"
          />
          <Submit
            className="float-right mt-4"
            disabled={isSubmitting}
            text="Guess the equation"
          />
        </Form>
      )}
      {submitted && (
        <>
          <p className="mb-2 bg-mjr_light_green rounded-md p-5 text-center m-auto text-lg ">
            {serverData.message}
          </p>
          <div className="flex justify-between">
            <Button
              importance="secondary"
              onClick={() => {
                setSubmitted(false);
                closeForm();
              }}
              text={
                serverData.correct
                  ? "Enter some more values?"
                  : "Or try another calculation"
              }
            />
            {!serverData.correct && (
              <Button
                className=""
                onClick={() => {
                  setSubmitted(false);
                }}
                text={"Try another guess?"}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

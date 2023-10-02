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
import SubHeading from "@components/article/sub-heading";

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
    edges: undefined,
    vertices: undefined,
  });
  const [resultHistory, setResultHistory] = useState([]);

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    setServerData(await action(data));
    setSubmitted(true);
  };

  return (
    <div className="mb-10 sm:w-80 m-auto">
      {!submitted && (
        <Form
          action={handleSubmit(onSubmit)}
          error={
            // @ts-expect-error This error was added via Zod, but the React Hook Form type is not aware of it.
            errors?.form?.message
          }
        >
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
          <Submit disabled={isSubmitting}>Find out the result</Submit>
        </Form>
      )}
      {submitted && (
        <>
          <p className="mb-2 bg-mjr_light_green rounded-md p-5 text-center m-auto text-lg ">
            {`The result is: ${serverData.faces} faces`}
          </p>
          <Button
            className="m-auto"
            onClick={() => {
              setResultHistory([
                {
                  firstInput: serverData.vertices,
                  secondInput: serverData.edges,
                  faces: serverData.faces,
                },
                ...resultHistory,
              ]);
              setSubmitted(false);
            }}
            text="Try another calculation"
          />
        </>
      )}
      <div>
        {resultHistory.length > 0 && (
          <SubHeading level={2}>Result History</SubHeading>
        )}
        {resultHistory.map((result) => (
          <div
            key={`${serverData.vertices} ${serverData.edges} ${serverData.faces}`}
            className="w-full flex justify-between bg-mjr_light_green rounded-md p-1 px-2 my-2"
          >
            <p className="text-center mx-1">{`First input: ${result.firstInput}`}</p>
            <p className="text-center mx-1">{`Second input: ${result.secondInput}`}</p>
            <p className="text-center mx-1">{`Faces: ${result.faces}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

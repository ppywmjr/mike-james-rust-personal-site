"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Form from "@components/form";
import Input from "@components/form/text-input";
import { action } from "./action";
import { FormSchemaType, formSchema } from "./schema";
import Submit from "@components/form/submit";
import { useEffect, useState } from "react";
import anime from "animejs";
import Button from "@components/button/Button";
import SubHeading from "@components/article/sub-heading";
import EquationGuess from "../equation-guess";

export function CalculationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  const [faces, setFaces] = useState<number>();
  const [resultHistory, setResultHistory] = useState<
    Array<{
      key: number;
      firstInput: number;
      secondInput: number;
      faces: number;
    }>
  >([]);
  const [showCalculationQuestion, setShowCalculationQuestion] = useState(true);
  const [showEquationGuessQuestion, setShowEquationGuessQuestion] =
    useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    const baseAnimationDuration =
      !prefersReducedMotion || prefersReducedMotion.matches ? 0 : 100;
    const guessEquationOffSet =
      !showCalculationQuestion && !showEquationGuessQuestion ? 0 : 384;
    let myTimeline = anime.timeline();
    myTimeline
      .add({
        targets: ".tryAnotherButton",
        right: guessEquationOffSet,
        opacity: 1,
        duration: baseAnimationDuration * 4,
        easing: "easeOutQuint",
        delay: 0,
      })
      .add({
        targets: ".guessEquationButton",
        left: guessEquationOffSet / 2,
        opacity: 1,
        duration: baseAnimationDuration * 3,
        easing: "easeOutElastic(1, 0.8)",
        delay: 1000,
      });
  }, [showCalculationQuestion, showEquationGuessQuestion]);

  const onCalculationSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    const response = await action(data);
    setFaces(response.faces);
    setResultHistory([
      {
        key: resultHistory.length,
        firstInput: response.vertices,
        secondInput: response.edges,
        faces: response.faces,
      },
      ...resultHistory,
    ]);
    setShowCalculationQuestion(false);
  };

  const handleCloseEquationGuessForm = () => {
    setShowEquationGuessQuestion(false);
    setShowCalculationQuestion(true);
  };

  return (
    <div className="mb-10 sm:w-96 m-auto">
      {showCalculationQuestion && (
        <Form
          action={handleSubmit(onCalculationSubmit)}
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
          <Submit disabled={isSubmitting} text="Find out the result" />
        </Form>
      )}
      {!showCalculationQuestion && (
        <>
          <p className="mb-2 bg-mjr_light_green rounded-md p-5 text-center m-auto text-lg ">
            {`The result is: ${faces} face${faces === 1 ? "" : "s"}`}
          </p>
        </>
      )}
      {showEquationGuessQuestion && (
        <EquationGuess closeForm={handleCloseEquationGuessForm} />
      )}
      {!showCalculationQuestion && !showEquationGuessQuestion && (
        <div className="flex justify-between">
          <Button
            className="tryAnotherButton relative right-96 opacity-0"
            onClick={() => {
              setShowEquationGuessQuestion(false);
              setShowCalculationQuestion(true);
            }}
            text="Try another calculation"
            // importance="secondary"
          />
          <Button
            className="guessEquationButton relative left-40 opacity-0"
            onClick={() => {
              setShowEquationGuessQuestion(true);
              setShowCalculationQuestion(false);
            }}
            text="Or try to guess the equation"
          />
        </div>
      )}
      <div>
        {resultHistory.length > 0 && (
          <SubHeading level={2}>Result History</SubHeading>
        )}
        {resultHistory.map((result) => (
          <div
            key={result.key}
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

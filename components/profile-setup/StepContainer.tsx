"use client";
import React from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import Image from "next/image";
import { Button } from "../ui/button";

const typeToComponentMap: Record<string, React.FC> = {
  1: StepOne,
  2: StepTwo,
  3: StepThree,
};

export default function StepContainer() {
  const [step, setStep] = React.useState(1);

  const StepComponent = typeToComponentMap[step];

  return (
    <div>
      <header className="flex items-center gap-2">
        <button
          onClick={() => setStep((prev) => Math.max(prev - 1, 1))}
          disabled={step === 1}
        >
          <Image
            src="/assets/icons/arrow_back.svg"
            alt="arrow back"
            width={20}
            height={20}
          />{" "}
        </button>

        <span className="text-base font-medium">Get Started</span>
      </header>

      <StepProgressContainer step={step} />

      <form action="">
        <StepComponent />

        <div className="fixed bottom-2 left-0 w-full border-t bg-white p-4">
          <Button
            onClick={() =>
              setStep((prev) =>
                Math.min(prev + 1, Object.keys(typeToComponentMap).length),
              )
            }
            disabled={step === Object.keys(typeToComponentMap).length}
            className="w-full rounded-full"
            type="button"
          >
            Continue
          </Button>
        </div>
      </form>
    </div>
  );
}

const StepProgressContainer = ({ step }: { step: number }) => {
  return (
    <div className="mt-8 flex w-full gap-2">
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i + 1}
          className={`h-1 flex-1 ${i < step ? "bg-app-primary" : "bg-slate-300"}`}
        ></div>
      ))}
    </div>
  );
};

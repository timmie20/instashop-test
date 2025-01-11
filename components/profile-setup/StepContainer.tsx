"use client";
import React from "react";
import StepOne from "./StepOne";
import BasicInfo from "./BasicInfo";
import CreateStore from "./CreateStore";
import Image from "next/image";
import { Button } from "../ui/button";
import { useAppContext } from "@/context/AppContext";
import { useRouter } from "next/navigation";

const typeToComponentMap: Record<string, React.FC> = {
  1: StepOne,
  2: BasicInfo,
  3: CreateStore,
};

export default function StepContainer() {
  const [step, setStep] = React.useState(1);
  const { formData } = useAppContext();
  const router = useRouter();

  const StepComponent = typeToComponentMap[step];

  const handleNext = () => {
    if (step >= 3) {
      router.push("/create-product");
    }
    setStep((prev) =>
      Math.min(prev + 1, Object.keys(typeToComponentMap).length),
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("hello");
  };

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

      <form onSubmit={handleSubmit}>
        <StepComponent />

        <footer className="fixed bottom-2 left-0 w-full border-t bg-white p-4">
          <Button
            onClick={handleNext}
            className="w-full rounded-full"
            type="button"
          >
            Continue
          </Button>
        </footer>
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
          className={`h-1 flex-1 rounded-md ${i < step ? "bg-app-primary" : "bg-slate-300"}`}
        ></div>
      ))}
    </div>
  );
};

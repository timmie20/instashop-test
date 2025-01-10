import React from "react";
import { Input } from "../ui/input";

export default function StepOne() {
  return (
    <div className="space-y-4">
      <div className="mt-4 w-[90vw] space-y-4">
        <h1 className="text-balance text-2xl font-medium">
          Enter your phone number or email to get started
        </h1>

        <p className="text-wrap text-sm text-slate-500">
          We will send you a verification code for confirmation
        </p>
      </div>

      <Input placeholder="Enter phone number of email" className="rounded-xl" />
    </div>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useFormData } from "@/hooks/useFormData";
import { useState } from "react";
import Step1 from "../Step1/Step1";
import Step2 from "../Step2/Step2";
import Step3 from "../Step3/Step3";
import Summary from "../Summary/Summary";

export default function MainPage() {
  const [step, setStep] = useState(1);
  const { data, setData } = useFormData();

  const next = (newData: any) => {
    setData(prev => ({ ...prev, ...newData }));
    setStep(prev => prev + 1);
  };

  const prev = () => setStep(prev => prev - 1);

  const submit = () => {
    console.log("Final Submitted Data:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 dark:bg-gray-900 dark:text-white">
      <div className="p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800 w-full max-w-md">
        {step === 1 && <Step1 onNext={next} defaultValues={data} />}
        {step === 2 && <Step2 onNext={next} onPrev={prev} defaultValues={data} />}
        {step === 3 && <Step3 onNext={next} onPrev={prev} defaultValues={data} />}
        {step === 4 && <Summary data={data} onPrev={prev} onSubmit={submit} />}
      </div>
    </div>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Step1Schema } from "../../../schemas/formSchemas";
import { z } from "zod";

type Props = {
  onNext: (data: any) => void;
  defaultValues?: any;
};

export default function Step1({ onNext, defaultValues }: Props) {
  const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof Step1Schema>>({
    resolver: zodResolver(Step1Schema),
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onNext)} className="space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Step 1: Personal Information</h2>
      <div>
        <input 
          {...register("fullName")} 
          placeholder="Full Name" 
          className="input w-full p-2 border rounded" 
        />
        {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
      </div>
      <div>
        <input 
          {...register("email")} 
          type="email"
          placeholder="Email" 
          className="input w-full p-2 border rounded" 
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>
      <div>
        <input 
          {...register("phone")} 
          placeholder="Phone Number" 
          type="number"
          className="input w-full p-2 border rounded" 
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
      </div>
      <div className="flex justify-end">
        <button type="submit" className="btn bg-blue-600 text-white px-4 py-2 rounded cursor-pointer">Next</button>
      </div>
    </form>
  );
}

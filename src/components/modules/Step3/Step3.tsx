/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Step3Schema } from "../../../schemas/formSchemas";
import { z } from "zod";

type Props = {
  onNext: (data: any) => void;
  onPrev: () => void;
  defaultValues?: any;
};

export default function Step3({ onNext, onPrev, defaultValues }: Props) {
  const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof Step3Schema>>({
    resolver: zodResolver(Step3Schema),
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onNext)} className="space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Step 3: Account Setup</h2>
      <div>
        <input {...register("username")} placeholder="Username" type="text" className="input w-full p-2 border rounded" />
        {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
      </div>
      <div>
        <input {...register("password")} type="password" placeholder="Password" className="input w-full p-2 border rounded" />
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
      </div>
      <div>
        <input {...register("confirmPassword")} type="password" placeholder="Confirm Password" className="input w-full p-2 border rounded" />
        {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
      </div>
      <div className="flex justify-between">
        <button type="button" onClick={onPrev} className="btn bg-gray-500 text-white px-4 py-2 rounded cursor-pointer">Previous</button>
        <button type="submit" className="btn bg-blue-600 text-white px-4 py-2 rounded cursor-pointer">Next</button>
      </div>
    </form>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Step2Schema } from "../../../schemas/formSchemas";
import { z } from "zod";

type Props = {
  onNext: (data: any) => void;
  onPrev: () => void;
  defaultValues?: any;
};

export default function Step2({ onNext, onPrev, defaultValues }: Props) {
  const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof Step2Schema>>({
    resolver: zodResolver(Step2Schema),
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onNext)} className="space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Step 2: Address Details</h2>
      <div>
        <input {...register("street")} placeholder="Street Address" className="input w-full p-2 border rounded" />
        {errors.street && <p className="text-red-500 text-sm">{errors.street.message}</p>}
      </div>
      <div>
        <input {...register("city")} placeholder="City" className="input w-full p-2 border rounded" />
        {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
      </div>
      <div>
        <input {...register("zip")} placeholder="Zip Code" className="input w-full p-2 border rounded" />
        {errors.zip && <p className="text-red-500 text-sm">{errors.zip.message}</p>}
      </div>
      <div className="flex justify-between">
        <button type="button" onClick={onPrev} className="btn bg-gray-500 text-white px-4 py-2 rounded cursor-pointer">Previous</button>
        <button type="submit" className="btn bg-blue-600 text-white px-4 py-2 rounded cursor-pointer">Next</button>
      </div>
    </form>
  );
}

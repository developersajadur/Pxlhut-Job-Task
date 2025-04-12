/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

type Props = {
  data: any;
  onPrev: () => void;
  onSubmit: () => void;
};

export default function Summary({ data, onPrev, onSubmit }: Props) {

  const mutation:any = useMutation({
    mutationFn: (data: any) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const isSuccess = true;
          if (isSuccess) {
            resolve(data);
          } else {
            reject(new Error("Submission failed"));
          }
        }, 1000);
      });
    },
    onError: (error: any) => {
      toast.error(`Error: ${error.message}`);
    },
    onSuccess: () => {
      toast.success("Form submitted successfully!");
      onSubmit(); 
    },
  });

  const handleSubmit = () => {
    mutation.mutate(data); 
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Final Step: Review Your Information</h2>
      <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
        <p><strong>Username:</strong> {data.username}</p>
        <p><strong>Full Name:</strong> {data.fullName}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Phone:</strong> {data.phone}</p>
        <p><strong>Street:</strong> {data.street}</p>
        <p><strong>City:</strong> {data.city}</p>
        <p><strong>Zip Code:</strong> {data.zip}</p>
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={onPrev}
          className="btn bg-gray-500 text-white px-4 py-2 rounded cursor-pointer"
        >
          Previous
        </button>
        <button
          onClick={handleSubmit}
          className="btn bg-green-600 text-white px-4 py-2 rounded cursor-pointer"
          disabled={mutation.isLoading} 
        >
          {mutation.isLoading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </div>
  );
}

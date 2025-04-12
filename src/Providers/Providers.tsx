"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";

const queryClient = new QueryClient();
const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Toaster richColors position="top-right" />
        {children}
      </QueryClientProvider>
    </div>
  );
};

export default Providers;

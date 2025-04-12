import { useState } from 'react';

export interface FormData {
  fullName?: string;
  email?: string;
  phone?: string;
  street?: string;
  city?: string;
  zip?: string;
  username?: string;
  password?: string;
}

export function useFormData() {
  const [data, setData] = useState<FormData>({});
  return { data, setData };
}

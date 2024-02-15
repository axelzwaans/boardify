"use client";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

export const FormDelete = () => {
  const { pending } = useFormStatus();

  return (
    <div>
      <Button disabled={pending} type="submit" variant="destructive" size="sm">
        Delete
      </Button>
    </div>
  );
};

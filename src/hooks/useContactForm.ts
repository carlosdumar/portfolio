import { useForm } from "react-hook-form";
import { contactSchema, type ContactForm } from "../lib/contactSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { sendContactMessage } from "../lib/contactApi";
import { useEffect, useRef, useState } from "react";

export function useContactForm() {
  const [submitted, setSubmitted] = useState<ContactForm | null>(null);
  const [cooldown, setCooldown] = useState(false);
  const cooldownTimer = useRef<ReturnType<typeof setTimeout>>(null);

  const { register, handleSubmit, reset, formState } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const mutation = useMutation({
    mutationFn: sendContactMessage,
    onSuccess: (_, variables) => {
      setSubmitted(variables);
      reset();
      setCooldown(true);
      if (cooldownTimer.current) clearTimeout(cooldownTimer.current);
      cooldownTimer.current = setTimeout(() => setCooldown(false), 60_000);
    },
  });

  useEffect(() => {
    return () => {
        if (cooldownTimer.current) clearTimeout(cooldownTimer.current)
    }
  }, [])

  const handleReset = () => {
    setSubmitted(null);
    mutation.reset();
  };

  return {
    register,
    handleSubmit,
    reset,
    formState,
    mutation,
    submitted,
    cooldown,
    handleReset,
  };
}

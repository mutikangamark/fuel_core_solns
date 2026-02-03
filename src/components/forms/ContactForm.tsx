"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormLabel,
  FormInput,
  FormTextarea,
} from "@/components/ui/form";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Thank you! We'll be in touch soon.", {
          description: "Your message has been sent successfully.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        // Show validation errors or generic error
        if (response.status === 400) {
          toast.error("Please check your form", {
            description: "Make sure all fields are filled correctly.",
          });
        } else {
          toast.error("Failed to send message", {
            description: "Please try again or contact us directly.",
          });
        }
      }
    } catch {
      toast.error("An error occurred", {
        description: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormField>
        <FormLabel htmlFor="name">Name</FormLabel>
        <FormInput id="name" name="name" placeholder="Your name" required />
      </FormField>
      <FormField>
        <FormLabel htmlFor="email">Email</FormLabel>
        <FormInput
          id="email"
          name="email"
          type="email"
          placeholder="your@email.com"
          required
        />
      </FormField>
      <FormField>
        <FormLabel htmlFor="phone">Phone (optional)</FormLabel>
        <FormInput
          id="phone"
          name="phone"
          type="tel"
          placeholder="Your phone number"
        />
      </FormField>
      <FormField>
        <FormLabel htmlFor="message">Message</FormLabel>
        <FormTextarea
          id="message"
          name="message"
          placeholder="How can we help you?"
          rows={5}
          required
        />
      </FormField>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </Form>
  );
}

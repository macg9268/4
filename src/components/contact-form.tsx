"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { handleContactForm } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

interface ContactFormProps {
  variant?: "default" | "hero";
}

export function ContactForm({ variant = "default" }: ContactFormProps) {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = await handleContactForm(values);
    if (result.success) {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll be in touch shortly.",
      });
      form.reset();
    } else {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: result.message || "There was a problem with your request.",
      });
    }
  }

  const isHero = variant === "hero";

  return (
    <div className={cn(!isHero && "rounded-lg border bg-card text-card-foreground shadow-sm w-full")}>
      <div className={cn("flex flex-col space-y-1.5 p-6", { "p-0": isHero })}>
        <h2 className={cn("font-headline text-2xl font-semibold leading-none tracking-tight", { "text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animated-text-gradient text-primary-foreground": isHero })}>
          {isHero ? "Power Your Future with 4Cloud" : "Contact Us"}
        </h2>
        <p className={cn("text-sm text-muted-foreground", { "mt-6 text-lg leading-8 text-primary-foreground/90 md:text-xl": isHero })}>
          {isHero ? "Reliable, scalable, and secure cloud solutions designed to accelerate your innovation and growth." : "Fill in the form below to send us a message."}
        </p>
      </div>
      <div className={cn("p-6 pt-0", { "p-0": isHero })}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn({ "text-primary-foreground": isHero })}>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn({ "text-primary-foreground": isHero })}>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="john.doe@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn({ "text-primary-foreground": isHero })}>Your Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="How can we help you?" className="min-h-[100px]" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
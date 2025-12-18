"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { DialogProps } from "@radix-ui/react-dialog";

import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useTeamSpecs } from "@/stores/useTeamSpecs";
import { useState } from "react";
import { PhoneInput } from "../custom/PhoneInput";
import { Textarea } from "../ui/textarea";

const emailjsOptions = {
  publicKey: "YOUR_PUBLIC_KEY",
  // Do not allow headless browsers
  blockHeadless: true,
  blockList: {
    // Block the suspended emails
    list: ["foo@emailjs.com", "bar@emailjs.com"],
    // The variable contains the email address
    watchVariable: "userEmail",
  },
  limitRate: {
    // Set the limit rate for the application
    id: "app",
    // Allow 1 request per 10s
    throttle: 10000,
  },
};

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  company: z.string().min(2, {
    message: "Company must be at least 2 characters.",
  }),
  email: z.email(),
  phone: z.string(),
  message: z.string(),
});

type SendMessageFormProps = DialogProps & {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export function SendMessageForm({ open, onOpenChange }: SendMessageFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { teamSize, timeFrame, techStacks } = useTeamSpecs();
  emailjs.init(emailjsOptions);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    },
  });
  console.log(process.env.NEXT_PUBLIC_SERVICE_ID);
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // This will be type-safe and validated.
    const templateParams = {
      ...values,
      teamSize,
      timeFrame,
      techStacks: techStacks.join(", "),
    };
    console.log({ templateParams });
    setIsLoading(true);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_TEMPLATE_ID ?? "",
        templateParams,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        },
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setIsLoading(false);
          form.reset();
          onOpenChange?.(false);
          toast.success("Message sent successfully!", {
            description: "We'll get back to you as soon as possible.",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsLoading(false);
          toast.error("Failed to send message", {
            description: "Please try again later.",
          });
        },
      );
  }

  return (
    <Dialog {...{ open, onOpenChange }}>
      <DialogContent className="sm:max-w-[525px] bg-[#000102] border-primary/30 border-2 text-white py-12">
        <DialogTitle className="text-5xl mb-6">We&apos;re just a message away!</DialogTitle>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name" {...field} className="text-white" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter company name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="col-span-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-2">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        {/* <Input placeholder="Enter phone number" {...field} /> */}
                        <PhoneInput
                          defaultCountry="US"
                          className="bg-primary/20 h-12 justify-center items-center rounded-full"
                          onChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-2">
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        {/* <Input placeholder="Enter phone number" {...field} /> */}
                        <Textarea placeholder="Tell us your story..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <Button disabled={isLoading} type="submit" className="w-full">
              Send a message
            </Button>
          </form>
        </Form>
        {/* <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="submit">Save changes</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}

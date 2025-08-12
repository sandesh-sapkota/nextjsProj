"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TypeOf } from "zod/v3";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Invalid email address"),
  service: z.enum(
    ["webdev", "appdev", "aiml", "marketing"],
    "Select a project type"
  ),
  budget: z.enum(
    ["budget1", "budget2", "budget3", "budget4"],
    "Select a budget"
  ),
  message: z.string().min(5, "Message is required"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      service: "aiml",
      budget: "budget3",
      message: "",
    },
  });

  function onSubmit(data: FormData) {
    console.log(data);
    window.alert("Your message is submitted");
    form.reset();
  }

  return (
    <div className="flex justify-center mt-5">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-[28px] w-[565px]">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="space-y-[15px]">
              <FormLabel className={cn("font-poppins font-[400] text-[14px]")}>Name</FormLabel>
              <FormControl>
                <Input className="bg-[#F7F7F7] h-[46px] rounded-none" placeholder="Your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="space-y-[15px]">
              <FormLabel className={cn("font-poppins font-[400] text-[14px]")}>Email</FormLabel>
              <FormControl>
                <Input className="bg-[#F7F7F7] h-[46px] rounded-none" type="email" placeholder="Your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem className="space-y-[15px]">
              <FormLabel className={cn("font-poppins font-[400] text-[14px]")}>What service are you interested in</FormLabel>
              <Select onValueChange={field.onChange} value={field.value} >
                <FormControl>
                  <SelectTrigger className={cn("w-full bg-[#F7F7F7] rounded-none !h-[56px] ")}>
                    <SelectValue placeholder="Select project type"  />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="webdev">Web Development</SelectItem>
                  <SelectItem value="appdev">App Development</SelectItem>
                  <SelectItem value="aiml">AI/ML</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="budget"
          render={({ field }) => (
            <FormItem className="space-y-[15px]">
              <FormLabel className={cn("font-poppins font-[400] text-[14px]")}>Budget</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <SelectTrigger className="w-full bg-[#F7F7F7] rounded-none !h-[56px] ">
                    <SelectValue  placeholder="Select project budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="budget1">Rs.10000</SelectItem>
                    <SelectItem value="budget2">Rs.20000</SelectItem>
                    <SelectItem value="budget3">Rs.30000</SelectItem>
                    <SelectItem value="budget4">Rs.40000</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="space-y-[15px]">
              <FormLabel className={cn("font-poppins font-[400] text-[14px] ")}>Message</FormLabel>
              <FormControl>
                <Textarea className="h-[160px] bg-[#F7F7F7] rounded-none" placeholder="Write your message here..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button  type="submit" className="w-full font-poppins font-[500] text-[20px] bg-[#000000] h-[56px] mb-[52px] rounded-none">
          Submit
        </Button>

      </form>
    </Form>
    </div>
  );
}

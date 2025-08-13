"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Image from "next/image";
import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Import images
import sofaPic from "./images/sofaPic.png";
import google from "./images/Google.png";
import facebook from "./images/Facebook.png";
import instagram from "./images/Instagram.png";
import twitter from "./images/Twitter.png";

// Zod schema
const formSchema = z.object({
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function LoginPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div className="flex min-h-screen">
      {/* Left side image */}
      <div className="hidden md:block w-1/2">
        <Image
          src={sofaPic}
          alt="Sofa"
          className="w-full h-screen object-cover"
        />
      </div>

      {/* Right side form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-6">
          <h1 className="text-4xl font-bold">Login</h1>
          <p className="text-gray-600">Login to your account in a few seconds</p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Email Address" {...field} className="h-12" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Password"
                        {...field}
                        className="h-12"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Checkbox id="remember" className="w-5 h-5 data-[state=checked]:bg-[#7754F6] data-[state=checked]:border-[#7754F6]" />
                  <label htmlFor="remember" className="text-gray-600 text-sm">
                    Keep me logged in
                  </label>
                </div>
                <Link href="/" className="text-blue-600 text-sm hover:underline">
                  Forgot password?
                </Link>
              </div>

              <Button type="submit" className="w-full h-12 bg-[#7754F6]">
                Login
              </Button>

              <p className="text-sm text-gray-600 text-center">
                Don’t have an account?{" "}
                <Link href="/" className="text-blue-600 font-medium hover:underline">
                  Sign up
                </Link>
              </p>
            </form>
          </Form>

          {/* Divider */}
          <div className="flex items-center gap-2">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-gray-500 text-sm">Or continue with</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Social login */}
          <div className="flex justify-center items-center gap-4">
            <Image src={google} alt="Google" width={40} height={40} />
            <Image src={facebook} alt="Facebook" width={40} height={40} />
            <Image src={instagram} alt="Instagram" width={40} height={40} />
            <Image src={twitter} alt="Twitter" width={40} height={40} />
          </div>
        </div>
      </div>
    </div>
  );
}

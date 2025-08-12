"use client";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <main className="w-full mx-auto max-h-full">
      <header className="flex max-w-[1266px] items-center justify-between mt-[42px] ml-[64px]">
        <h1 className="font-bold text-[40px]">Beebs.</h1>
        <nav className="flex gap-[120px]">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">About</a>
          <a href="#">Portfolio</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <section className="max-w-[1238px] mt-[112px] ml-[93px] max-h-[725px] flex justify-center items-center">
        <div className="left max-w-[538px] flex flex-col gap-[54px]">
          <div>
            <p className="font-bold text-[64px]">Let's Talk</p>
            <p className="text-[20px]">
              Have some big idea or brand to develop and need help? Then reach
              out we'd love to hear about your project and provide help
            </p>
          </div>
          <div className="flex flex-col gap-[20px]">
            <p className="font-bold text-[32px]">Email</p>
            <p>beebs@gmail.com</p>
          </div>
          <div className="flex flex-col gap-[20px]">
            <p className="font-bold text-[32px]">Socials</p>
            <a className="underline" href="#">
              Instagram
            </a>
            <a className="underline" href="#">
              Twitter
            </a>
            <a className="underline" href="#">
              Facebook
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-[565px] mx-auto p-4 space-y-6"
        >
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">
              Name
            </label>
            <Input
              id="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="service" className="block mb-1 font-medium">
              What service are you interested in
            </label>
            <Select
              onValueChange={(value) => handleChange("service", value)}
            >
              <SelectTrigger id="service" className="w-full">
                <SelectValue placeholder="Select project type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="web">Web Development</SelectItem>
                <SelectItem value="mobile">Mobile App</SelectItem>
                <SelectItem value="design">Design</SelectItem>
                <SelectItem value="seo">SEO</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label htmlFor="budget" className="block mb-1 font-medium">
              Budget
            </label>
            <Select
              onValueChange={(value) => handleChange("budget", value)}
            >
              <SelectTrigger id="budget" className="w-full">
                <SelectValue placeholder="Select project budget" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="under-1k">Under $1,000</SelectItem>
                <SelectItem value="1k-5k">$1,000 - $5,000</SelectItem>
                <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                <SelectItem value="above-10k">Above $10,000</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 font-medium">
              Message
            </label>
            <Textarea
              id="message"
              placeholder="Your message"
              className="resize-none"
              rows={5}
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
            />
          </div>

          <Button type="submit" className="w-full bg-black text-white">
            Submit
          </Button>
        </form>
      </section>
    </main>
  );
};

export default Page;

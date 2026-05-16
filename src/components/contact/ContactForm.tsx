"use client";

import Image from "next/image";
import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="relative mx-auto flex h-full min-h-0 w-full container flex-col overflow-hidden rounded-3xl bg-card mt-10">
      <div className="flex min-h-0 flex-1 flex-col md:flex-row">
        {/* Left panel — bg-banner.png */}
        <div className="relative flex min-h-[min(22vh,140px)] w-full shrink-0 flex-col justify-center overflow-hidden p-6 md:min-h-0 md:h-full md:w-[42%] md:p-10 lg:p-12">
          <Image
            src="/assets/bg-banner.png"
            alt=""
            fill
            className="object-cover object-center rounded-3xl"
            priority
            sizes="(max-width: 768px) 100vw, 42vw"
          />
          <div
            className="absolute inset-0"
            aria-hidden
          />
          <div className="relative z-10 max-w-md">
            <h2 className="text-2xl font-bold leading-snug text-white md:text-3xl lg:text-4xl">
              Contact Us
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/90 md:text-base">
              Have questions or need assistance? Our team is here to help you
              get the most out of Zealth OS with confidence.
            </p>
          </div>
        </div>

        {/* Right panel — form */}
        <div className="flex min-h-0 flex-1 flex-col justify-center overflow-hidden px-5 py-5 md:px-10 md:py-6 lg:px-16">
          {submitted ? (
            <div className="flex flex-col items-center justify-center gap-4 py-6 text-center">
              <div className="flex size-16 items-center justify-center rounded-full bg-green-100">
                <Send className="size-7 text-green-600" aria-hidden />
              </div>
              <h3 className="text-xl font-bold text-foreground">Message Sent!</h3>
              <p className="max-w-xs text-sm text-black">
                Thank you for reaching out. We&apos;ll get back to you within 24
                hours.
              </p>
              <Button
                variant="outline"
                className="mt-2"
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    fullName: "",
                    email: "",
                    phone: "",
                    message: "",
                  });
                }}
              >
                Send another message
              </Button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto w-full max-w-xl space-y-4 md:max-w-2xl md:space-y-5"
            >
              <div className="space-y-5">
                <Label htmlFor="fullName" className="text-sm font-medium text-black">
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  required
                  className="h-11 rounded-xl border-0 bg-[#EBEBEB] px-4 shadow-none focus-visible:border-primary focus-visible:ring-primary/30"
                />
              </div>

              <div className="space-y-5">
                <Label htmlFor="email" className="text-sm font-medium text-black">
                  Your Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="h-11 rounded-xl border-0 bg-[#EBEBEB] px-4 shadow-none focus-visible:border-primary focus-visible:ring-primary/30"
                />
              </div>

              <div className="space-y-5">
                <Label htmlFor="phone" className="text-sm font-medium text-black">
                  Contact Number
                </Label>
                <div className="flex gap-2">
                  <div
                    className="flex h-11 min-w-[96px] shrink-0 items-center gap-2 rounded-xl bg-[#EBEBEB] px-3"
                    aria-label="Country code Australia"
                  >
                    <span className="text-base leading-none" aria-hidden>
                      🇦🇺
                    </span>
                    <span className="text-sm text-muted-foreground">+61</span>
                  </div>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="400 000 000"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="h-11 flex-1 rounded-xl border-0 bg-[#EBEBEB] px-4 shadow-none focus-visible:border-primary focus-visible:ring-primary/30"
                  />
                </div>
              </div>

              <div className="space-y-5">
                <Label htmlFor="message" className="text-sm font-medium text-black">
                  Message Details
                </Label>
                <Textarea
                  id="message"
                  placeholder="Enter your details"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={10}
                  className="field-sizing-fixed min-h-20  resize-none rounded-xl border-0 bg-[#EBEBEB] px-4 py-2.5 text-base shadow-none focus-visible:border-primary focus-visible:ring-primary/30 md:min-h-24"
                />
              </div>

            <div className="flex justify-end mt-10" >
            <Button
                type="submit"
                disabled={loading}
                className="h-12 w-full rounded-xl bg-primary text-base font-semibold text-primary-foreground hover:bg-primary/90"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="size-4 animate-spin"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send"
                )}
              </Button>
            </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

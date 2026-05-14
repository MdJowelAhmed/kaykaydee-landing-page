"use client";

import { useState } from "react";
import { Phone, Send, Mail, MapPin } from "lucide-react";
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
    <div className="overflow-hidden rounded-3xl border border-border/60 bg-card shadow-xl">
      <div className="flex flex-col md:flex-row">
        {/* Left panel */}
        <div className="gradient-hero md:w-2/5 p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug">
              Contact Us
            </h2>
            <p className="mt-3 text-white/90 text-sm leading-relaxed">
              Have questions or need assistance? Our team is here to help you
              with anything you need.
            </p>
          </div>

          <div className="mt-10 space-y-5">
            <div className="flex items-center gap-3 text-white/90">
              <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                <Phone className="h-4 w-4 text-white" aria-hidden />
              </div>
              <a href="tel:+61400000000" className="text-sm underline-offset-2 hover:underline">
                +61 400 000 000
              </a>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                <Mail className="h-4 w-4 text-white" aria-hidden />
              </div>
              <a
                href="mailto:hello@zealthread.com.au"
                className="text-sm underline-offset-2 hover:underline break-all"
              >
                hello@zealthread.com.au
              </a>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                <MapPin className="h-4 w-4 text-white" aria-hidden />
              </div>
              <span className="text-sm">Sydney, NSW, Australia</span>
            </div>
          </div>

          <div
            className="pointer-events-none absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white/5 -translate-x-1/2 translate-y-1/2"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute top-1/2 left-1/3 w-20 h-20 rounded-full bg-white/5"
            aria-hidden
          />
        </div>

        {/* Right panel - Form */}
        <div className="flex-1 p-8 md:p-10">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-10">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <Send className="h-7 w-7 text-green-600" aria-hidden />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Message Sent!
              </h3>
              <p className="text-gray-500 text-sm max-w-xs">
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
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1.5">
                <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">
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
                  className="rounded-xl border-gray-200 focus:border-purple-400 h-11"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
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
                  className="rounded-xl border-gray-200 focus:border-purple-400 h-11"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                  Contact Number
                </Label>
                <div className="flex gap-2">
                  <div
                    className="flex h-11 min-w-[90px] items-center gap-1.5 rounded-xl border border-border/60 bg-background px-3"
                    aria-label="Country code Australia"
                  >
                    <span className="text-base" aria-hidden>
                      🇦🇺
                    </span>
                    <span className="text-sm text-gray-600">+61</span>
                  </div>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="400 000 000"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="flex-1 rounded-xl border-gray-200 focus:border-purple-400 h-11"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="message" className="text-sm font-medium text-gray-700">
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
                  rows={4}
                  className="rounded-xl border-gray-200 focus:border-purple-400 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full gradient-button text-white rounded-xl h-12 font-semibold text-base hover:opacity-90 transition-opacity"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
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
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

const features = [
  "Scheduling",
  "Manual notes",
  "Limited templates",
  "Patient portal",
  "Patient invoicing & payments",
  "Web + mobile access",
];

const plans = [
  {
    name: "Free Trial",
    monthlyPrice: 0,
    annualPrice: 0,
    period: "/ 14 Day",
    annualPeriod: "/ 14 Day",
    featured: false,
  },
  {
    name: "Basic",
    monthlyPrice: 50,
    annualPrice: 40,
    period: "/ month",
    annualPeriod: "/ month",
    featured: false,
  },
  {
    name: "Advanced",
    monthlyPrice: 100,
    annualPrice: 80,
    period: "/ month",
    annualPeriod: "/ month",
    featured: true,
  },
  {
    name: "Premium",
    monthlyPrice: 200,
    annualPrice: 160,
    period: "/ month",
    annualPeriod: "/ month",
    featured: false,
  },
];

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="bg-background py-16 md:py-24" id="pricing">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-3 text-gray-600 text-base md:text-lg">
            Choose the perfect plan for your clinic. Upgrade or downgrade
            anytime.
          </p>

          {/* Toggle */}
          <div
            className="mt-6 flex items-center justify-center gap-3"
            role="group"
            aria-labelledby="billing-period-label"
          >
            <span id="billing-period-label" className="sr-only">
              Billing period
            </span>
            <span
              className={cn(
                "text-sm font-medium",
                !isAnnual ? "text-gray-900" : "text-gray-500"
              )}
            >
              Monthly
            </span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              className="data-[state=checked]:bg-purple-600"
              aria-label="Toggle annual billing. When on, prices show the annual discount."
            />
            <span
              className={cn(
                "text-sm font-medium",
                isAnnual ? "text-gray-900" : "text-gray-500"
              )}
            >
              Annual
            </span>
            {isAnnual && (
              <span className="text-xs bg-green-100 text-green-700 font-medium px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:shadow-md pb-24",
                plan.featured
                  ? "border-purple-500 shadow-purple-100 shadow-lg"
                  : "border-gray-100"
              )}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="gradient-bg text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-2xl font-bold text-gray-900">
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {isAnnual ? plan.annualPeriod : plan.period}
                    </span>
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "default" }),
                  "w-full rounded-lg font-medium mb-5 gradient-btn text-white hover:opacity-90 border-0 justify-center h-9"
                )}
              >
                Take Subscription
              </Link>

              <div>
                <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-4">
                  Key features
                </p>
                <ul className="space-y-3">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-teal-600 shrink-0" aria-hidden />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

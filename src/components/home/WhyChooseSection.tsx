import Link from "next/link";
import { ShieldCheck, Clock, TrendingUp, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const reasons = [
  {
    icon: ShieldCheck,
    color: "bg-pink-100 text-pink-600",
    title: "Australian Compliant",
    description:
      "Built for Australian healthcare standards. DAIC, Privacy Act 1988, and My Health Records compliant.",
  },
  {
    icon: Clock,
    color: "bg-green-100 text-green-600",
    title: "Save Time",
    description:
      "AI-powered tools save practitioners on average of 2 hours per day on documentation.",
  },
  {
    icon: TrendingUp,
    color: "bg-blue-100 text-blue-600",
    title: "Grow Your Practice",
    description:
      "Automated workflows and patient portal increase capacity by 30% without extra staff.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-16 md:py-24" id="features">
      <div className="max-w-7xl mx-auto ">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose Zealth OS?
          </h2>
          <p className="mt-3 text-gray-600 text-base md:text-lg">
            Where Innovation Meets Wellness.
          </p>
          <div className="mt-6">
            <Link
              href="/about"
              className={cn(
                buttonVariants({ size: "default" }),
                "bg-accent text-white rounded-md px-6 py-3 h-12 font-medium hover:opacity-90 transition-opacity border-0 inline-flex items-center"
              )}
            >
              About Us
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-40">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center  text-center"
              >
                <div
                  className={`w-14 h-14 rounded-full ${reason.color} flex items-center justify-center mb-4`}
                >
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowRight, CheckCircle2, Users } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden "
      style={{
        backgroundImage: "url('/assets/bg-banner3.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background decorative elements */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-300/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-500/10 blur-[80px]" />
      </div> */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-4xl mx-auto">
          All in One
          <br />
          Allied Health Platform
        </h1>
        <p className="mt-6 text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
          Streamline clinical documentation, scheduling, patient engagement, and
          payments. AI-powered tools save you hours every day.
        </p>

        {/* Trust badge */}
        <div className="mt-8 flex items-center justify-center gap-2">
          <div className="flex -space-x-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-300 to-purple-600 flex items-center justify-center"
                aria-hidden
              >
                <Users className="h-5 w-5 text-white" aria-hidden />
              </div>
            ))}

            {/* Plus Icon */}
            <div
              className="w-9 h-9 rounded-full  bg-white/10 backdrop-blur-sm flex items-center justify-center"
              aria-hidden
            >
              <span className="text-white  text-xl">+</span>
            </div>
          </div>

          <span className="text-white/90 text-sm">
            Trusted by 80+ Allied Health Clinics in Australia
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className={cn(
              // buttonVariants({ size: "lg" }),
              "bg-accent text-white  flex items-center justify-center px-5 py-3 h-auto text-base rounded-md shadow-lg transition-all "
            )}
          >
            Start Free 14-Day Trial
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
          </Link>
          <Link
            href="/#pricing"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "border-white/50 bg-white text-accent  px-5 py-3 h-auto text-base rounded-md backdrop-blur-sm transition-all"
            )}
          >
            Take Subscription
          </Link>
        </div>

        {/* Trust signals */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 ">
          {[
            "No credit card required",
            "Cancel Anytime",
            "Australian Healthcare",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-1.5 text-black text-sm"
            >
              <CheckCircle2 className="h-3.5 w-3.5 shrink-0" aria-hidden />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Wave bottom */}
      {/* <div className="absolute bottom-0 left-0 right-0" aria-hidden>
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-20"
          role="presentation"
        >
          <path
            d="M0 80H1440V40C1200 80 960 0 720 20C480 40 240 80 0 40V80Z"
            fill="white"
          />
        </svg>
      </div> */}
    </section>
  );
}

import Link from "next/link";
import { Apple, PlayCircle } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const storeButtonClass =
  "bg-black hover:bg-gray-800 text-white gap-2 px-5 py-5 h-auto rounded-xl border border-white/20 justify-start min-h-[44px]";

export default function AppSection() {
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gray-900 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 gradient-hero opacity-90" aria-hidden />

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 p-8 md:p-12">
            <div className="flex-1 text-white max-w-lg">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                Dokter For You App: Organize your health anywhere.
              </h2>
              <p className="mt-4 text-white/90 text-sm md:text-base leading-relaxed">
                The dokter for you app is available for android and iOS. Thanks
                to its new, clear, and user-friendly layout, you can navigate
                effortlessly and find what you&apos;re looking for faster,
                discreet service, no waiting times, and delivery right to your
                home.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="https://apps.apple.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download Zealth OS on the App Store (opens in a new tab)"
                  className={cn(buttonVariants({ variant: "default" }), storeButtonClass)}
                >
                  <Apple className="h-5 w-5 shrink-0" aria-hidden />
                  <div className="text-left leading-tight">
                    <p className="text-[10px] text-white/80">Download on the</p>
                    <p className="text-sm font-semibold">App Store</p>
                  </div>
                </Link>
                <Link
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get Zealth OS on Google Play (opens in a new tab)"
                  className={cn(buttonVariants({ variant: "default" }), storeButtonClass)}
                >
                  <PlayCircle className="h-5 w-5 text-green-400 shrink-0" aria-hidden />
                  <div className="text-left leading-tight">
                    <p className="text-[10px] text-white/80">Download on the</p>
                    <p className="text-sm font-semibold">Google Play</p>
                  </div>
                </Link>
              </div>
            </div>

            <div
              className="flex-shrink-0 flex items-end justify-center gap-4 md:gap-6"
              aria-hidden
            >
              <div className="relative mb-4 h-56 w-32 overflow-hidden rounded-[28px] border-4 border-foreground/15 bg-background shadow-2xl transform -rotate-3 md:h-72 md:w-40">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-xl gradient-button flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm">Z</span>
                  </div>
                </div>
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-gray-200 rounded-full" />
              </div>
              <div className="relative w-36 md:w-44 h-64 md:h-80 gradient-hero rounded-[28px] shadow-2xl border-4 border-purple-300/30 overflow-hidden transform rotate-3">
                <div className="absolute inset-0 gradient-hero" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-2">
                    <span className="text-white font-bold">Z</span>
                  </div>
                  <p className="text-white text-xs font-semibold">Zealth OS</p>
                  <p className="text-white/85 text-[10px] mt-1">Great Solution.</p>
                </div>
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-white/20 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

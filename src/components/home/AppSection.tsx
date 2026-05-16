import Link from "next/link";
import { Apple, PlayCircle } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const storeButtonClass =
  "bg-[#414141] hover:bg-[#414141] text-white gap-2 px-10 py-3 h-auto rounded-xl border border-white/20 justify-start min-h-[44px]";

export default function AppSection() {
  return (
    <section className="mt-10 lg:mt-16 ">
      <div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative  rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-[#151515] opacity-90" aria-hidden />

            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 p-8 md:p-12">
              <div className="flex-1 text-white max-w-lg">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                  Dokter For You App: Organize your health anywhere.
                </h2>
                <p className="mt-4 text-white/80 text-sm md:text-base leading-relaxed">
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
                    {/* <Apple className="h-5 w-5 shrink-0" aria-hidden /> */}
                    <Image src="/assets/apple-logo.png" alt="Apple Store" width={30} height={30} className="rounded-full" />
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
                    {/* <PlayCircle className="h-5 w-5 text-green-400 shrink-0" aria-hidden /> */}
                    <Image src="/assets/google-play2.jpg" alt="Google Play" width={30} height={30} className="rounded-full object-cover" />
                    <div className="text-left leading-tight">
                      <p className="text-[10px] text-white/80">Download on the</p>
                      <p className="text-sm font-semibold">Google Play</p>
                    </div>
                  </Link>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>

      <div
        className="flex-shrink-0 flex items-end justify-center gap-4 md:gap-6 lg:relative"
        aria-hidden
      >
    

        <Image
          src="/assets/mobile.png"
          alt="App Section"
          width={500}
          height={500}
          className="w-full h-auto p-4 lg:p-0 lg:h-[500px] lg:w-[400px] object-cover lg:absolute -bottom-10 lg:left-200 xl:left-290 "
        />
      </div>

    </section>
  );
}

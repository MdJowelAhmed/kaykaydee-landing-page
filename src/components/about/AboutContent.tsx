import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const accentClass = "text-primary";
const headingClass = "text-gray-900";
const bodyMutedClass = "text-gray-600";
const timelineDotClass = "hidden size-4 rounded-full bg-[#2563eb] ring-4 ring-[#fafbfc] md:block";

type TimelineSection = {
  id: string;
  headlineFirst: string;
  headlineFirstClass: string;
  headlineSecond: string;
  headlineSecondClass: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  /** Desktop: image sits in the right column (Story, Goal) or left column (Vision). */
  imageSide: "right" | "left";
};

const timelineSections: TimelineSection[] = [
  {
    id: "story",
    headlineFirst: "Our",
    headlineFirstClass: headingClass,
    headlineSecond: "Story",
    headlineSecondClass: accentClass,
    description:
      "Zealth OS was built for Australian allied health practices that need clarity, not clutter. From documentation to scheduling and patient engagement, we focus on workflows that reduce admin time so clinicians can spend more time with patients. Our mission is to help practices grow by making them more efficient and effective. We are here when you onboard, upskill, or scale. ",
    imageSide: "right",
    imageSrc:
      "/assets/about.webp",
    imageAlt: "Allied health team collaborating in the office",
  },
  {
    id: "vision",
    headlineFirst: "Our",
    headlineFirstClass: accentClass,
    headlineSecond: "Vision",
    headlineSecondClass: headingClass,
    description:
      "We envision a future where small and mid-size practices compete on care quality—not paperwork. Our platform evolves with NDIS, Medicare, and telehealth needs so teams stay compliant and confident as healthcare changes. We are here when you onboard, upskill, or scale. We want to be the platform that helps you grow. ",
    imageSide: "left",
    imageSrc:
      "/assets/about2.webp",
    imageAlt: "Professionals discussing strategy in a meeting room",
  },
  {
    id: "goal",
    headlineFirst: "Our",
    headlineFirstClass: headingClass,
    headlineSecond: "Goal",
    headlineSecondClass: accentClass,
    description:
      "Our goal is simple: fewer clicks, clearer communications, faster payments—and software that clinicians actually enjoy opening each morning. We are here when you onboard, upskill, or scale. We want to be the platform that helps you grow. ",
    imageSide: "right",
    imageSrc:
      "/assets/about3.webp",
    imageAlt: "Modern workspace with natural light",
  },
];

function SectionCopy({
  section,
  textColClassName,
}: {
  section: TimelineSection;
  textColClassName: string;
}) {
  return (
    <div className={cn("relative z-[1]", textColClassName)}>
      <h2 className="mb-5 text-2xl font-bold leading-tight text-gray-900 md:text-3xl lg:text-4xl [&_span]:tracking-tight">
        <span className={cn(section.headlineFirstClass, "mr-1.5")}>
          {section.headlineFirst}
        </span>
        <span className={section.headlineSecondClass}>{section.headlineSecond}</span>
      </h2>
      <p className={cn("mb-7 max-w-xl text-base leading-relaxed sm:text-[24px]", bodyMutedClass)}>
        {section.description}
      </p>
      <Button
        type="button"
        variant="outline"
        className="h-auto gap-1 rounded-lg border-primary bg-transparent px-8 py-3 text-sm font-semibold text-primary shadow-none hover:bg-primary/[0.06] hover:text-primary"
      >
        View More
        <ArrowUpRight className="size-4" aria-hidden />
      </Button>
    </div>
  );
}

function SectionImage({
  section,
  imageColClassName,
}: {
  section: TimelineSection;
  imageColClassName: string;
}) {
  return (
    <div className={imageColClassName}>
      <div className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-[28px] bg-gray-200 shadow-xl ring-1 ring-black/[0.04] lg:aspect-[16/11] lg:rounded-[32px]">
        <Image
          src={section.imageSrc}
          alt={section.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 45vw"
        />
      </div>
    </div>
  );
}

export default function AboutContent() {
  return (
    <div
      className={cn(
        "relative min-h-screen overflow-hidden bg-[#fafbfc]",
        /* Global h1–h6 use Basis; on About we want Cairo from parent <main>. */
        "[&_h1]:font-[inherit] [&_h2]:font-[inherit] [&_h3]:font-[inherit] [&_h4]:font-[inherit] [&_h5]:font-[inherit] [&_h6]:font-[inherit]"
      )}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[20%] top-[8%] h-[420px] w-[520px] rounded-full bg-[#44a9c4]/10 blur-[100px]" />
        <div className="absolute -right-[15%] top-[35%] h-[380px] w-[460px] rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute bottom-[5%] left-[25%] h-[340px] w-[480px] rounded-full bg-[#48dac9]/8 blur-[90px]" />
      </div>

      <div className="relative mx-auto container px-5 pb-24 pt-[5.75rem] sm:px-8 md:pt-28">
        <header className="relative mb-16 md:mb-20">
          <Link
            href="/"
            className={cn(
              "absolute left-0 top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full",
              "border border-gray-200 bg-white text-gray-700 shadow-sm transition-colors",
              "hover:border-gray-300 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35"
            )}
            aria-label="Back to home"
          >
            <ArrowLeft className="size-5" aria-hidden strokeWidth={2} />
          </Link>
          <h1 className="text-center text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl md:tracking-tight">
            About Us
          </h1>
        </header>

        <div className="relative pb-12 md:pb-20">
          <div aria-hidden className="pointer-events-none absolute bottom-12 left-1/2 top-6 hidden -translate-x-1/2 md:block">
            <div className="h-full border-l-2 border-dashed border-gray-300/95" />
          </div>

          <div className="space-y-20 md:space-y-28">
            {timelineSections.map((section) => {
              const textCol =
                section.imageSide === "right"
                  ? "md:pr-10 lg:pr-14"
                  : "md:order-2 md:pl-4 lg:pl-8";
              const imageCol =
                section.imageSide === "right"
                  ? "md:pl-10 lg:pl-14"
                  : "md:order-1 md:pr-4 lg:pr-8";

              return (
                <section key={section.id} className="relative">
                  <span
                    className={cn(
                      "pointer-events-none absolute left-1/2 z-10 top-6 -translate-x-1/2",
                      timelineDotClass
                    )}
                    aria-hidden
                  />

                  <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-10 md:items-start lg:gap-x-16">
                    {section.imageSide === "right" ? (
                      <>
                        <SectionCopy section={section} textColClassName={textCol} />
                        <SectionImage section={section} imageColClassName={imageCol} />
                      </>
                    ) : (
                      <>
                        <SectionImage section={section} imageColClassName={imageCol} />
                        <SectionCopy section={section} textColClassName={textCol} />
                      </>
                    )}
                  </div>
                </section>
              );
            })}
          </div>
        </div>

        <div className="relative mx-auto container pb-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-x-16 lg:items-start">
            <blockquote>
              <p className="mb-5 text-xl font-semibold leading-snug text-gray-900 md:text-2xl">
                &quot;Highly recommend, efficient and very productive.&quot;
              </p>
              <p className={cn("mb-8 max-w-xl text-base leading-relaxed sm:text-[20px]", bodyMutedClass)}>
                Zealth OS has streamlined how we manage notes and reminders. Support
                is responsive and the dashboard makes it easy for the whole clinic to
                stay aligned—we&apos;ve cut hours of admin each week.
              </p>
              <div className="mb-6 flex gap-2" role="presentation" aria-hidden>
                <span className="h-2.5 w-2.5 rounded-full bg-gray-900" />
                <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
              </div>
              <footer className="space-y-0.5">
                <cite className="not-italic">
                  <p className="text-base font-bold text-gray-900">Mr. John Wick</p>
                  <p className="text-base text-gray-700">The Tarasov Mob</p>
                </cite>
              </footer>
            </blockquote>

            <div className="relative mx-auto aspect-[16/11] w-full overflow-hidden rounded-[28px] bg-gray-900 shadow-xl ring-1 ring-black/10 lg:rounded-[32px]">
              <Image
                src="/assets/about4.webp"
                alt=""
                fill
                className="object-cover opacity-95"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

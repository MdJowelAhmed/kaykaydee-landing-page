import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Star, Play } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const sections = [
  {
    id: "story",
    label: "Story",
    labelColor: "text-purple-600",
    title: "Our",
    titleHighlight: "Story",
    description:
      "Think of us as your development talent pool on tap! We find the perfect developers, from juniors to full-stack pros, who integrate smoothly into your team. We support them every step of the way, so you can say goodbye to roadblocks & hello to seamless deployment.",
    imagePosition: "right",
    imageSrc:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
    imageAlt: "Team collaboration - Our Story",
  },
  {
    id: "vision",
    label: "Vision",
    labelColor: "text-purple-600",
    title: "Our",
    titleHighlight: "Vision",
    description:
      "Think of us as your development talent pool on tap! We find the perfect developers, from juniors to full-stack pros, who integrate smoothly into your team. We support them every step of the way, so you can say goodbye to roadblocks & hello to seamless deployment.",
    imagePosition: "left",
    imageSrc:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
    imageAlt: "Team vision - Our Vision",
  },
  {
    id: "goal",
    label: "Goal",
    labelColor: "text-purple-600",
    title: "Our",
    titleHighlight: "Goal",
    description:
      "Think of us as your development talent pool on tap! We find the perfect developers, from juniors to full-stack pros, who integrate smoothly into your team. We support them every step of the way, so you can say goodbye to roadblocks & hello to seamless deployment.",
    imagePosition: "right",
    imageSrc:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    imageAlt: "Team goal - Our Goal",
  },
];

export default function AboutContent() {
  return (
    <div className="bg-background">
      {/* Page Header */}
      <div className="pt-24 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "text-gray-500 hover:text-gray-900 shrink-0"
            )}
            aria-label="Back to home"
          >
            <ArrowLeft className="h-5 w-5" aria-hidden />
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 text-center flex-1 pr-10">
            About Us
          </h1>
        </div>
      </div>

      {/* Timeline sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {sections.map((section, index) => (
          <div key={section.id} className="relative mb-16 md:mb-24">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2" />
            {/* Timeline dot */}
            <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-purple-600 border-4 border-white shadow z-10" />

            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center ${
                section.imagePosition === "left"
                  ? "md:[&>*:first-child]:order-2"
                  : ""
              }`}
            >
              {/* Text content */}
              <div
                className={`${
                  section.imagePosition === "right" ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <div className="rounded-2xl border border-border/60 bg-card p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {section.title}{" "}
                    <span className={section.labelColor}>
                      {section.titleHighlight}
                    </span>
                  </h2>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                    {section.description}
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:border-purple-500 hover:text-purple-600 rounded-full px-5 font-medium transition-colors"
                  >
                    View More
                    <ArrowUpRight className="ml-1.5 h-4 w-4" aria-hidden />
                  </Button>
                </div>
              </div>

              {/* Image */}
              <div
                className={`${
                  section.imagePosition === "left" ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3]">
                  <Image
                    src={section.imageSrc}
                    alt={section.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Testimonial section */}
      <div className="bg-background py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Quote */}
            <div>
              <blockquote>
                <p className="text-xl md:text-2xl font-semibold text-gray-900 leading-snug mb-4">
                  &quot;Highly recommend, efficient and very productive.&quot;
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Raen AI is a game-changer! We needed help navigating the world
                  of AI for our business, and their team was incredibly
                  knowledgeable and supportive. They explained everything in
                  simple terms and helped us develop a solution that exceeded
                  our expectations. We&apos;re now seeing a significant increase
                  in efficiency and productivity, all thanks to Raen AI.
                </p>
                <div
                  className="flex items-center gap-1 mb-3"
                  role="img"
                  aria-label="5 out of 5 stars"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      aria-hidden
                      className="h-4 w-4 fill-yellow-500 text-yellow-600"
                    />
                  ))}
                </div>
                <footer>
                  <p className="font-semibold text-gray-900">Mr. John Wick</p>
                  <p className="text-sm text-gray-500">The Tarasov Mob</p>
                </footer>
              </blockquote>
            </div>

            {/* Video thumbnail */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-video bg-gray-900">
              <Image
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=700&q=80"
                alt=""
                fill
                className="object-cover opacity-70"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <button
                type="button"
                className="absolute inset-0 flex items-center justify-center group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-2xl"
                aria-label="Play testimonial video"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-foreground/20 bg-background/95 shadow-xl transition-transform group-hover:scale-110 group-focus-visible:scale-110">
                  <Play className="h-7 w-7 text-purple-600 fill-purple-600 ml-1" aria-hidden />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

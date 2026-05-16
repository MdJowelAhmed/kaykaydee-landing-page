import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Asad ujjaman Mahfuz",
    role: "Product Manager",
    company: "Aila Clinic",
    rating: 4,
    review:
      "Accept payments, generate invoices, and send receipts automatically.",
  },
  {
    name: "Nadir Hossain",
    role: "Hr. Admin",
    company: "Holly Health care",
    rating: 4,
    review:
      "Accept payments, generate invoices, and send receipts automatically.",
  },
  {
    name: "Fahim",
    role: "Head of Department",
    company: "Toto Hospital",
    rating: 4,
    review:
      "Accept payments, generate invoices, and send receipts automatically.",
  },
];

function StarRating({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <div
      className="flex items-center gap-2 my-5"
      role="img"
      aria-label={`${rating} out of ${max} stars`}
    >
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          aria-hidden
          className={`h-4 w-4 ${
            i < rating
              ? "fill-[#FF8D28] text-yellow-600"
              : "fill-gray-200 text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Everything you Need in One Platform
          </h2>
          <p className="mt-3 text-gray-600 text-base max-w-xl mx-auto">
            Built specifically for Australian Allied Health professionals with
            compliance at its core.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4">
                <h3 className="font-semibold text-gray-900 text-sm">
                  {testimonial.name}
                </h3>
                <p className="text-xs text-gray-500 mt-3">{testimonial.role}</p>
                <p className="text-xs font-medium text-purple-600 mt-3">
                  {testimonial.company}
                </p>
              </div>
              <StarRating rating={testimonial.rating} />
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {testimonial.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

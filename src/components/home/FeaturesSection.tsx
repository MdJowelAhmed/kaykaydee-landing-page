import {
  FileText,
  CalendarClock,
  Activity,
  CreditCard,
  BarChart3,
  Smartphone,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    color: "bg-purple-100 text-purple-600",
    title: "Clinical Documentation",
    description:
      "Built specifically for Australian Allied Health professionals with compliance at its core.",
  },
  {
    icon: CalendarClock,
    color: "bg-blue-100 text-blue-600",
    title: "Smart Scheduling",
    description:
      "Two-way Google Calendar sync, automated SMS reminders, and online booking.",
  },
  {
    icon: Activity,
    color: "bg-green-100 text-green-600",
    title: "Exercise Prescription",
    description:
      "Video exercise library with app delivery and compliance tracking.",
  },
  {
    icon: CreditCard,
    color: "bg-yellow-100 text-yellow-600",
    title: "Integrated Payments",
    description:
      "Accept payments, generate invoices, and send receipts automatically.",
  },
  {
    icon: BarChart3,
    color: "bg-pink-100 text-pink-600",
    title: "Funding Tracking",
    description:
      "Color-coded alerts for AHTS, NDIS, CTF, EPC quotas and expiry dates.",
  },
  {
    icon: Smartphone,
    color: "bg-teal-100 text-teal-600",
    title: "Mobile Apps",
    description:
      "Native iOS and Android apps for clinicians and patients.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-background py-16 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Everything you Need in One Platform
          </h2>
          <p className="mt-3 text-gray-600 text-base md:text-lg max-w-xl mx-auto">
            Built specifically for Australian Allied Health professionals with
            compliance at its core.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-16 bg-gradient-button">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex flex-col items-start gap-4 group">
                <div
                  className={`shrink-0 w-12 h-12 rounded-full gradient-bg flex items-center justify-center`}
                >
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

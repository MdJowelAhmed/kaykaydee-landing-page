import { Star } from "lucide-react";

const stats = [
  { value: "50+", label: "Active Clinics" },
  { value: "1285", label: "Patients Managed" },
  { value: "99%", label: "Customer Satisfaction" },
  {
    value: "5",
    label: "Review",
    icon: <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />,
  },
];

export default function StatsSection() {
  return (
    <section className="" aria-labelledby="stats-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="stats-heading" className="sr-only">
          Zealth OS at a glance
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="flex items-center justify-center gap-2">
                {stat.icon && (
                  <span aria-hidden>{stat.icon}</span>
                )}
                <span className="text-3xl md:text-4xl font-bold text-purple-600">
                  {stat.value}
                </span>
              </div>
              <p className="mt-2 text-sm md:text-base text-gray-600 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

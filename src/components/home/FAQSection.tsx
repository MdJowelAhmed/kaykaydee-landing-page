import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is the eSIM & what are its benefits?",
    answer:
      "An eSIM (embedded SIM) is a digital SIM that allows you to activate a cellular plan without a physical SIM card. Benefits include the ability to switch carriers easily, use multiple plans on one device, and connect instantly from anywhere in the world.",
  },
  {
    question: "Is my phone compatible with eSIM?",
    answer:
      "Most modern smartphones support eSIM technology, including iPhone XS and later, Google Pixel 3 and later, Samsung Galaxy S20 and later, and many other recent Android devices. Check your device settings or contact your carrier to confirm compatibility.",
  },
  {
    question: "What if my connection stops working?",
    answer:
      "If your connection stops working, first try toggling airplane mode on and off. If the issue persists, restart your device. You can also contact our 24/7 support team who will help troubleshoot and resolve any connectivity issues promptly.",
  },
  {
    question: "Can I buy it now and activate it later?",
    answer:
      "Yes! You can purchase your plan now and activate it whenever you're ready. Your activation period begins only when you choose to activate, giving you flexibility to buy in advance for upcoming trips or needs.",
  },
  {
    question: "Will my WhatsApp and Telegram number still work?",
    answer:
      "Yes, your WhatsApp and Telegram accounts are tied to your existing phone number, not your SIM or eSIM. They will continue to work as long as you have an internet connection, regardless of which plan or carrier you're using.",
  },
];

export default function FAQSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Amet morbi sit suspendisse
            dui ut donec vel id. Viverra urna cras nulla elementum. Risus orci
            dolor euismod in fringilla adipiscing eu condimentum.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "outline", size: "default" }),
                "rounded-full px-6 font-medium border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white inline-flex items-center h-9"
              )}
            >
              Go full page
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>

        <Accordion multiple={false} className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="rounded-xl border border-border/60 bg-black/5 px-5 py-1 transition-colors hover:bg-black/10"
            >
              <AccordionTrigger className="text-left text-sm md:text-base font-medium text-gray-800 hover:no-underline hover:text-purple-600 py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-gray-600 leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

import StatsSection from "@/components/home/StatsSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";

/** Single background for stats + why choose blocks */
const STATS_WHY_BG = "/assets/Clip path.png";

export default function StatsWhySharedSection() {
  return (
    <div
      className="bg-cover  bg-no-repeat h-full min-h-[82vh]"
      style={{
        backgroundImage: `url('${STATS_WHY_BG}')`,
      }}
    >
      <StatsSection />
      <WhyChooseSection />
    </div>
  );
}

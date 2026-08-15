import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Mission from "@/components/Mission";
import JoinCommunity from "@/components/JoinCommunity";
import WhatWeShare from "@/components/WhatWeShare";
import Principles from "@/components/Principles";
import Timeline from "@/components/Timeline";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Stats />
      <Mission />
      <JoinCommunity />
      <WhatWeShare />
      <Principles />
      <Timeline />
      <ClosingCTA />
      <Footer />
    </main>
  );
}

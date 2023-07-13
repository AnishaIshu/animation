import AwardWinning from "@/components/AwardWinning";
import Flexible from "@/components/Flexible";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Practice from "@/components/Practice";

export default function Home() {
  return (
    <main>
      {/* <Practice /> */}

      <div className="heroSection">
      <Navbar />
      <Hero />
      </div>

<div className="bg-neutral-100">
      <AwardWinning />
</div>

<div className="bg-[#69a5a4]">
  <Flexible />
</div>
    </main>
  )
}

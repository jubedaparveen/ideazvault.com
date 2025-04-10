import { Banner } from "@/component/Banner";
import TechSection from "@/component/TechSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="my-12  text-center ">
      <div className="w-[90%] mx-auto  ">
        <div className="">
          <Banner />
        </div>
        <div className="mt-20">
          <div>
            <TechSection />
          </div>
        </div>
      </div>
    </div>
  );
}

// #D8EEE6
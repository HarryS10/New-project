"use client";

import { useRouter } from "next/navigation";

import SpaceBackground from "@/components/landing/SpaceBackground";
import StarField from "@/components/landing/StarField";
import GenderSelection from "@/components/landing/GenderSelection";

export default function Home() {
  const router = useRouter();

  const handleSelect = (gender: string) => {
    localStorage.setItem("visitorGender", gender);

    router.push("/journey");
  };

  return (
      <main className="relative h-screen overflow-hidden flex flex-col items-center justify-center">

        <SpaceBackground />
        <StarField />

        <div className="text-center">
          <h1 className=" text-white text-6xl md:text-8xl font-black tracking-widest
              drop-shadow-[0_0_20px_rgba(255,255,255,0.7)] ">
            WELCOME
          </h1>

          <p className="text-white/70 mt-6 text-xl">
            Who are you?
          </p>

          <GenderSelection onSelect={handleSelect} />
        </div>

      </main>
  );
}
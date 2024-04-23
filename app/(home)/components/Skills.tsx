"use client";

import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiSupabase,
  SiTypescript,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { text: "React", Icon: SiReact },
    { text: "Next js", Icon: SiNextdotjs },
    { text: "TypeScript", Icon: SiTypescript },
    { text: "Tailwind", Icon: SiTailwindcss },
    { text: "Supabase", Icon: SiSupabase },
  ];
  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title
        text="Skills 🎯"
        className="flex flex-col items-center justify-center -rotate-6"
      />

      <HoverEffect items={skills} />
    </div>
  );
}

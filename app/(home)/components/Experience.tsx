"use client";
import { useTheme } from "next-themes";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import Title from "./Title";

export default function Experience() {
  const { theme } = useTheme();
  const experiencesData = [
    {
      title: "bachelor's degree",
      location: "Tunisia, Tunis",
      description:
        "Currently pursuing a degree in software engineering, wich i except to complete in 2025.",
      icon: React.createElement(LuGraduationCap),
      date: "2022 - 2025",
    },
    {
      title: "Front-End Developer Internship",
      location: "Mauritanie, Nouadhibou",
      description:
        "I aimed to create a train ticket website for a National Industrial and Mining Company called SNIM.",
      icon: React.createElement(CgWorkAlt),
      date: "Jun 2023 - Sep 2023",
    },
    {
      title: "Front-End Developer Freelance",
      location: "Tunisia, Tunis",
      description:
        "I worked on implementing a Formula 1 website that showcaces all information regarding drivers, circuits and calendar.",
      icon: React.createElement(CgWorkAlt),
      date: "Jan 2024 - Mars 2024",
    },
  ];
  return (
    <section id="experience" className="scroll-mt-28 mb-28 sm:mb-40 ">
      <Title
        text="Experience 🎯"
        className="flex flex-col items-center justify-center rotate-6 py-10 "
      />
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}

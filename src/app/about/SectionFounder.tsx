import Heading from "@/components/Heading/Heading";
import React from "react";
import NcImage from "@/shared/NcImage/NcImage";
import authorImg1 from "@/images/author/author2.jpg";
import authorImg5 from "@/images/author/author5.jpg";
import authorImg2 from "@/images/author/author1.jpg";
import authorImg3 from "@/images/author/author3.jpg";
import authorImg4 from "@/images/author/author4.jpg";


export interface People {
  id: string;
  name: string;
  job: string;
  avatar: any;
}

const FOUNDER_DEMO: People[] = [
  {
    id: "1",
    name: `SRI SHANKAR DODDAPPA HERALAGI`,
    job: "Founder and Visionary",
    avatar: authorImg1
  },
  {
    id: "5",
    name: `SRIMATI RATNA SHANKAR HERALAGI`,
    job: "Founder and Visionary",
    avatar: authorImg5
  },

  {
    id: "4",
    name: `DODDAPPA SHANKAR HERALAGI`,
    job: "Team Vinayaka",
    avatar: authorImg2
  },
  {
    id: "3",
    name: `KIRTIRAJ SHANKAR HERALAGI`,
    job: "Team Vinayaka",
    avatar: authorImg3
  },
  {
    id: "2",
    name: `Maj. NAVEEN SHEELVANTI`,
    job: "Team Vinayaka",
    avatar: authorImg4
  },
];

const SectionFounder = () => {
  return (
    <div className="nc-SectionFounder relative">
      <Heading
        desc="We’re impartial and independent, and every day we create distinctive,
          world-class programmes and content"
      >
        ⛱ Founder
      </Heading>
      <div className="grid sm:grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-4 xl:gap-x-8">
        {FOUNDER_DEMO.map((item) => (
          <div key={item.id} className="max-w-sm">
            <NcImage
              alt=""
              fill
              sizes="300px"
              containerClassName="relative h-0 aspect-h-1 aspect-w-1 rounded-xl overflow-hidden"
              className="absolute inset-0 object-cover"
              src={item.avatar}
            />
            <h3 className="text-lg font-semibold text-neutral-900 mt-4 md:text-xl dark:text-neutral-200">
              {item.name}
            </h3>
            <span className="block text-sm text-neutral-500 sm:text-base dark:text-neutral-400">
              {item.job}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionFounder;

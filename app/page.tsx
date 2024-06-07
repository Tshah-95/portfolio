"use client";

import Link from "next/link";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Balancer from "react-wrap-balancer";

const descriptors = ["impactful", "intuitive", "fast", "a11y"];

export default function Home() {
  const [currDescriptor, setCurrDescriptor] = useState(0);
  const progress = useMotionValue(0);

  useEffect(() => {
    const animateText = async () => {
      progress.set(0);
      await animate(progress, 0.5, {
        duration: 0.5,
      });
      setCurrDescriptor((currDesc) => (currDesc + 1) % descriptors.length);
      await animate(progress, 1, {
        duration: 0.5,
      });
    };

    const interval = setInterval(() => animateText(), 2500);

    return () => clearInterval(interval);
  }, []);

  const opacity = useTransform(progress, [0, 0.5, 0.5, 1], [1, 0, 0, 1]);
  const promptX = useTransform(progress, [0, 0.5, 0.5, 1], [0, -20, 20, 0]);

  return (
    <main className="flex min-h-screen bg-navy-950 flex-col items-center justify-between p-6 md:p-24 relative">
      <div className="max-w-screen-lg">
        <div className="relative flex flex-col w-full py-10 md:py-16 px-5 md:px-10 max-h-[400px] gap-5 md:gap-10 mt-24">
          <p className="text-sm md:text-lg text-amber-100">
            Hi, nice to meet you!
          </p>
          <h1 className="text-3xl md:text-6xl text-white font-bold">
            My name is Tejas.
          </h1>
          <div>
            <h1 className="flex items-center text-3xl md:text-6xl text-slate-400 font-bold">
              I build products
            </h1>
            <h1 className="flex items-center gap-2 md:gap-3 text-3xl md:text-6xl text-slate-400 font-bold ">
              that are
              <motion.span
                className="text-left bg-gradient-to-br text-transparent py-1 md:py-2 bg-clip-text from-navy-400 via-navy-500 to-navy-400 from-40% via-70% to-100%"
                style={{ translateX: promptX, opacity }}
              >
                {descriptors[currDescriptor]}.
              </motion.span>
            </h1>
            <Balancer className="text-sm md:text-lg font-medium text-slate-500 mt-4 md:mt-6 max-w-[40em]">
              I&apos;m a founder, software engineer, product person, and{" "}
              {
                <SimpleLink href={"https://www.instagram.com/buzzlifegames/"}>
                  content creator
                </SimpleLink>
              }
              . I try my best to deliver experiences that make people&apos;s
              lives easier. Recently, that&apos;s{" "}
              <SimpleLink href={"https://www.perytonai.com"}>
                Peryton AI
              </SimpleLink>
              .
            </Balancer>
          </div>
        </div>
      </div>
    </main>
  );
}

const SimpleLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link href={href} className="text-amber-100 hover:text-amber-200">
    {children}
  </Link>
);

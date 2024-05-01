"use client";
import Image from "next/image";
import { Who } from "./components/who";
import badLogo from "@/app/assets/images/LOGOFEIA.png";
import { Presentation } from "./components/presentation";
import { What } from "./components/what";
import { Skills } from "./components/skills";
import { motion } from "framer-motion";
import { Contact } from "./components/contact";
import { Warning } from "./components/warning";

export default function Home() {
  return (
    <div className="w-full">
      <Presentation />
      <Warning />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <What />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <Skills />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <Who />
      </motion.div>
        <Contact />
    </div>
  );
}

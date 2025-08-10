"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { JOIN_ALGO_SOC_LINK } from "@/utils/links";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="border-b border-[var(--algo-yellow)]/20 bg-black/80 backdrop-blur-xl sticky top-0 z-50 cursor-pointer"
      onClick={() => router.push("/")}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          className="flex items-center space-x-3"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="w-10 h-10 bg-gradient-to-br from-[var(--algo-yellow)] to-[var(--algo-yellow)] rounded-xl flex items-center justify-center shadow-lg shadow-[var(--algo-yellow)]/25">
            <img src="/logo.png" alt="AlgoSoc Logo" className="w-6 h-6" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-white to-[var(--algo-yellow)] bg-clip-text text-transparent">
            AlgoSoc
          </span>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            className="bg-gradient-to-r from-[var(--algo-yellow)] to-[var(--algo-yellow)] text-black hover:from-[var(--algo-yellow)]/80 hover:to-[var(--algo-yellow)]/80 font-semibold px-6 py-2 rounded-xl shadow-lg shadow-[var(--algo-yellow)]/25 cursor-pointer"
            onClick={() => window.open(JOIN_ALGO_SOC_LINK, "_blank")}
          >
            Join Us
          </Button>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;

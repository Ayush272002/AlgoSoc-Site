import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import Link from "next/link";
import { Cpu, Users, Briefcase } from "lucide-react";
import { DISCORD_LINK } from "@/utils/links";

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <section className="relative py-32 px-4 text-center overflow-hidden">
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 bg-gradient-to-br from-[var(--algo-yellow)]/5 via-transparent to-[var(--algo-yellow)]/5"
      />

      <div className="container mx-auto relative z-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Badge className="mb-8 bg-[var(--algo-yellow)]/10 text-[var(--algo-yellow)] border-[var(--algo-yellow)]/30 px-4 py-2 text-sm font-medium backdrop-blur-sm">
            <Cpu className="w-4 h-4 mr-2" />
            Algorithmic and Programming Society
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-white via-[var(--algo-yellow)] to-white bg-clip-text text-transparent leading-tight"
        >
          AlgoSoc
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          Where{" "}
          <span className="text-[var(--algo-yellow)] font-semibold">
            algorithms meet innovation
          </span>
          . Join our community of passionate programmers, competitive coders,
          and tech visionaries shaping the future of computing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(255, 206, 109, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-[var(--algo-yellow)] to-[var(--algo-yellow)] text-black hover:from-[var(--algo-yellow)]/80 hover:to-[var(--algo-yellow)]/80 font-semibold px-8 py-4 rounded-xl text-lg shadow-xl cursor-pointer"
              onClick={() => window.open(DISCORD_LINK, "_blank")}
            >
              <Users className="w-6 h-6 mr-3" />
              Join the Community
            </Button>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(255, 206, 109, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[var(--algo-yellow)]/30 text-[var(--algo-yellow)] hover:bg-[var(--algo-yellow)] hover:border-[var(--algo-yellow)] hover:text-black font-semibold px-8 py-4 rounded-xl text-lg shadow-xl backdrop-blur-sm transition-all duration-200"
            >
              <Link href="/careers">
                <Briefcase className="w-6 h-6 mr-3" />
                Explore Careers
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-16 h-16 bg-[var(--algo-yellow)]/10 rounded-full backdrop-blur-sm border border-[var(--algo-yellow)]/20"
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-40 right-20 w-12 h-12 bg-[var(--algo-yellow)]/10 rounded-full backdrop-blur-sm border border-[var(--algo-yellow)]/20"
      />
    </section>
  );
};

export default Hero;

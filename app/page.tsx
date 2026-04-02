"use client";

import { NeuralNetworkBackground } from "@/components/NeuralNetworkBackground";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Feature from "@/components/Feature";
import Events from "@/components/Events";
import Link from "next/link";
import { Vote } from "lucide-react";

export default function AlgoSocLanding() {
  return (
    <div
      className="min-h-screen bg-black text-white overflow-x-hidden"
      style={{ backgroundColor: "#000000" }}
    >
      {/* Neural Network Background */}
      <div className="fixed inset-0 z-0">
        <NeuralNetworkBackground />
      </div>

      <Header />

      {/* AGM Notice Banner */}
      <div className="relative z-20 bg-[var(--algo-yellow)]/10 border-b border-[var(--algo-yellow)]/20 px-4 py-3">
        <div className="container mx-auto flex items-center justify-center gap-3 text-sm text-center">
          <Vote className="w-4 h-4 text-[var(--algo-yellow)] flex-shrink-0" />
          <span className="text-gray-300">
            Our Annual General Meeting is coming up — vote for next year&apos;s committee.{" "}
            <Link
              href="/agm"
              className="text-[var(--algo-yellow)] font-semibold hover:underline underline-offset-4"
            >
              Find out more &rarr;
            </Link>
          </span>
        </div>
      </div>

      <Hero />
      <Feature />
      <Events />
      <Footer />
      
    </div>
  );
}

"use client";

import { NeuralNetworkBackground } from "@/components/NeuralNetworkBackground";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Feature from "@/components/Feature";
import Events from "@/components/Events";

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
      <Hero />
      <Feature />
      <Events />
      <Footer />
      
    </div>
  );
}

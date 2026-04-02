"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Crown,
  ClipboardList,
  Wallet,
  Megaphone,
  Handshake,
  GraduationCap,
  Mail,
  Vote,
  ChevronRight,
  FileText,
  LogIn,
  Flag,
} from "lucide-react";
import { NeuralNetworkBackground } from "@/components/NeuralNetworkBackground";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { staggerContainer } from "@/utils/StaggerContainer";
import { fadeInUp } from "@/utils/FadeInUp";
import { EMAIL, VOTE_LINK } from "@/utils/links";

const roles = [
  {
    icon: Crown,
    title: "President",
    description:
      "Responsible for chairing and coordinating the committee, and ensuring the group is represented at Guild and University events.",
    gradient: "from-yellow-400 to-[var(--algo-yellow)]",
  },
  {
    icon: ClipboardList,
    title: "Secretary",
    description:
      "Responsible for taking meeting minutes, handling the administration of key documents and dealing with correspondence with members, students and external bodies.",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    icon: Wallet,
    title: "Treasurer",
    description:
      "Responsible for managing the society's finances and grant applications, and liaising with the Guild to update the society's accounts.",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    icon: Megaphone,
    title: "Marketing Coordinator",
    description:
      "Responsible for creating marketing materials (IG posts and announcements) to spread AlgoSoc's reach to as many interested students as possible at the University.",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    icon: Handshake,
    title: "Outreach Officer",
    description:
      "Responsible for proactively reaching out to organisations to discuss mutually beneficial partnerships, funding agreements and sponsorships.",
    gradient: "from-purple-500 to-violet-600",
  },
  {
    icon: GraduationCap,
    title: "Education Lead",
    description:
      "Responsible for managing and assisting any education or teaching-focused events for members, including but not limited to workshops and contests.",
    gradient: "from-orange-500 to-red-600",
  },
];

export default function AGMPage() {
  return (
    <div
      className="min-h-screen bg-black text-white overflow-x-hidden"
      style={{ backgroundColor: "#000000" }}
    >
      <div className="fixed inset-0 z-0">
        <NeuralNetworkBackground />
      </div>

      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 relative">
        <div className="container mx-auto relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--algo-yellow)]/40 bg-[var(--algo-yellow)]/10 text-[var(--algo-yellow)] text-sm font-medium mb-8"
            >
              <Vote className="w-4 h-4" />
              Annual General Meeting
            </motion.span>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Shape the{" "}
              <span className="bg-gradient-to-r from-[var(--algo-yellow)] to-orange-400 bg-clip-text text-transparent">
                Future
              </span>{" "}
              of AlgoSoc
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
              Our online AGM your chance to vote for next year&apos;s
              committee and nominate yourself for a role in shaping the
              society&apos;s direction.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  className="bg-gradient-to-r from-[var(--algo-yellow)] to-[var(--algo-yellow)] text-black hover:from-[var(--algo-yellow)]/80 hover:to-[var(--algo-yellow)]/80 font-semibold px-8 py-3 rounded-xl shadow-lg shadow-[var(--algo-yellow)]/25 text-base cursor-pointer"
                  onClick={() => window.open(VOTE_LINK, "_blank")}
                >
                  Vote Now
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  className="border-[var(--algo-yellow)]/40 text-white hover:text-algo-yellow hover:bg-[var(--algo-yellow)]/10 hover:border-[var(--algo-yellow)] font-semibold px-8 py-3 rounded-xl text-base cursor-pointer bg-transparent"
                  onClick={() => (window.location.href = `mailto:${EMAIL}`)}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Nominate Yourself
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 relative">
        <div className="container mx-auto relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              How It <span className="text-[var(--algo-yellow)]">Works</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The AGM takes place entirely online through the Guild&apos;s
              voting portal — simple, fast, and accessible to all members.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {[
              {
                step: "01",
                title: "Nominate",
                description:
                  "Email your student ID and manifesto from your student account to " + EMAIL + ". Tell us why you're the right fit and any relevant experience.",
              },
              {
                step: "02",
                title: "Campaign",
                description:
                  "Share your vision with fellow members. Let the AlgoSoc community know what you stand for and what you'd bring to the committee.",
              },
              {
                step: "03",
                title: "Vote",
                description:
                  "When voting goes live, click the \"Vote Now\" button at the top of the page to cast your vote and help decide the future of the society.",
              },
            ].map((item) => (
              <motion.div
                key={item.step}
                variants={fadeInUp}
                whileHover={{
                  y: -8,
                  transition: { type: "spring", stiffness: 300, damping: 10 },
                }}
              >
                <Card className="bg-gray-900/50 border-[var(--algo-yellow)]/20 hover:border-[var(--algo-yellow)]/40 transition-all duration-500 backdrop-blur-sm h-full text-center cursor-pointer">
                  <CardHeader className="pb-2">
                    <div className="text-5xl font-extrabold text-[var(--algo-yellow)] mb-2">
                      {item.step}
                    </div>
                    <CardTitle className="text-white text-xl font-bold">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Elected <span className="text-[var(--algo-yellow)]">Roles</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Six committee positions are up for election this year.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {roles.map((role) => (
              <motion.div
                key={role.title}
                variants={fadeInUp}
                whileHover={{
                  y: -8,
                  transition: { type: "spring", stiffness: 300, damping: 10 },
                }}
              >
                <Card className="bg-gray-900/50 border-[var(--algo-yellow)]/20 hover:border-[var(--algo-yellow)]/40 transition-all duration-500 backdrop-blur-sm h-full group cursor-pointer">
                  <CardHeader className="pb-4">
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${role.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <role.icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-white text-xl font-bold">
                      {role.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 leading-relaxed text-sm">
                      {role.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Key <span className="text-[var(--algo-yellow)]">Dates</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Mark your calendar — don&apos;t miss these important AGM deadlines.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-[var(--algo-yellow)]/20 hidden sm:block" />

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {[
                {
                  icon: FileText,
                  date: "10 May",
                  time: "10:00 PM",
                  title: "Nominations Close",
                  description:
                    "The nomination period ends. Make sure you have sent your student ID and manifesto to " + EMAIL + " before this deadline.",
                  gradient: "from-orange-500 to-red-600",
                },
                {
                  icon: LogIn,
                  date: "14 May",
                  time: "8:00 AM",
                  title: "Voting Opens",
                  description:
                    'The AGM voting period begins. Come back to this page and click "Vote Now" to cast your vote. You must have an active AlgoSoc membership to vote.',
                  gradient: "from-[var(--algo-yellow)] to-orange-400",
                },
                {
                  icon: Flag,
                  date: "17 May",
                  time: "8:00 PM",
                  title: "Voting Closes",
                  description:
                    "The voting period ends. All votes must be submitted before this time — results will be announced shortly after.",
                  gradient: "from-green-500 to-emerald-600",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex gap-6 items-start"
                >
                  <div className="relative flex-shrink-0">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center shadow-lg z-10 relative`}
                    >
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 pb-2">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="text-[var(--algo-yellow)] font-bold text-lg">
                        {item.date}
                      </span>
                      <span className="text-gray-500 text-sm border border-gray-700 rounded-full px-3 py-0.5">
                        {item.time}
                      </span>
                    </div>
                    <h3 className="text-white font-bold text-xl mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nomination CTA */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="border border-[var(--algo-yellow)]/30 bg-[var(--algo-yellow)]/5 backdrop-blur-sm rounded-3xl p-10 md:p-14">
              <h2 className="text-3xl md:text-5xl font-bold mb-5">
                Ready to <span className="text-[var(--algo-yellow)]">Run?</span>
              </h2>
              <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                Send your student ID and manifesto from your student email
                account to:
              </p>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-block text-[var(--algo-yellow)] font-semibold text-xl mb-8 hover:underline underline-offset-4"
              >
                {EMAIL}
              </a>
              <p className="text-gray-400 text-sm mb-10">
                Your manifesto should include why you are fit for the role, and
                any relevant experiences you have.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    className="bg-gradient-to-r from-[var(--algo-yellow)] to-[var(--algo-yellow)] text-black hover:from-[var(--algo-yellow)]/80 hover:to-[var(--algo-yellow)]/80 font-semibold px-8 py-3 rounded-xl shadow-lg shadow-[var(--algo-yellow)]/25 text-base cursor-pointer"
                    onClick={() => (window.location.href = `mailto:${EMAIL}`)}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Send Manifesto
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    className="border-[var(--algo-yellow)]/40 text-white hover:bg-[var(--algo-yellow)]/10 hover:border-[var(--algo-yellow)] hover:text-algo-yellow font-semibold px-8 py-3 rounded-xl text-base cursor-pointer bg-transparent"
                    onClick={() => window.open(VOTE_LINK, "_blank")}
                  >
                    <Vote className="w-4 h-4 mr-2" />
                    Go to Voting Portal
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

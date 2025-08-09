import React from "react";
import { motion } from "framer-motion";
import { Brain, Target, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { staggerContainer } from "@/utils/StaggerContainer";
import { fadeInUp } from "@/utils/FadeInUp";

const Feature = () => {
  return (
    <section className="py-32 px-4 relative">
      <div className="container mx-auto relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            What We <span className="text-[var(--algo-yellow)]">Offer</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Cutting-edge programs designed to elevate your algorithmic thinking
            and programming prowess
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: Brain,
              title: "Algorithm Workshops",
              description:
                "Deep dive into data structures, algorithms, and problem-solving techniques with hands-on workshops and coding sessions.",
              gradient: "from-blue-500 to-purple-600",
            },
            {
              icon: Trophy,
              title: "Competitive Programming",
              description:
                "Participate in coding competitions, hackathons, and programming contests. Sharpen your skills and compete with the best.",
              gradient: "from-[var(--algo-yellow)] to-orange-600",
            },
            {
              icon: Target,
              title: "Career Development",
              description:
                "Technical interview prep, resume reviews, and networking opportunities with industry professionals and alumni.",
              gradient: "from-green-500 to-teal-600",
            },
          ].map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              whileHover={{
                y: -10,
                transition: { type: "spring", stiffness: 300, damping: 10 },
              }}
            >
              <Card className="bg-gray-900/50 border-[var(--algo-yellow)]/20 hover:border-[var(--algo-yellow)]/40 transition-all duration-500 backdrop-blur-sm h-full group">
                <CardHeader className="pb-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-2xl font-bold">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Feature;

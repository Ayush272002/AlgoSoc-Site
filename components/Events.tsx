import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "lucide-react";
import { staggerContainer } from "@/utils/StaggerContainer";
import { fadeInUp } from "@/utils/FadeInUp";
import eventsData from "@/utils/events.json";
import { Event } from "@/interface/Event";

const Events = () => {
  const isValidEvent = (event: unknown): event is Event => {
    if (!event || typeof event !== "object" || event === null) {
      return false;
    }

    const obj = event as Record<string, unknown>;
    return (
      Object.keys(obj).length > 0 &&
      typeof obj.title === "string" &&
      typeof obj.description === "string" &&
      typeof obj.date === "string" &&
      typeof obj.type === "string" &&
      typeof obj.color === "string" &&
      obj.title.length > 0 &&
      obj.description.length > 0
    );
  };

  const validEvents = eventsData.filter(isValidEvent);

  if (validEvents.length === 0) {
    return null;
  }

  return (
    <section id="events" className="py-32 px-4 bg-gray-900/30 relative">
      <div className="container mx-auto relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Upcoming <span className="text-[var(--algo-yellow)]">Events</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join our exciting lineup of workshops, competitions, and networking
            events
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {validEvents.map((event) => (
            <motion.div
              key={event.title}
              variants={fadeInUp}
              whileHover={{
                y: -10,
                transition: { type: "spring", stiffness: 300, damping: 10 },
              }}
            >
              <Card className="bg-black/50 border-[var(--algo-yellow)]/20 hover:border-[var(--algo-yellow)]/60 transition-all duration-500 backdrop-blur-sm h-full group">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <Badge
                      className={`bg-${event.color}-500/20 text-${event.color}-400 border-${event.color}-500/30`}
                    >
                      {event.type}
                    </Badge>
                    <span className="text-sm text-gray-400 font-mono">
                      {event.date}
                    </span>
                  </div>
                  <CardTitle className="text-white text-xl font-bold group-hover:text-[var(--algo-yellow)] transition-colors">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {event.description}
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

export default Events;

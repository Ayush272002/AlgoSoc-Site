import React from "react";
import { motion } from "framer-motion";
import { GitHubLogoIcon, InstagramLogoIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import {
  EMAIL,
  GITHUB_LINK,
  INSTAGRAM_LINK,
  DISCORD_LINK,
} from "@/utils/links";
import DiscordIcon from "./DiscordIcon";

const Footer = () => {
  return (
    <footer className="py-5 px-4 border-t border-[var(--algo-yellow)]/20 bg-black/80 backdrop-blur-sm relative">
      <div className="container mx-auto relative z-20">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center space-x-3 mb-8 md:mb-0"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[var(--algo-yellow)] to-[var(--algo-yellow)] rounded-xl flex items-center justify-center shadow-lg shadow-[var(--algo-yellow)]/25">
              <img src="/logo.png" alt="AlgoSoc Logo" className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-[var(--algo-yellow)] bg-clip-text text-transparent">
              AlgoSoc
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex space-x-8"
          >
            {[
              { icon: InstagramLogoIcon, href: INSTAGRAM_LINK },
              { icon: GitHubLogoIcon, href: GITHUB_LINK },
              { icon: DiscordIcon, href: DISCORD_LINK },
              { icon: EnvelopeClosedIcon, href: `mailto:${EMAIL}` },
            ].map((social, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  href={social.href}
                  className="text-gray-400 hover:text-[var(--algo-yellow)] transition-all duration-300 p-3 rounded-xl"
                >
                  <social.icon className="w-7 h-7" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

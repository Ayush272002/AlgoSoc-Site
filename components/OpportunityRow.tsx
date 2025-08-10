import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Calendar,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Opportunity } from "@/interface/Opportunity";

const OpportunityRow = ({ opportunity }: { opportunity: Opportunity }) => {

  return (
    <>
      <div className="flex items-center py-4 px-6 hover:bg-algo-yellow/5 transition-colors border-b border-gray-800/50 last:border-b-0">
        <div className="flex-1 grid grid-cols-1 md:grid-cols-[2fr_2fr_1fr] gap-6 items-center max-w-5xl">
          {/* Company */}
          <div className="flex flex-col">
            <div className="font-semibold text-white text-lg mb-1">
              {opportunity.companyName}
            </div>
            <div className="text-sm text-gray-400 flex items-center">
              <MapPin className="w-3 h-3 mr-1" />
              {opportunity.location}
            </div>
            <div className="text-sm text-gray-400 flex items-center mt-1">
              <Calendar className="w-3 h-3 mr-1" />
              {opportunity.openingDate}
            </div>
          </div>

          {/* Title */}
          <div className="flex flex-col">
            <div className="font-medium text-white mb-2">
              {opportunity.programmeName}
            </div>
            <Badge className="bg-algo-yellow/20 text-algo-yellow border-algo-yellow/30 w-fit text-xs px-2 py-1">
              {opportunity.level}
            </Badge>
          </div>

          {/* Apply */}
          <div className="flex justify-center">
            <Button
              asChild
              size="sm"
              className="bg-algo-yellow text-black hover:bg-algo-yellow/80 font-medium px-4 py-2 rounded-lg"
            >
              <Link
                href={opportunity.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OpportunityRow;

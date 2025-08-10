"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";
import { NeuralNetworkBackground } from "@/components/NeuralNetworkBackground";
import Header from "@/components/Header";
import { Opportunity } from "@/interface/Opportunity";
import OpportunityRow from "@/components/OpportunityRow";
import { fetchCSV } from "@/utils/fetchCSV";

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("internships");
  const [data, setData] = useState({
    internships: [] as Opportunity[],
    gradSchemes: [] as Opportunity[],
    industrialPlacements: [] as Opportunity[],
    insights: [] as Opportunity[],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [internships, gradSchemes, industrialPlacements, insights] =
          await Promise.all([
            fetchCSV(process.env.NEXT_PUBLIC_INTERNSHIPS_SHEET_ID!),
            fetchCSV(process.env.NEXT_PUBLIC_GRAD_SCHEMES_SHEET_ID!),
            fetchCSV(process.env.NEXT_PUBLIC_INDUSTRIAL_PLACEMENTS_SHEET_ID!),
            fetchCSV(process.env.NEXT_PUBLIC_INSIGHTS_PROGRAM_SHEET_ID!),
          ]);

        const addIds = (arr: Opportunity[]) => {
          const sorted = arr.sort((a, b) => {
            const dateA = new Date(a.openingDate || "");
            const dateB = new Date(b.openingDate || "");
            return dateB.getTime() - dateA.getTime(); // Descending order
          });
          return sorted.map((item, index) => ({ ...item, id: index + 1 }));
        };

        setData({
          internships: addIds(internships),
          gradSchemes: addIds(gradSchemes),
          industrialPlacements: addIds(industrialPlacements),
          insights: addIds(insights),
        });
      } catch (err) {
        console.error("Error loading CSV data:", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const filterOpportunities = (opportunities: Opportunity[]) => {
    return opportunities.filter(
      (opp) =>
        opp.companyName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        opp.programmeName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        opp.location?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Neural Network Background */}
      <div className="fixed inset-0 z-0">
        <NeuralNetworkBackground />
      </div>

      <Header />

      <main className="relative z-20 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Career <span className="text-algo-yellow">Opportunities</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover internships, graduate schemes, industrial placements, and
              industry insights curated by AlgoSoc
            </p>
          </div>


          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-algo-yellow mb-4"></div>
              <p className="text-gray-400">Loading opportunities...</p>
            </div>
          )}

          {/* Search */}
          {!loading && (
            <>
              <div className="max-w-md mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Search companies, roles, or locations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-gray-900/50 border-algo-yellow/30 text-white placeholder:text-gray-400 backdrop-blur-sm rounded-xl"
                  />
                </div>
              </div>

              <div className="max-w-6xl mx-auto">
                <Tabs
                  value={activeTab}
                  onValueChange={setActiveTab}
                  className="w-full"
                >
                  <TabsList className="grid w-full grid-cols-4 bg-gray-900/50 backdrop-blur-sm border border-algo-yellow/20 rounded-xl p-1">
                    <TabsTrigger
                      value="internships"
                      className="data-[state=active]:bg-algo-yellow data-[state=active]:text-black text-gray-300 rounded-lg cursor-pointer"
                    >
                      Internships
                    </TabsTrigger>
                    <TabsTrigger
                      value="gradSchemes"
                      className="data-[state=active]:bg-algo-yellow data-[state=active]:text-black text-gray-300 rounded-lg cursor-pointer"
                    >
                      Grad Schemes
                    </TabsTrigger>
                    <TabsTrigger
                      value="industrialPlacements"
                      className="data-[state=active]:bg-algo-yellow data-[state=active]:text-black text-gray-300 rounded-lg cursor-pointer"
                    >
                      Placements
                    </TabsTrigger>
                    <TabsTrigger
                      value="insights"
                      className="data-[state=active]:bg-algo-yellow data-[state=active]:text-black text-gray-300 rounded-lg cursor-pointer"
                    >
                      Insights
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="internships">
                    <Card className="bg-gray-900/50 border-algo-yellow/20 backdrop-blur-sm overflow-hidden">
                      <div className="bg-gray-800/50 px-6 py-4 border-b border-gray-700/50">
                        <div className="grid grid-cols-1 md:grid-cols-[2fr_2fr_1fr] gap-6 text-sm font-semibold text-gray-400 uppercase tracking-wider max-w-5xl">
                          <div className="ml-8">
                            Company
                            <div className="text-xs normal-case mt-1 text-gray-500">
                              Location | Added
                            </div>
                          </div>
                          <div className="text-center md:text-left md:pl-8">
                            Title
                            <div className="text-xs normal-case mt-1 text-gray-500">
                              Level
                            </div>
                          </div>
                          <div className="text-center">Apply</div>
                        </div>
                      </div>
                      <CardContent className="p-0">
                        {filterOpportunities(data.internships).map(
                          (opportunity) => (
                            <OpportunityRow
                              key={opportunity.id}
                              opportunity={opportunity}
                            />
                          )
                        )}
                        {filterOpportunities(data.internships).length === 0 && (
                          <div className="text-center py-8 text-gray-400">
                            No internships found matching your search.
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="gradSchemes">
                    <Card className="bg-gray-900/50 border-algo-yellow/20 backdrop-blur-sm overflow-hidden">
                      <div className="bg-gray-800/50 px-6 py-4 border-b border-gray-700/50">
                        <div className="grid grid-cols-1 md:grid-cols-[2fr_2fr_1fr] gap-6 text-sm font-semibold text-gray-400 uppercase tracking-wider max-w-5xl">
                          <div className="ml-8">
                            Company
                            <div className="text-xs normal-case mt-1 text-gray-500">
                              Location | Added
                            </div>
                          </div>
                          <div className="text-center md:text-left md:pl-8">
                            Title
                            <div className="text-xs normal-case mt-1 text-gray-500">
                              Level
                            </div>
                          </div>
                          <div className="text-center">Apply</div>
                        </div>
                      </div>
                      <CardContent className="p-0">
                        {filterOpportunities(data.gradSchemes).map(
                          (opportunity) => (
                            <OpportunityRow
                              key={opportunity.id}
                              opportunity={opportunity}
                            />
                          )
                        )}
                        {filterOpportunities(data.gradSchemes).length === 0 && (
                          <div className="text-center py-8 text-gray-400">
                            No graduate schemes found matching your search.
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="industrialPlacements">
                    <Card className="bg-gray-900/50 border-algo-yellow/20 backdrop-blur-sm overflow-hidden">
                      <div className="bg-gray-800/50 px-6 py-4 border-b border-gray-700/50">
                        <div className="grid grid-cols-1 md:grid-cols-[2fr_2fr_1fr] gap-6 text-sm font-semibold text-gray-400 uppercase tracking-wider max-w-5xl">
                          <div className="ml-8">
                            Company
                            <div className="text-xs normal-case mt-1 text-gray-500">
                              Location | Added
                            </div>
                          </div>
                          <div className="text-center md:text-left md:pl-8">
                            Title
                            <div className="text-xs normal-case mt-1 text-gray-500">
                              Level
                            </div>
                          </div>
                          <div className="text-center">Apply</div>
                        </div>
                      </div>
                      <CardContent className="p-0">
                        {filterOpportunities(data.industrialPlacements).map(
                          (opportunity) => (
                            <OpportunityRow
                              key={opportunity.id}
                              opportunity={opportunity}
                            />
                          )
                        )}
                        {filterOpportunities(data.industrialPlacements)
                          .length === 0 && (
                          <div className="text-center py-8 text-gray-400">
                            No industrial placements found matching your search.
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="insights">
                    <Card className="bg-gray-900/50 border-algo-yellow/20 backdrop-blur-sm overflow-hidden">
                      <div className="bg-gray-800/50 px-6 py-4 border-b border-gray-700/50">
                        <div className="grid grid-cols-1 md:grid-cols-[2fr_2fr_1fr] gap-6 text-sm font-semibold text-gray-400 uppercase tracking-wider max-w-5xl">
                          <div className="ml-8">
                            Company
                            <div className="text-xs normal-case mt-1 text-gray-500">
                              Location | Added
                            </div>
                          </div>
                          <div className="text-center md:text-left md:pl-8">
                            Title
                            <div className="text-xs normal-case mt-1 text-gray-500">
                              Level
                            </div>
                          </div>
                          <div className="text-center">Apply</div>
                        </div>
                      </div>
                      <CardContent className="p-0">
                        {filterOpportunities(data.insights).map(
                          (opportunity) => (
                            <OpportunityRow
                              key={opportunity.id}
                              opportunity={opportunity}
                            />
                          )
                        )}
                        {filterOpportunities(data.insights).length === 0 && (
                          <div className="text-center py-8 text-gray-400">
                            No insights found matching your search.
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>

              <div className="mt-16 max-w-4xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <Card className="bg-gradient-to-br from-algo-yellow/10 to-algo-yellow/5 border-algo-yellow/20 text-center">
                    <CardContent className="pt-6">
                      <div className="text-3xl font-bold text-algo-yellow mb-2">
                        {data.internships.length}
                      </div>
                      <div className="text-gray-400">Internships</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-algo-yellow/10 to-algo-yellow/5 border-algo-yellow/20 text-center">
                    <CardContent className="pt-6">
                      <div className="text-3xl font-bold text-algo-yellow mb-2">
                        {data.gradSchemes.length}
                      </div>
                      <div className="text-gray-400">Grad Schemes</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-algo-yellow/10 to-algo-yellow/5 border-algo-yellow/20 text-center">
                    <CardContent className="pt-6">
                      <div className="text-3xl font-bold text-algo-yellow mb-2">
                        {data.industrialPlacements.length}
                      </div>
                      <div className="text-gray-400">Placements</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-algo-yellow/10 to-algo-yellow/5 border-algo-yellow/20 text-center">
                    <CardContent className="pt-6">
                      <div className="text-3xl font-bold text-algo-yellow mb-2">
                        {data.insights.length}
                      </div>
                      <div className="text-gray-400">Insights</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

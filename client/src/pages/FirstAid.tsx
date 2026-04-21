import { useState } from "react";
import { useLocation } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, ChevronLeft, HeartPulse, Search, Info, AlertTriangle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { firstAidData } from "@/data/firstAidData";

export default function FirstAid() {
  const [, setLocation] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);

  const filteredTopics = firstAidData.filter(topic =>
    topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    topic.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedTopic = firstAidData.find(t => t.id === selectedTopicId);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-card">
      {/* Header */}
      <div className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-40 bg-background/80">
        <div className="container h-14 sm:h-16 flex items-center gap-2">
          <button
            onClick={() => selectedTopicId ? setSelectedTopicId(null) : setLocation("/")}
            className="p-1.5 text-foreground/60 hover:text-foreground transition-colors"
            aria-label="Go back"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <HeartPulse className="w-5 h-5 sm:w-6 sm:h-6 text-primary shrink-0" />
          <h1 className="font-bold text-foreground text-base sm:text-lg truncate">
            {selectedTopic ? selectedTopic.title : "First Aid Guidance"}
          </h1>
        </div>
      </div>

      <div className="container py-6 sm:py-8 max-w-3xl">
        {!selectedTopic ? (
          <>
            <div className="mb-6">
              <p className="text-foreground/70 mb-4">
                Quick access to essential first aid instructions for common emergencies. In a severe medical emergency, always prioritize calling emergency services (112 / 911).
              </p>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search emergencies (e.g., Burns, CPR)..."
                  className="pl-9 bg-card"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {filteredTopics.length > 0 ? (
                filteredTopics.map((topic) => (
                  <Card
                    key={topic.id}
                    className="p-5 cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-all group"
                    onClick={() => setSelectedTopicId(topic.id)}
                  >
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{topic.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{topic.shortDescription}</p>
                  </Card>
                ))
              ) : (
                <div className="col-span-full py-8 text-center text-muted-foreground">
                  <Info className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <p>No topics found matching "{searchQuery}"</p>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
            <Card className="p-6 border-primary/20">
              <p className="text-lg text-muted-foreground mb-6 pb-6 border-b">
                {selectedTopic.shortDescription}
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm">✓</span>
                  What to do
                </h3>
                <ol className="space-y-4 pl-4 border-l-2 border-primary/20 ml-4">
                  {selectedTopic.instructions.map((instruction, idx) => (
                    <li key={idx} className="relative">
                      <span className="absolute -left-7 top-0.5 w-6 h-6 rounded-full bg-background border-2 border-primary/40 flex items-center justify-center text-xs font-bold text-foreground">
                        {idx + 1}
                      </span>
                      <p className="pl-2 leading-relaxed">{instruction}</p>
                    </li>
                  ))}
                </ol>
              </div>

              {selectedTopic.warnings.length > 0 && (
                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-5">
                  <h3 className="text-destructive font-bold mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    Important Warnings
                  </h3>
                  <ul className="space-y-2 list-disc pl-5 text-sm text-foreground/80">
                    {selectedTopic.warnings.map((warning, idx) => (
                      <li key={idx}>{warning}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-8 text-center">
                 <Button onClick={() => setSelectedTopicId(null)} variant="outline">
                   Back to Topics
                 </Button>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}

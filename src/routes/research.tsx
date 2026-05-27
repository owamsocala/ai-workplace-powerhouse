import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { AiToolPanel } from "@/components/AiToolPanel";

export const Route = createFileRoute("/research")({
  head: () => ({ meta: [{ title: "AI Research Assistant — Worksmith AI" }] }),
  component: () => (
    <AiToolPanel
      title="AI Research Assistant"
      description="Get a structured briefing on any topic. Always verify facts independently."
      icon={<Search className="h-6 w-6" />}
      inputLabel="Topic or research question"
      placeholder="e.g. The current state of carbon capture startups in Europe."
      system="You are a research assistant. Produce a markdown briefing with sections: ## Overview, ## Key Concepts, ## Notable Players / Examples, ## Trends, ## Open Questions to Investigate Further. Be balanced, avoid speculation, and flag uncertainty explicitly. Do NOT fabricate citations."
      buildPrompt={(i) => `Provide a research brief on:\n\n${i}`}
    />
  ),
});

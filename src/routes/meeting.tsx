import { createFileRoute } from "@tanstack/react-router";
import { FileText } from "lucide-react";
import { AiToolPanel } from "@/components/AiToolPanel";

export const Route = createFileRoute("/meeting")({
  head: () => ({ meta: [{ title: "Meeting Notes Summarizer — Worksmith AI" }] }),
  component: () => (
    <AiToolPanel
      title="Meeting Notes Summarizer"
      description="Paste raw notes or a transcript. Get a clean summary, decisions, and action items."
      icon={<FileText className="h-6 w-6" />}
      inputLabel="Paste meeting notes or transcript"
      placeholder="Paste your meeting notes here..."
      system="You are an expert meeting summarizer. Produce output in markdown with these sections: ## Summary (2-4 sentences), ## Key Decisions (bullet list), ## Action Items (bullet list with owner and due date when mentioned), ## Open Questions. Be concise and faithful to the source."
      buildPrompt={(i) => `Summarize the following meeting notes:\n\n${i}`}
    />
  ),
});

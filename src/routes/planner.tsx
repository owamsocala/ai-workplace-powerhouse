import { createFileRoute } from "@tanstack/react-router";
import { ListChecks } from "lucide-react";
import { AiToolPanel } from "@/components/AiToolPanel";

export const Route = createFileRoute("/planner")({
  head: () => ({ meta: [{ title: "AI Task Planner — Worksmith AI" }] }),
  component: () => (
    <AiToolPanel
      title="AI Task Planner"
      description="Describe a goal or project. Get a structured, prioritized plan."
      icon={<ListChecks className="h-6 w-6" />}
      inputLabel="What do you need to plan?"
      placeholder="e.g. Launch a new landing page for our SaaS product in 2 weeks with design, copy and analytics."
      system="You are a senior project planner. Break the user's goal into a numbered plan in markdown. For each task include: title, why it matters (1 line), priority (High/Med/Low), estimated effort, and dependencies. End with a short 'Risks & mitigations' section."
      buildPrompt={(i) => `Create a detailed task plan for:\n\n${i}`}
    />
  ),
});

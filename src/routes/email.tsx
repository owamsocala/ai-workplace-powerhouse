import { createFileRoute } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { AiToolPanel } from "@/components/AiToolPanel";

export const Route = createFileRoute("/email")({
  head: () => ({ meta: [{ title: "Smart Email Generator — Worksmith AI" }] }),
  component: () => (
    <AiToolPanel
      title="Smart Email Generator"
      description="Describe the email you need. We'll draft a professional version you can edit."
      icon={<Mail className="h-6 w-6" />}
      inputLabel="What is the email about? (recipient, tone, key points)"
      placeholder="e.g. Polite follow-up to client Sarah about the missing Q3 invoice. Friendly but firm."
      system="You are an expert business writing assistant. Write clear, concise, professional emails. Always include a subject line on the first line as 'Subject: ...', then a blank line, then the body with a greeting, body paragraphs, and a sign-off. Match the requested tone."
      buildPrompt={(i) => `Write an email based on this brief:\n\n${i}`}
    />
  ),
});

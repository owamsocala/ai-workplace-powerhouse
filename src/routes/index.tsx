import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, FileText, ListChecks, Search, MessageSquare, ArrowRight, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dashboard — Worksmith AI" },
      { name: "description", content: "Your AI workplace productivity dashboard." },
    ],
  }),
  component: Dashboard,
});

const tools = [
  { title: "Smart Email Generator", desc: "Draft professional emails in seconds.", icon: Mail, url: "/email" },
  { title: "Meeting Notes Summarizer", desc: "Turn raw notes into clean summaries & action items.", icon: FileText, url: "/meeting" },
  { title: "AI Task Planner", desc: "Break goals into prioritized, actionable plans.", icon: ListChecks, url: "/planner" },
  { title: "AI Research Assistant", desc: "Get structured briefs on any topic.", icon: Search, url: "/research" },
  { title: "AI Chatbot", desc: "Conversational assistant for any task.", icon: MessageSquare, url: "/chat" },
] as const;

function Dashboard() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-10 p-6 md:p-10">
      <section
        className="relative overflow-hidden rounded-2xl p-8 md:p-12 text-primary-foreground"
        style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-elegant)" }}
      >
        <div className="relative z-10 max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Powered by Lovable AI
          </div>
          <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
            Your AI co-worker for everyday tasks.
          </h1>
          <p className="mt-4 text-base text-primary-foreground/85 md:text-lg">
            Draft emails, summarize meetings, plan projects and research topics — all from one clean workspace.
          </p>
        </div>
        <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 right-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold tracking-tight">Tools</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((t) => (
            <Link key={t.url} to={t.url} className="group">
              <Card
                className="h-full p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <t.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold">{t.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Open <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <p className="rounded-lg border border-border bg-muted/40 p-3 text-xs text-muted-foreground">
        <strong className="text-foreground">Responsible AI:</strong> All outputs are AI-generated and may contain
        errors. Review and edit before sharing.
      </p>
    </div>
  );
}

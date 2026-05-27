import { useState, type ReactNode } from "react";
import { useServerFn } from "@tanstack/react-start";
import { aiComplete } from "@/lib/ai.functions";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Loader2, Sparkles, Copy, Check } from "lucide-react";
import { toast } from "sonner";

type Props = {
  title: string;
  description: string;
  icon: ReactNode;
  inputLabel: string;
  placeholder: string;
  system: string;
  buildPrompt: (input: string) => string;
  outputLabel?: string;
  fields?: ReactNode;
};

export function AiToolPanel({
  title,
  description,
  icon,
  inputLabel,
  placeholder,
  system,
  buildPrompt,
  outputLabel = "AI Output (editable)",
  fields,
}: Props) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const run = useServerFn(aiComplete);

  const generate = async () => {
    if (!input.trim()) {
      toast.error("Please provide some input first.");
      return;
    }
    setLoading(true);
    try {
      const { content } = await run({ data: { system, user: buildPrompt(input) } });
      setOutput(content);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Generation failed");
    } finally {
      setLoading(false);
    }
  };

  const copy = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    toast.success("Copied to clipboard");
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="mx-auto w-full max-w-5xl space-y-6 p-6 md:p-8">
      <header className="flex items-start gap-4">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-primary-foreground"
          style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-elegant)" }}
        >
          {icon}
        </div>
        <div>
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h1>
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        </div>
      </header>

      <Card className="p-5" style={{ boxShadow: "var(--shadow-card)" }}>
        <label className="text-sm font-medium">{inputLabel}</label>
        {fields}
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholder}
          rows={6}
          className="mt-2 resize-y"
        />
        <div className="mt-4 flex justify-end">
          <Button onClick={generate} disabled={loading} size="lg">
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
            {loading ? "Generating…" : "Generate with AI"}
          </Button>
        </div>
      </Card>

      <Card className="p-5" style={{ boxShadow: "var(--shadow-card)" }}>
        <div className="mb-2 flex items-center justify-between">
          <label className="text-sm font-medium">{outputLabel}</label>
          {output && (
            <Button variant="ghost" size="sm" onClick={copy}>
              {copied ? <Check className="mr-1 h-4 w-4" /> : <Copy className="mr-1 h-4 w-4" />}
              {copied ? "Copied" : "Copy"}
            </Button>
          )}
        </div>
        <Textarea
          value={output}
          onChange={(e) => setOutput(e.target.value)}
          placeholder="Your AI-generated draft will appear here. You can edit it freely before using."
          rows={14}
          className="resize-y font-sans text-sm leading-relaxed"
        />
      </Card>

      <p className="rounded-lg border border-border bg-muted/40 p-3 text-xs text-muted-foreground">
        <strong className="text-foreground">Responsible AI:</strong> Outputs are AI-generated and may contain errors,
        bias, or fabricated details. Always review, fact-check, and edit before sharing or making decisions based on
        these results.
      </p>
    </div>
  );
}

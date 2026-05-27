import { createServerFn } from "@tanstack/react-start";

type Msg = { role: "system" | "user" | "assistant"; content: string };

export const aiComplete = createServerFn({ method: "POST" })
  .inputValidator((input: { system: string; user: string; history?: Msg[] }) => input)
  .handler(async ({ data }) => {
    const key = process.env.LOVABLE_API_KEY;
    if (!key) throw new Error("LOVABLE_API_KEY not configured");

    const messages: Msg[] = [
      { role: "system", content: data.system },
      ...(data.history ?? []),
      { role: "user", content: data.user },
    ];

    const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages,
      }),
    });

    if (!res.ok) {
      if (res.status === 429) throw new Error("Rate limit reached. Please wait a moment and try again.");
      if (res.status === 402) throw new Error("AI credits exhausted. Please add credits in workspace settings.");
      const t = await res.text();
      throw new Error(`AI gateway error: ${t.slice(0, 200)}`);
    }

    const json = await res.json();
    const content: string = json.choices?.[0]?.message?.content ?? "";
    return { content };
  });

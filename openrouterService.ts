const API_KEY = process.env.API_KEY as string;

interface OpenRouterResponse {
  choices?: {
    message?: {
      content?: string;
    };
  }[];
}

export async function callLLM(messages: any[]): Promise<string | null> {
  if (!API_KEY) {
    throw new Error("API_KEY not set in environment variables");
  }

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "google/gemini-2.0-flash-001",
      messages,
      temperature: 0.7,
      max_tokens: 150
    })
  });

  const data: OpenRouterResponse = await response.json();

  return data?.choices?.[0]?.message?.content || null;
}

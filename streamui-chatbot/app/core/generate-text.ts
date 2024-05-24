import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";

async function main() {
  const result = await generateText({
    model: openai("gpt-4o"),
    prompt: "Tell me a joke, in simple words. within 10 words.",
  });
  console.log(result.text);
}

main().catch(console.error);

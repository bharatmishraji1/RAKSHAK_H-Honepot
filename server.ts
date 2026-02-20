import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import express from "express";
import {
  handleMessage,
  generateFinalOutput,
  getSession
} from "./honeypotAgent";

const app = express();
app.use(express.json());

const PORT: number = Number(process.env.PORT) || 8080;
const AUTH_KEY = process.env.AUTH_KEY;

// Honeypot Endpoint
app.post("/honeypot", async (req, res) => {
  try {
    if (AUTH_KEY && req.headers["x-api-key"] !== AUTH_KEY) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const { sessionId, message } = req.body;

    if (!sessionId || !message?.text) {
      return res.status(400).json({ error: "Invalid request format" });
    }

    const reply = await handleMessage(sessionId, message.text);

    const finalReport = generateFinalOutput(sessionId);
    const session = getSession(sessionId);

    if (
      finalReport &&
      session &&
      finalReport.totalMessagesExchanged >= 12 &&
      finalReport.scamDetected &&
      !session.finalSubmitted
    ) {
      session.finalSubmitted = true;

      const submissionPayload = {
        sessionId: finalReport.sessionId,
        scamDetected: finalReport.scamDetected,
        totalMessagesExchanged: finalReport.totalMessagesExchanged,
        engagementDurationSeconds: finalReport.engagementDurationSeconds,
        extractedIntelligence: finalReport.extractedIntelligence,
        agentNotes: finalReport.agentNotes
      };

      try {
        await fetch(
          "https://hackathon.guvi.in/api/updateHoneyPotFinalResult",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(submissionPayload)
          }
        );
      } catch {}
    }

    return res.status(200).json({
      status: "success",
      reply
    });

  } catch {
    return res.status(200).json({
      status: "success",
      reply: "Please clarify."
    });
  }
});

app.get("/", (_, res) => {
  res.send("Rakshak-H Honeypot API Active");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Honeypot API running on port ${PORT}`);
});

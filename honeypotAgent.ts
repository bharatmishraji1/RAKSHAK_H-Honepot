import { analyzeScam } from "./detection";
import { extractEntities } from "./extraction";
import { generateProbe } from "./conversation";
import { SessionState } from "./types";

const sessions: Record<string, SessionState> = {};

function initSession(sessionId: string): SessionState {
  return {
    sessionId,
    startTime: Date.now(),
    messages: [],
    extracted: {
      phoneNumbers: [],
      bankAccounts: [],
      upiIds: [],
      phishingLinks: [],
      emailAddresses: [],
      caseIds: [],
      policyNumbers: [],
      orderNumbers: []
    },
    redFlags: [],
    scamScore: 0,
    questionCount: 0,
    finalSubmitted: false
  };
}

export async function handleMessage(
  sessionId: string,
  scammerText: string
) {
  if (!sessions[sessionId]) {
    sessions[sessionId] = initSession(sessionId);
  }

  const session = sessions[sessionId];

  // Store scammer message
  session.messages.push({
    sender: "scammer",
    text: scammerText
  });

  // Analyze scam content
  const analysis = analyzeScam(scammerText);
  session.scamScore += analysis.score * 1.2;
  session.redFlags.push(...analysis.flags);

  // Extract intelligence
  const entities = extractEntities(scammerText);

  Object.keys(entities).forEach(key => {
    // @ts-ignore
    session.extracted[key].push(...entities[key]);
  });

  // Generate reply
  const reply = generateProbe();

  // Store agent reply 
  session.messages.push({
    sender: "agent",
    text: reply
  });

  session.questionCount++;

  return reply;
}

export function generateFinalOutput(sessionId: string) {
  const session = sessions[sessionId];
  if (!session) return null;

  const duration =
    Math.floor((Date.now() - session.startTime) / 1000);

  const unique = (arr: string[]) => [...new Set(arr)];

  return {
    sessionId: session.sessionId,
    scamDetected: session.scamScore > 0.4,
    totalMessagesExchanged: session.messages.length,
    engagementDurationSeconds: duration,
    extractedIntelligence: {
      phoneNumbers: unique(session.extracted.phoneNumbers),
      bankAccounts: unique(session.extracted.bankAccounts),
      upiIds: unique(session.extracted.upiIds),
      phishingLinks: unique(session.extracted.phishingLinks),
      emailAddresses: unique(session.extracted.emailAddresses),
      caseIds: unique(session.extracted.caseIds),
      policyNumbers: unique(session.extracted.policyNumbers),
      orderNumbers: unique(session.extracted.orderNumbers)
    },
    agentNotes: `Red Flags: ${[
      ...new Set(session.redFlags)
    ].join(", ")}`,
    scamType: "Financial / Phishing",
    confidenceLevel: Math.min(session.scamScore, 1)
  };
}

export function getSession(sessionId: string) {
  return sessions[sessionId];
}

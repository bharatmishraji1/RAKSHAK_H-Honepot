export interface ExtractedIntelligence {
  phoneNumbers: string[];
  bankAccounts: string[];
  upiIds: string[];
  phishingLinks: string[];
  emailAddresses: string[];
  caseIds: string[];
  policyNumbers: string[];
  orderNumbers: string[];
}

export interface SessionState {
  sessionId: string;
  startTime: number;
  messages: { sender: string; text: string }[];
  extracted: ExtractedIntelligence;
  redFlags: string[];
  scamScore: number;
  questionCount: number;
  finalSubmitted?: boolean;
  scamType?: string;
}

export function analyzeScam(text: string) {
  const lower = text.toLowerCase();

  const keywords = [
    "otp",
    "urgent",
    "verify",
    "kyc",
    "upi",
    "bank",
    "account",
    "refund",
    "suspend",
    "click",
    "link",
    "payment",
    "transfer",
    "fee",
    "reward",
    "lottery"
  ];

  let score = 0;
  let flags: string[] = [];

  keywords.forEach(word => {
    if (lower.includes(word)) {
      score += 0.12;
      flags.push(`Suspicious keyword: ${word}`);
    }
  });

  if (/https?:\/\/[^\s]+/.test(text)) {
    score += 0.3;
    flags.push("Suspicious link detected");
  }

  if (/\b\d{4,6}\b/.test(text) && lower.includes("otp")) {
    score += 0.25;
    flags.push("OTP request detected");
  }

  return {
    score: Math.min(score, 1),
    flags
  };
}

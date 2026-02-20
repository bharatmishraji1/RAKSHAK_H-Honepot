export function analyzeScam(text: string) {
  const lower = text.toLowerCase();

  let score = 0;
  let flags: string[] = [];
  let scamType = "unknown";

  if (/otp|verify|account blocked|urgent|transaction/.test(lower)) {
    score += 0.4;
    flags.push("OTP / urgency pattern");
    scamType = "bank_fraud";
  }

  if (/upi|cashback|reward|scan qr|refund/.test(lower)) {
    score += 0.4;
    flags.push("UPI cashback pattern");
    scamType = "upi_fraud";
  }

  if (/http|www|\.com|link|offer|click/.test(lower)) {
    score += 0.4;
    flags.push("Phishing link detected");
    scamType = "phishing";
  }

  return { score, flags, scamType };
}

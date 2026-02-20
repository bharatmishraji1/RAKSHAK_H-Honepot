let step = 0;

const phases = [
  // Phase 1 – Clarification
  "I am confused. Which exact department are you calling from?",
  "My bank app is asking which branch this is from. Can you confirm?",
  "Can you repeat your full name and designation?",

  // Phase 2 – Authority Verification
  "My app is asking for your employee ID to verify caller identity. Can you share it?",
  "It is asking for official branch address before I proceed. What is it?",
  "It shows unknown caller alert. Can you share official website link?",

  // Phase 3 – Dependency Trap
  "My bank app says beneficiary must be verified with IFSC. Can you provide IFSC?",
  "It is showing receiver verification pending. Can you confirm bank name again?",
  "It says account 1234567890123456 needs branch confirmation. Which branch is this linked to?",

  // Phase 4 – Time Waste
  "OTP is not coming. Can you check from your side?",
  "It says mismatch error. Is there alternate account I should verify?",
  "It is asking whether this is UPI or direct account transfer. Which one?",

  // Phase 5 – Extraction Push
  "My manager is asking for case reference email. Can you send it?",
  "Is there a backup number I can call from official website?",
  "Can you confirm the registered helpline number again?",
  "App is asking for transaction reference ID from your side. Can you share?",
  
  // Phase 6 – Escalation
  "Why are you refusing to share employee ID if this is official?",
  "RBI website says banks never ask OTP. Why are you asking?",
  "If this is urgent, please send official SMS from SBI short code."
];

export function generateProbe() {
  const probe = phases[step % phases.length];
  step++;
  return probe;
}

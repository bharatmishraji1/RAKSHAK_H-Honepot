const probes = [
  "Can you share your employee ID and official branch address?",
  "What is the official website where I can verify this?",
  "Can I call your customer care number to confirm?",
  "Why is this urgent?",
  "Can you share the case ID again?",
  "Which department are you calling from?",
  "Can you send this on official email?",
  "Is this listed on RBI website?",
  "Can you provide proof of authority?",
  "Why do you need my OTP?"
];

export function generateProbe() {
  return probes[Math.floor(Math.random() * probes.length)];
}

export function generateProbe(scamType: string, step: number) {

  const bankFlow = [
    // Clarification
    "I am a bit confused. Which exact department are you calling from?",
    "My banking app is asking which branch this is from. Can you confirm?",
    "Can you repeat your full name and designation once more?",

    // Authority verification
    "It is asking for your employee ID before I proceed. Can you share it?",
    "App is requesting official branch address for verification. What should I enter?",
    "It shows unknown caller warning. Can you share official website link?",

    // Dependency trap
    "My app says beneficiary must be verified with IFSC. Can you provide IFSC?",
    "It is showing receiver verification pending. Can you confirm bank name again?",
    "It says account needs branch confirmation. Which branch is this linked to?",

    // Time waste
    "OTP came but disappeared. Can you generate another one?",
    "It says mismatch error. Is there alternate account or backup UPI?",
    "It is asking whether this is NEFT, RTGS or IMPS. Which one should I select?",

    // Extraction push
    "My manager is asking for case reference email. Can you send official email ID?",
    "Is there a registered helpline number I can verify from website?",
    "App asking for transaction reference ID from your side. Can you share?",
    "Can you confirm the official SMS short code used by your bank?",

    // Escalation
    "RBI website says banks never ask OTP. Why are you asking?",
    "If this is urgent, can you send official SMS from SBI short code?",
    "Why are you refusing to share verifiable ID if this is official?"
  ];

  const upiFlow = [
    // Clarification
    "Is this cashback or refund? I did not request anything.",
    "Which UPI ID should I verify on my app?",
    "Is this UPI collect request or direct transfer?",

    // Verification
    "App asking for receiver VPA confirmation. Can you repeat the UPI ID?",
    "Is there alternate UPI ID if this one fails?",
    "It is asking whether merchant account or personal account. Which one?",

    // Dependency trap
    "It says receiver not verified. Can you share linked phone number?",
    "App asking for bank name linked to this UPI. Can you confirm?",
    "Is this request coming from business account?",

    // Time waste
    "Payment showing pending approval. Can you cancel and resend?",
    "It says limit exceeded. Should I split into two transfers?",
    "I received two collect requests. Which one is correct?",

    // Extraction push
    "My app is asking for merchant GST number. Can you provide?",
    "Is there official support email I can confirm from?",
    "Can you confirm registered customer care number again?",

    // Escalation
    "Why is RBI warning saying never approve unknown UPI collect?",
    "If genuine, can you send confirmation from official domain email?"
  ];

  const phishingFlow = [
    // Clarification
    "Is this offer available on official app also?",
    "Can you confirm full company name?",
    "Is this listed on your official website homepage?",

    // Verification
    "Why does this URL look slightly different from official one?",
    "Can you share company registration or GST number?",
    "Is there official support email to verify this offer?",

    // Dependency trap
    "It says payment gateway not secure. Which payment provider is this?",
    "App warning says domain recently registered. Can you confirm?",
    "Is this COD available or only online payment?",

    // Time waste
    "Page is not loading properly. Can you resend new link?",
    "It shows certificate warning. Is there alternate link?",
    "It is asking for card details. Is UPI available instead?",

    // Extraction push
    "Can you confirm customer support number listed for this offer?",
    "Is there refund policy page I can review?",
    "Can you share order reference ID before I proceed?",

    // Escalation
    "Why is browser showing phishing alert?",
    "If official, can you send link from verified email domain?"
  ];

  const flows: any = {
    bank_fraud: bankFlow,
    upi_fraud: upiFlow,
    phishing: phishingFlow,
    unknown: bankFlow
  };

  const selected = flows[scamType] || bankFlow;

  return selected[step % selected.length];
}

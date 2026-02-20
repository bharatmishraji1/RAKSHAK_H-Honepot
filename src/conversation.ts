export function generateProbe(scamType: string, step: number) {

  const bankFlow = [
    "Which exact department are you calling from?",
    "Can you spell your full name slowly for verification?",
    "My app is asking for your employee ID. What should I enter?",
    "It needs branch IFSC code to verify beneficiary. Can you provide it?",
    "Can you repeat the account number slowly digit by digit?",
    "It says branch address required. What is full official address?",
    "App asking for case reference number. Can you confirm?",
    "It shows mismatch error. Can you resend the account details?",
    "Is there alternate account number in case this fails?",
    "My manager wants official website URL for verification.",
    "It says SMS short code must match bank records. What is it?",
    "Can you confirm registered customer care number?",
    "Is there official support email I can confirm from?",
    "It is asking for transaction reference ID from your side.",
    "RBI guidelines say banks never ask OTP. Why are you asking?",
    "If urgent, can you send official SMS from bank short code?",
    "Why are you avoiding verifiable identity details?"
  ];

  const upiFlow = [
    "Which UPI ID should I verify exactly?",
    "Can you spell the UPI ID slowly character by character?",
    "Is there alternate UPI ID if this one fails?",
    "App asking for linked bank name to this UPI.",
    "It says receiver phone number must match records. Can you confirm?",
    "Is this merchant account or personal account?",
    "It shows mismatch in VPA format. Can you resend correctly?",
    "Do you have GST number for this merchant?",
    "Is there official support email for confirmation?",
    "Payment showing pending. Can you cancel and resend collect request?",
    "Should I split into two transfers due to limit issue?",
    "I received two collect requests. Which one is correct?",
    "Can you confirm registered helpline number?",
    "App is asking for transaction reference from your side.",
    "Why is RBI warning against unknown UPI requests?",
    "If genuine, can you send confirmation from official domain email?"
  ];

  const phishingFlow = [
    "Can you confirm full company legal name?",
    "Can you share GST or registration number?",
    "Why does this URL look different from official domain?",
    "Is this offer listed on homepage?",
    "Can you resend full link including https?",
    "Is there official customer care number listed?",
    "Can you provide support email for verification?",
    "It shows SSL certificate warning. Is there alternate secure link?",
    "Is payment gateway Razorpay or PayU?",
    "Does this support COD option?",
    "Can you confirm refund policy page URL?",
    "App is asking for order reference ID.",
    "Can you confirm merchant ID used for this offer?",
    "Browser is showing phishing alert. Why?",
    "If official, can you send from verified domain email?",
    "Why is this domain recently registered?"
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

export function extractEntities(text: string) {
  return {
    phoneNumbers:
      text.match(/\+?\d{10,13}/g) || [],

    bankAccounts:
      text.match(/\b\d{9,18}\b/g) || [],

    upiIds:
      text.match(/[a-zA-Z0-9.\-_]{2,}@[a-zA-Z]{2,}/g) || [],

    phishingLinks:
      text.match(/https?:\/\/[^\s]+/g) || [],

    emailAddresses:
      text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g) || [],

    caseIds:
      text.match(/\b\d{4,10}\b/g) || [],

    policyNumbers:
      text.match(/\b[A-Z]{2,5}\d{4,10}\b/g) || [],

    orderNumbers:
      text.match(/\bORD\d{3,10}\b/i) || []
  };
}

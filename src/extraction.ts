export function extractEntities(text: string) {
  return {
    phoneNumbers: text.match(/(\+91[\-\s]?)?[6-9]\d{9}/g) || [],
    bankAccounts: text.match(/\b\d{9,18}\b/g) || [],
    upiIds: text.match(/[a-zA-Z0-9.\-_]{2,}@[a-zA-Z]{2,}/g) || [],
    phishingLinks: text.match(/https?:\/\/[^\s]+/g) || [],
    emailAddresses: text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g) || [],
    caseIds: text.match(/\b\d{4,8}\b/g) || [],
    policyNumbers: text.match(/[A-Z]{2,}\d{4,}/g) || [],
    orderNumbers: text.match(/ORD\d{3,}/gi) || []
  };
}

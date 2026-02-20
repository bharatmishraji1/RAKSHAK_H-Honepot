export function extractEntities(text: string) {
  const clean = text.trim();

  // Phone numbers (India + generic international)
  const phoneNumbers =
    clean.match(/(\+?\d{1,3}[\s-]?)?[6-9]\d{9}/g) || [];

  // Bank account numbers (9–18 digits)
  const bankAccounts =
    clean.match(/\b\d{9,18}\b/g) || [];

  // UPI IDs (name@bank)
  const upiIds =
    clean.match(/\b[a-zA-Z0-9.\-_]{2,}@[a-zA-Z]{2,}\b/g) || [];

  // URLs (http, https, www)
  const phishingLinks =
    clean.match(/\bhttps?:\/\/[^\s]+|\bwww\.[^\s]+/gi) || [];

  // Email addresses
  const emailAddresses =
    clean.match(/\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\b/g) || [];

  // Case IDs (4–8 digits not already captured as bank account)
  const caseIds =
    clean.match(/\b\d{4,8}\b/g) || [];

  // IFSC codes (e.g., SBIN0000456)
  const policyNumbers =
    clean.match(/\b[A-Z]{4}0[A-Z0-9]{6}\b/g) || [];

  // Order IDs (ORD12345 or similar)
  const orderNumbers =
    clean.match(/\bORD\d{3,10}\b/gi) || [];

  return {
    phoneNumbers,
    bankAccounts,
    upiIds,
    phishingLinks,
    emailAddresses,
    caseIds,
    policyNumbers,
    orderNumbers
  };
}

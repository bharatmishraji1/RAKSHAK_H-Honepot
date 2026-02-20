export function extractEntities(text: string) {
  const unique = (arr: string[]) => [...new Set(arr)];

  return {
    phoneNumbers: unique(text.match(/\+?\d{10,13}/g) || []),
    bankAccounts: unique(text.match(/\b\d{9,18}\b/g) || []),
    upiIds: unique(text.match(/[a-zA-Z0-9.\-_]+@[a-zA-Z]+/g) || []),
    phishingLinks: unique(text.match(/https?:\/\/[^\s]+/g) || []),
    emailAddresses: unique(
      text.match(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i) || []
    ),
    caseIds: unique(text.match(/\b(case|ref)[-_]?\d+/gi) || []),
    policyNumbers: unique(text.match(/\bpolicy[-_]?\d+/gi) || []),
    orderNumbers: unique(text.match(/\border[-_]?\d+/gi) || [])
  };
}

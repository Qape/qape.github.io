function normalize(phoneNumber: string): string {
  const trimmedNumber = phoneNumber.replace(/[^\d+]/g, '');
  if (trimmedNumber.includes('+')) {
    return trimmedNumber.replace(/^\+46/, '0');
  }
  return trimmedNumber.replace(/^46/, '0');
}

export function formatPhoneNumber(
  phoneNumber: string | undefined | null
): string | undefined {
  if (!phoneNumber) {
    return undefined;
  }

  const normalized = normalize(phoneNumber);
  return normalized.replace(/^(\d{3})(\d{3})(\d{2})(\d{2})$/, '$1-$2 $3 $4');
}

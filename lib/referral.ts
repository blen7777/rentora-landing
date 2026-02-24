import { customAlphabet } from 'nanoid';

// Generate 8-character referral code (alphanumeric, no ambiguous characters)
const alphabet = '0123456789ABCDEFGHJKLMNPQRSTUVWXYZ';
const nanoid = customAlphabet(alphabet, 8);

export function generateReferralCode(): string {
  return nanoid();
}

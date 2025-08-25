'use server'

/**
 * Formats a phone number to E.164 format (US)
 * @param phone - The phone number string to format
 * @returns The formatted phone number in E.164 format (+1XXXXXXXXXX)
 * @throws Error if the phone number is invalid
 */
export async function formatPhone(phone: string): Promise<string> {
  if (!phone) {
    throw new Error('Phone number is required')
  }

  // Remove all non-digit characters
  const digits = phone.replace(/\D/g, '')

  // Check if it's a valid US phone number
  if (digits.length === 10) {
    // Assume it's a US number without country code
    return `+1${digits}`
  } else if (digits.length === 11 && digits.startsWith('1')) {
    // US number with country code
    return `+${digits}`
  } else {
    throw new Error('Invalid US phone number. Please provide a 10-digit number or 11-digit number starting with 1.')
  }
}

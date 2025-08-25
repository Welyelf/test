import { formatPhone } from '../actions'

describe('formatPhone', () => {
  it('should format a 10-digit US phone number to E.164 format', async () => {
    const result = await formatPhone('5551234567')
    expect(result).toBe('+15551234567')
  })

  it('should format a phone number with formatting characters', async () => {
    const result = await formatPhone('(555) 123-4567')
    expect(result).toBe('+15551234567')
  })

  it('should format an 11-digit US phone number starting with 1', async () => {
    const result = await formatPhone('15551234567')
    expect(result).toBe('+15551234567')
  })

  it('should format a phone number with various formatting', async () => {
    const result = await formatPhone('+1 (555) 123-4567')
    expect(result).toBe('+15551234567')
  })

  it('should throw an error for empty phone number', async () => {
    await expect(formatPhone('')).rejects.toThrow('Phone number is required')
  })

  it('should throw an error for invalid phone number length', async () => {
    await expect(formatPhone('123456')).rejects.toThrow('Invalid US phone number')
  })

  it('should throw an error for 11-digit number not starting with 1', async () => {
    await expect(formatPhone('25551234567')).rejects.toThrow('Invalid US phone number')
  })
})

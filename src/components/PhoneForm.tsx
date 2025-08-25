'use client'

import { useState, useTransition } from 'react'
import { formatPhone } from '@/lib/actions'

export function PhoneForm() {
  const [phone, setPhone] = useState('')
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)
  const [isPending, startTransition] = useTransition()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    startTransition(async () => {
      try {
        const formattedPhone = await formatPhone(phone)
        setResult({ success: true, message: formattedPhone })
      } catch (error) {
        setResult({ 
          success: false, 
          message: error instanceof Error ? error.message : 'An error occurred' 
        })
      }
    })
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(555) 123-4567 or 5551234567"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            disabled={isPending}
          />
        </div>
        
        <button
          type="submit"
          disabled={isPending || !phone.trim()}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isPending ? 'Formatting...' : 'Format Phone Number'}
        </button>
      </form>

      {result && (
        <div className={`mt-4 p-4 rounded-md ${
          result.success 
            ? 'bg-green-50 border border-green-200' 
            : 'bg-red-50 border border-red-200'
        }`}>
          <h3 className={`font-medium ${
            result.success ? 'text-green-800' : 'text-red-800'
          }`}>
            {result.success ? 'Formatted Phone Number:' : 'Error:'}
          </h3>
          <p className={`mt-1 ${
            result.success ? 'text-green-700 font-mono text-lg' : 'text-red-700'
          }`}>
            {result.message}
          </p>
        </div>
      )}
    </div>
  )
}

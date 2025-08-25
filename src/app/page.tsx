import { PhoneForm } from '@/components/PhoneForm'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Phone Number Formatter</h1>
          <p className="text-gray-600">Enter a US phone number to format it to E.164 standard</p>
        </div>
        <PhoneForm />
      </div>
    </div>
  );
}

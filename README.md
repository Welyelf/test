# Phone Number Formatter

A Next.js application that formats US phone numbers to E.164 standard format.

## Features

- 📱 Simple phone number input form
- 🔄 Server-side phone number formatting using Next.js Server Actions
- ✅ E.164 format output (+1XXXXXXXXXX)
- ❌ Error handling for invalid phone numbers
- 🧪 Comprehensive test suite with Jest

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Testing

Run the test suite:
```bash
npm test
```

## How it works

The application includes:

- **Server Action** (`src/lib/actions.ts`): `formatPhone()` function that converts US phone numbers to E.164 format
- **React Component** (`src/components/PhoneForm.tsx`): Form with phone input and result display
- **Main Page** (`src/app/page.tsx`): Clean, modern UI using Tailwind CSS
- **Tests** (`src/lib/__tests__/actions.test.ts`): 7 comprehensive tests covering various input formats and error cases

### Supported Input Formats

- `5551234567` → `+15551234567`
- `(555) 123-4567` → `+15551234567`
- `15551234567` → `+15551234567`
- `+1 (555) 123-4567` → `+15551234567`

### Error Handling

- Empty input
- Invalid number lengths
- Numbers not conforming to US format

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

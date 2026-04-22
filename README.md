# Shelivery Waiting List

A modern React/Next.js waiting list application for Shelivery - "Delivery costs, Shared."

## Features

- **Responsive Design**: Works on desktop and mobile
- **TypeScript**: Full type safety
- **Tailwind CSS**: Custom theme matching the provided HTML designs
- **Supabase Integration**: Backend for waiting list management
- **Reusable Components**: Component-based architecture
- **Two Pages**: Landing page and thank you page

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── layout.tsx         # Root layout with Navbar & Footer
│   ├── page.tsx           # Landing page
│   └── thank-you/         # Thank you page
│       └── page.tsx
├── components/            # Reusable components
│   ├── common/           # UI components (Button, Input, Logo)
│   ├── layout/           # Layout components (Navbar, Footer)
│   ├── landing/          # Landing page components
│   └── thank-you/        # Thank you page components
├── lib/                  # Utility libraries
│   └── supabase.ts       # Supabase client configuration
├── types/                # TypeScript type definitions
└── styles/               # Global styles
```

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set up Supabase

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Create a `waiting_list` table with the following SQL:

```sql
CREATE TABLE waiting_list (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

3. Copy your Supabase URL and anon key from Project Settings → API
4. Create a `.env.local` file:

```bash
cp .env.example .env.local
```

5. Update `.env.local` with your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Pages

### Landing Page (`/`)
- Hero section with animated visualization
- Email signup form with validation
- Feature cards explaining benefits
- Final call-to-action

### Thank You Page (`/thank-you`)
- Success confirmation
- Share options
- Back to home navigation

## Components

- **Button**: Primary, secondary, and outline variants
- **Input**: Email input with validation
- **Logo**: Shelivery logo with icon
- **Navbar**: Fixed navigation with links
- **Footer**: Site footer with links
- **EmailForm**: Form with Supabase integration

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

This is a Next.js app that can be deployed to:
- [Vercel](https://vercel.com) (recommended)
- [Netlify](https://netlify.com)
- Any static hosting with Node.js support

## Environment Variables

See `.env.example` for required variables.

## License

MIT

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Extract colors from your HTML files
        'primary': '#2563EB',
        'on-primary': '#ffffff',
        'background': '#FFFFFF',
        'surface': '#faf8ff',
        'on-surface': '#191b23',
        'text-main': '#111827',
        'text-muted': '#6B7280',
        'border-subtle': '#E5E7EB',
        'surface-container': '#ededf9',
        'surface-muted': '#F9FAFB',
        'accent-soft': '#EFF6FF',
        'secondary': '#006c49',
        'secondary-container': '#6cf8bb',
        'tertiary': '#943700',
        'tertiary-container': '#bc4800',
        'error': '#ba1a1a',
        'error-container': '#ffdad6',
      },
      borderRadius: {
        'DEFAULT': '0.5rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        'full': '9999px',
      },
      spacing: {
        'stack-sm': '12px',
        'stack-md': '24px',
        'section-gap': '60px',
        'container-padding': '20px',
      },
      fontFamily: {
        'sans': ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        'headline-lg': ['Plus Jakarta Sans'],
        'body-sm': ['Inter'],
        'body-md': ['Inter'],
        'micro-copy': ['Inter'],
        'headline-xl': ['Plus Jakarta Sans'],
        'label-bold': ['Inter']
      },
      fontSize: {
        'headline-lg': ['28px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'body-sm': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'micro-copy': ['12px', { lineHeight: '1.4', fontWeight: '400' }],
        'headline-xl': ['36px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
        'label-bold': ['14px', { lineHeight: '1', letterSpacing: '0.01em', fontWeight: '600' }]
      },
      boxShadow: {
        'ambient': '0 10px 40px -10px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
}

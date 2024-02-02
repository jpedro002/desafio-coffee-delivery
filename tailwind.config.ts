import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        },
        yellowPesonalized: {
          100: '#F1E9C9',
          200: '#DBAC2C',
          300: '#C47F17',
        },
        purplePesonalized: {
          100: '#EBE5F9',
          200: '#8047F8',
          300: '#4B2995',
        },
        background: '#FAFAFA',
      },
    },
  },
  plugins: [],
}
export default config

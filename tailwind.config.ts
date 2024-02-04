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
        baseBlackScale: {
          base_hover: '#D7D5D5',
          base_label: '#8D8686',
          base_text: '#574F4D',
          base_subtitle: '#403937',
          base_title: '#272221',
          white: '#FFFFFF',
          background: '#FAFAFA',
          base_card: '#F3F2F2',
          base_input: '#EDEDED',
          base_buttom: '#E6E5E5',
        },
      },
      fontFamily: {
        roboto: ['var(--font-roboto)', 'sans-serif'],
        baloo2: ['var(--font-baloo-2)', 'sans-serif'],
      },
      fontSize: {
        title_XS: '1.125rem',
        title_S: '1.25rem',
        title_M: '1.5rem',
        title_L: '2rem',
        title_XL: '3rem',
        text_XS: '0.75rem',
        text_S: '0.875rem',
        text_M: '1rem',
        text_L: '1.125rem',
      },
    },
  },
  plugins: [],
}
export default config

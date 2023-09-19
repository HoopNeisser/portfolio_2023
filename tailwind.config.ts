import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        "bebas": ["var(--bebas)"]
      },
      fontSize: {
        'sm': 'clamp(3.5rem, 16.8vw + -0.28rem, 14.07rem)',
        'base': 'clamp(4.38rem, 22.86vw + -0.77rem, 18.75rem)',
        'md': 'clamp(5.47rem, 31.05vw + -1.52rem, 24.99rem)',
        'lg': 'clamp(6.84rem, 42.12vw + -2.64rem, 33.32rem)',
        'xl': 'clamp(8.54rem, 57.04vw + -4.29rem, 44.41rem)',
        'xxl': 'clamp(10.68rem, 77.17vw + -6.68rem, 59.2rem)',
        'xxxl': 'clamp(13.35rem, 104.27vw + -10.11rem, 78.91rem)',
      }
    },
  },
  plugins: [],
}
export default config

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      textColor: {
        primary: '#FFB246',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        banner: 'linear-gradient(135deg, #FFF4E6 0%, #FEF0F1 100%)',
        divider: 'linear-gradient(to bottom, #ffffff, #FFB246, #ffffff)',
      },
      backgroundColor: {
        primary: '#FFB246',
      },
      boxShadow: {
        'button-primary': '0 2px 0 0 #DA8A1A',
      },
    },
  },
  plugins: [],
}
export default config

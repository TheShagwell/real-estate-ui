import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'purple-60': '#703BF7',
        'absolute-white':  '#fff',
        'grey-60':  '#999',
      },
      border: {
        'grey-15': '#262626'
      },
      padding: {
        'space-30': '30px',
        'space-20': '20px',
        'space-16': '16px',
        'space-12': '12px',
      },
      bgColor: {
        'dark-08': '#141414',
        'dark-10': '#1A1A1A',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config

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
        'real-px-20': '20px',
        'real-px-16': '16px',
        'real-px-12': '12px',
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

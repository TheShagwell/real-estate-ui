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
        'system-purple-60': '#703BF7',
        'system-absolute-white':  '#fff',
        'system-grey-60':  '#999',
      },
      border: {
        'grey-15': '#262626'
      },
      radius: {
        'radius-4': '4',
        'radius-8': '8',
        'radius-12': '12',
        'radius-16': '16',
        'radius-24': '24',
      },
      margin: {
        'margin-16': '16',
        'margin-20': '20',
        'margin-24': '24',
        'margin-32': '32',
        'margin-48': '48',
      },
      padding: {
        'space-30': '30px',
        'space-20': '20px',
        'space-16': '16px',
        'space-12': '12px',
      },
      backgroundColor: {
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

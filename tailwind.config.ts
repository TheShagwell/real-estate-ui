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
        'system-absolute-white':  '#ffffff',
        'system-grey-10':  '#1A1A1A',
        'system-grey-15': '#262626',
        'system-grey-60':  '#999999',
      },
      border: {
        'grey-20': '#242424',
      },
      radius: {
        'radius-4': '4px',
        'radius-8': '8px',
        'radius-12': '12px',
        'radius-16': '16px',
        'radius-24': '24px',
      },
      margin: {
        'margin-150': '150px',
        'margin-16': '16px',
        'margin-20': '20px',
        'margin-24': '24px',
        'margin-32': '32px',
        'margin-48': '48px',
      },
      padding: {
        'padding-80': '80px',
        'padding-30': '30px',
        'padding-20': '20px',
        'padding-16': '16px',
        'padding-12': '12px',
      },
      backgroundColor: {
        'dark-08': '#141414',
        'dark-10': '#1A1A1A',
      }
      
    },
  },
  plugins: [],
}
export default config

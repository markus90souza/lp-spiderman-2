import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    backgroundImage: {
      hero: "url('./../assets/bg-hero.jpg')",
    },

    fontFamily: {
      heading: 'var(--font-mohave)',
      paragraph: 'var(--font-roboto)',
    },
    extend: {
      maxWidth: {
        lp: '1248px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',

        divider: "url('./../assets/line.svg')",
      },
    },
  },
  plugins: [],
}
export default config

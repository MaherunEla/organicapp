/** @type {import('tailwindcss').Config} */
module.exports = {
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
      colors:{
        sea_green:'#274C5B',
        light_green:'#7EB693',
        yellow:'#EFD372',
        gray:'#D4D4D4',
        cream:'#F9F8F8',
        very_light_green:'#EFF6F1',
        dark_gray:'#525C60',
      },
      fontFamily:{
        roboto:["var(--roboto)"],
        yellowtail:["var(--yellowtail"],
        open_sen:["var(--open_sen)"]
      }
    },
  },
  plugins: [],
}

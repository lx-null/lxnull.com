import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        monospace: ['JetBrains Mono Variable', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            '*': { color: '#FFFF00', },
            ul: {
              li: {
                'list-style': 'disc',
                '&::marker': {
                  color: '#FFFF00'
                }
              }
            }
          }
        }
      }
    },
    colors: {
      foreground: '#FFFF00',
      background: '#000000'
    },
    screens: {
      'xs': '400px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    borderWidth: {
      '1': '1px',
      '3': '3px',
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

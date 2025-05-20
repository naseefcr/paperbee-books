import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // New primary colors
        rustOrange: '#C15A28',
        navyBlue: '#1D4E6F',
        goldenYellow: '#FCBD38',
        // New secondary colors
        lightBlue: '#9DCFD9',
        cream: '#FEF7E5',
        trueBlack: '#232323', // Renamed to avoid conflict with potential default 'black'

        // Semantic color mappings
        primaryAction: '#C15A28', // Rust Orange
        headerNavigation: '#1D4E6F', // Navy Blue
        pageBackground: '#FEF7E5', // Cream
        accentHighlight: '#9DCFD9', // Light Blue
        secondaryButtonIcon: '#FCBD38', // Golden Yellow
        mainText: '#232323', // Black
        secondaryText: '#1D4E6F', // Navy Blue for text

        // Keep existing vars for now, will be updated in globals.css
        background: "var(--background)",
        foreground: "var(--foreground)",

        // It's good practice to keep the old 'paperbee' colors for a while
        // in case some components are still using them directly,
        // but ideally, they should be phased out.
        'paperbee': {
          'yellow': '#FFD700',
          'blue': '#4169E1',
          'green': '#32CD32',
          'orange': '#FF8C00',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Shutterbox Films brand colors - Earthy tones
        earth: {
          brown: {
            50: "hsl(var(--earth-brown-50))",
            100: "hsl(var(--earth-brown-100))",
            200: "hsl(var(--earth-brown-200))",
            300: "hsl(var(--earth-brown-300))",
            400: "hsl(var(--earth-brown-400))",
            500: "hsl(var(--earth-brown-500))",
            600: "hsl(var(--earth-brown-600))",
            700: "hsl(var(--earth-brown-700))",
            800: "hsl(var(--earth-brown-800))",
            900: "hsl(var(--earth-brown-900))",
          },
          green: {
            50: "hsl(var(--earth-green-50))",
            100: "hsl(var(--earth-green-100))",
            200: "hsl(var(--earth-green-200))",
            300: "hsl(var(--earth-green-300))",
            400: "hsl(var(--earth-green-400))",
            500: "hsl(var(--earth-green-500))",
            600: "hsl(var(--earth-green-600))",
            700: "hsl(var(--earth-green-700))",
            800: "hsl(var(--earth-green-800))",
            900: "hsl(var(--earth-green-900))",
          },
          orange: {
            50: "hsl(var(--earth-orange-50))",
            100: "hsl(var(--earth-orange-100))",
            200: "hsl(var(--earth-orange-200))",
            300: "hsl(var(--earth-orange-300))",
            400: "hsl(var(--earth-orange-400))",
            500: "hsl(var(--earth-orange-500))",
            600: "hsl(var(--earth-orange-600))",
            700: "hsl(var(--earth-orange-700))",
            800: "hsl(var(--earth-orange-800))",
            900: "hsl(var(--earth-orange-900))",
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Core System Colors */
        background: 'var(--color-background)', /* slate-50 */
        foreground: 'var(--color-foreground)', /* slate-900 */
        border: 'var(--color-border)', /* slate-200 */
        input: 'var(--color-input)', /* white */
        ring: 'var(--color-ring)', /* blue-800 */
        
        /* Card & Surface Colors */
        card: {
          DEFAULT: 'var(--color-card)', /* white */
          foreground: 'var(--color-card-foreground)' /* slate-900 */
        },
        popover: {
          DEFAULT: 'var(--color-popover)', /* white */
          foreground: 'var(--color-popover-foreground)' /* slate-900 */
        },
        
        /* Muted Colors */
        muted: {
          DEFAULT: 'var(--color-muted)', /* slate-100 */
          foreground: 'var(--color-muted-foreground)' /* slate-500 */
        },
        
        /* Brand Colors */
        primary: {
          DEFAULT: 'var(--color-primary)', /* blue-800 */
          foreground: 'var(--color-primary-foreground)' /* white */
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', /* slate-600 */
          foreground: 'var(--color-secondary-foreground)' /* white */
        },
        
        /* Action Colors */
        accent: {
          DEFAULT: 'var(--color-accent)', /* orange-500 */
          foreground: 'var(--color-accent-foreground)' /* white */
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', /* red-600 */
          foreground: 'var(--color-destructive-foreground)' /* white */
        },
        
        /* Status Colors */
        success: {
          DEFAULT: 'var(--color-success)', /* emerald-600 */
          foreground: 'var(--color-success-foreground)' /* white */
        },
        warning: {
          DEFAULT: 'var(--color-warning)', /* amber-600 */
          foreground: 'var(--color-warning-foreground)' /* white */
        },
        error: {
          DEFAULT: 'var(--color-error)', /* red-600 */
          foreground: 'var(--color-error-foreground)' /* white */
        },
        
        /* Industrial Specific Colors */
        industrial: {
          blue: 'var(--color-industrial-blue)', /* blue-800 */
          gray: 'var(--color-industrial-gray)', /* slate-600 */
          orange: 'var(--color-safety-orange)' /* orange-600 */
        },
        surface: 'var(--color-surface)', /* slate-100 */
        'text-primary': 'var(--color-text-primary)', /* slate-900 */
        'text-secondary': 'var(--color-text-secondary)' /* slate-500 */
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }]
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'
      },
      borderRadius: {
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem'
      },
      boxShadow: {
        'professional': '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'professional-lg': '0 4px 12px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1)',
        'industrial': '0 2px 8px rgba(30, 64, 175, 0.1)',
        'emergency': '0 0 20px rgba(220, 38, 38, 0.3)'
      },
      animation: {
        'hydraulic': 'hydraulic 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'emergency': 'emergency-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out'
      },
      keyframes: {
        hydraulic: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.98)' },
          '100%': { transform: 'scale(1)' }
        },
        'emergency-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        }
      },
      transitionTimingFunction: {
        'hydraulic': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'industrial': 'cubic-bezier(0.4, 0, 0.2, 1)'
      },
      backdropBlur: {
        'professional': '8px'
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(0, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(250px, 1fr))'
      },
      aspectRatio: {
        'product': '4/3',
        'hero': '16/9'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-animate')
  ]
}
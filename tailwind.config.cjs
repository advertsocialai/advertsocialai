module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6549f6',
        secondary: '#ff611d',
        dark: '#222222',
      },
      maxWidth: {
        '8xl': '1600px'
      },
      fontFamily: {
        sans: ['Outfit', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Schibsted Grotesk', 'serif']
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(47deg, #6549f6 0%, #ff611d 100%)',
      }
    },
  },
  plugins: [],
}

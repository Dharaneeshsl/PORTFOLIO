module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0f0f0f',
        accent: '#00ffe7', // Neon blue/teal accent
        text: '#ffffff',
        subtext: '#cccccc',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['Fira Mono', 'ui-monospace', 'SFMono-Regular'],
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        neon: '0 0 8px #00ffe7, 0 0 16px #00ffe7',
      },
      borderRadius: {
        glass: '1.5rem',
      },
      height: {
        'screen-minus-navbar': 'calc(100vh - 64px)', // Adjust 64px if navbar height changes
      },
    },
  },
  plugins: [],
}; 
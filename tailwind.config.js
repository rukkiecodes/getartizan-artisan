module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lavender: "#8C2F88",
        purple: "#906EC2",
        light: "#CAB3DF",
        gray:"#f2f4f7",
        blue: "#6545E4",
        red: "#Ad4663"

      },
    },
    screens: {
      'sm': { 'max': '700px' },
      'md': '700px',
      'lg': '1024px',
      'xl': '1280px',
    }
  },
  plugins: [],
}

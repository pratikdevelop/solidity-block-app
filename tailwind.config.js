/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      gradient: 'linear-gradient(to right top, #2f28d3, #5c25d7, #7c22da, #971ddd, #b018df, #d400c9, #ee00b3, #ff009f, #ff3076, #ff5b52, #ff8037, #eb9f2a)',

      }
    },
    fontFamily:{
      sans:['Roboto',"sans-serif"]
    }
  },
  plugins: [],
}
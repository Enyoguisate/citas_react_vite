/** @type {import('tailwindcss').Config} */
module.exports = {
    media: false,
    content: [
        './public/**/*.html',
        './src/**/*.{js,jsx,ts,tsx,vue}',
        './pages/**/*.{html,js}',
        './components/**/*.{html,js}',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
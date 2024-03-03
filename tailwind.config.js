/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundColor: {
                'light': '#F7F9FC',
                'dark': '#202634',
                'card':'#293042'
            },
        },
    },
    darkMode: "class",
    plugins: [],
}


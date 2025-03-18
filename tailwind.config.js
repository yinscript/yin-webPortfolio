/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                typewriter: "typewriter 2s steps(11) forwards",
                'infinite-scroll': 'infinite-scroll 25s linear infinite',
            },
            keyframes: {
                typewriter: {
                    to: {
                        left: "100%"
                    }
                },
                'infinite-scroll': {
                  from: { transform: 'translateX(0)' },
                  to: { transform: 'translateX(-100%)' },
                }
            }
        },
    },
    plugins: [
        require('taos/plugin')
    ],
    safelist: [
        '!duration-[0ms]',
        '!delay-[0ms]',
        'html.js :where([class*="taos:"]:not(.taos-init))'
    ],
    content: {
        transform: (content) => content.replace(/taos:/g, ''),
        relative: true,
    },
}


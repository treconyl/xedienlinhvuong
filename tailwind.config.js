module.exports = {
    content: [
        "./src/**/*.{html,js}",
        "./dist/**/*.{html,js}",
    ],
    theme: {
        extend: {
            colors: {
                'cornflowerblue': {
                    '400' : '#437EC7',
                    '500' : '#3560AB'
                },
            },
            backgroundColor: {
                'cornflowerblue': {
                    '400' : '#437EC7',
                    '500' : '#3560AB'
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/line-clamp'),
    ],
}


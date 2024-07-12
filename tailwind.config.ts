import type {Config} from "tailwindcss";
import {nextui} from "@nextui-org/react";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1350px',
        },
        extend: {
            width: {
                '37': '154px',
                '2xl': '1350px',
            },
            maxWidth:{
                '2xl': '1350px',
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontFamily: {
                comfortaa: ['var(--font-comfortaa)'],
                nunitoSans: ['var(--font-nunito_sans)'],
            },
        },
    },
    darkMode: "class",
    plugins: [nextui({
            defaultTheme: "light",
            defaultExtendTheme: "light",
            themes: {
                light: {
                    colors: {
                        primary: {
                            DEFAULT: "rgba(134, 124, 244, 1)",
                            foreground: "#FFFFFFFF",
                        },
                        default: {
                            DEFAULT: "rgb(255,255,255)",
                            foreground: "#867CF4",
                        },
                        focus: "rgba(134, 124, 244, 1)",
                    },
                },
            },
        }
    )],
};
export default config;

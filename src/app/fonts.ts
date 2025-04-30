import { Inter, Roboto } from "next/font/google";

export const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter'
})

export const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-roboto',
})
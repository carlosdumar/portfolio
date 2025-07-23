import { Inter, Roboto, Bungee, Open_Sans } from "next/font/google";

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

export const bungee = Bungee({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-bungee',
})

export const openSans = Open_Sans({
    subsets: ['latin'],
    variable: '--font-open-sans',
    weight: ['300', '400'],
})
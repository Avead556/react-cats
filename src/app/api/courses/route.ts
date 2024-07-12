import {NextResponse} from 'next/server'

export async function GET(request: Request) {
    return NextResponse.json([
        {
            title: "Курс «Тигидик»",
            priceFormated: "600 грн",
            price: 600,
            image: "/image/curses/cat1.png",
            active: false,
        },
        {
            title: "Курс «Я не їв вічність»",
            priceFormated: "350 грн",
            price: 350,
            image: "/image/curses/cat2.png",
            active: false,
        },
        {
            title: "Курс «Хопа»",
            priceFormated: "1000 грн",
            price: 1000,
            image: "/image/curses/cat3.png",
            active: false,
        },
        {
            title: "Курс «Кусь»",
            priceFormated: "50 грн",
            price: 50,
            image: "/image/curses/cat4.png",
            active: false,
        },
        {
            title: "Курс «У всьому винен пес»",
            priceFormated: "600 грн",
            price: 600,
            image: "/image/curses/cat5.png",
            active: false,
        },
    ])
}
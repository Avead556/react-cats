import {NextResponse} from 'next/server'

export async function GET(request: Request) {
    return NextResponse.json([
        {
            image: 'cat1.png',
            title: '~280',
            description: 'Виготовлених дизайнерських крісел'
        },
        {
            image: 'cat2.png',
            title: '~1300',
            description: 'Проведених садівничих робіт'
        },
        {
            image: 'cat3.png',
            title: '~340',
            description: 'Влаштованих нічних концертів'
        },
        {
            image: 'cat4.png',
            title: '~90000',
            description: 'Виконаних невгамовних тигидиків'
        }
    ])
}
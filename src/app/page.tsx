import BlockCats from "@/app/components/blocks/block-cats/block-cats";

async function getPage() {
    const response = await fetch('http://localhost:3000/api/cats')

    return response.json()
}

export default async function Home() {

    const data = await getPage();

    return (
        <BlockCats cats={data}></BlockCats>
    )
}

import CatCard from "@/app/components/blocks/card-cat/cat-card";
import {Cat} from "@/types";
import "./block-cats.scss"

export default function BlockCats({cats}: { cats: Cat[] }) {
    return (
        <section className="block-cats pt-[180px] pb-[188px]">
            <div className="container mx-auto ">
                <div className="grid justify-items-stretch">
                    <h3 className="block-cats__title justify-self-center text-center font-comfortaa font-bold text-6xl w-9/12">
                        Онлайн-курси котячої творчості
                    </h3>
                    <p className="block-cats__discription justify-self-center text-center font-nunitoSans w-7/12 pt-2.5 pb-2.5">
                        Навчимо вашого котика основам створення цікавого життя, сповненого веселих та непередбачуваних
                        моментів для вас та ваших рідних.
                    </p>
                </div>
                <ul className="block-cats__list flex items-end -mx-[15px] pt-2.5">
                    {
                        cats?.map((cat: Cat, index: number) => {
                            return (
                                <li key={index}
                                    className="block-cats__list-item w-4/12 px-[15px]"
                                >
                                    <CatCard
                                        image={cat.image}
                                        title={cat.title}
                                        description={cat.description}
                                    />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}
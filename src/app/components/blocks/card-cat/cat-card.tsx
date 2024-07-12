import {Cat} from "@/types";
import "./card-cat.scss"

export default function CatCard({image, title, description}: Cat) {

    return (
        <article className="cat-card relative overflow-hidden rounded-2xl h-full">
            <div className="cat-card__image">
                <img src={`image/${image}`} alt=""/>
            </div>
            <div className="cat-card__content absolute left-0 right-0 bottom-0 top-0 p-5 flex flex-col justify-end">
                <div className="cat-card__title font-comfortaa text-6xl">{title}</div>
                <div className="cat-card__description font-nunitoSans w-9/12">{description}</div>
            </div>
        </article>
    );
}
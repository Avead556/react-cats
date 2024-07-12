import "./cats.scss"
import Cat from "@/app/components/blocks/cats/cat";

const CatsBlock = () => {

    return (
        <div className="cats mt-[100px]">
            <h1 className="font-comfortaa">Ваші котики:</h1>
            <Cat></Cat>
            <Cat></Cat>
        </div>
    );
};

export default CatsBlock;

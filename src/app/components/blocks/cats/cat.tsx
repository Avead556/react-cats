import {Card, CardBody} from "@nextui-org/card";
import {Button} from "@nextui-org/react";
import "./cats.scss"

const Cat = () => {

    return (
        <Card className="max-w-[1350px] mt-[40px] h-[311px] shadow-none">
            <CardBody className="grid grid-cols-2 overflow-hidden cats">
                <div className=" flex ml-[60px] content-center justify-start cats__info">
                    <div className="self-center">
                        <img src="/image/curses/image-29.png" alt=""/>
                    </div>
                    <div className="cats__description self-center ml-[30px] ">
                        <h2 className="font-comfortaa font-bold">Мурчик Муркевич</h2>
                        <div className="mt-1">
                            <p className="font-comfortaa text-xl font-semibold">2 роки</p>
                            <p className="font-comfortaa text-base font-semibold mt-2">+380 345678907</p>
                        </div>
                    </div>
                </div>
                <div className="flex ml-[68px]">
                    <div className="self-center w-full">
                        <p className="cats__label font-comfortaa">Обрані курси:</p>
                        <div className="cats__card mt-2.5">
                            <Card className="cats__card-content">
                                <CardBody className="flex justify-center pl-[48px]">
                                    <p className="cats__card-course font-comfortaa">Курс «Тигидик»</p>
                                    <p className="cats__card-course font-comfortaa">Курс «У всьому винен пес»</p>
                                </CardBody>
                            </Card>
                            <Button color="primary" href="#" variant="solid" radius="full" className="w-full mt-5">
                                Додати новий курс
                            </Button>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
};

export default Cat;

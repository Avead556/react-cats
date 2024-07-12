"use client"
import "./add-cat.scss"
import {Card, CardBody} from "@nextui-org/card";
import {Button} from "@nextui-org/react";
import AddCatModal from "@/app/components/blocks/add-cat/add-cat-modal";
import {useState} from "react";
import CatsBlock from "@/app/components/blocks/cats/cats";

export default function AddCat() {
    const [isOpen, setIsOpen] = useState(false);

    function isOpenHandler() {
        setIsOpen(true);
    }


    return (
        <section className="pt-[140px] pb-[93px] ">
            <div className="container mx-auto">
                <h1 className="text-[40px] font-bold font-comfortaa">Вітаємо в особистому кабінеті</h1>
                <CatsBlock></CatsBlock>
                <Card className="cat-add-block h-[251px] max-w-[1350px] mt-[60px]">
                    <CardBody className="flex overflow-hidden">
                        <div
                            className="absolute left-0 right-0 top-[60px] p-5 flex flex-col justify-end max-w-[600px] pl-[100px]"
                        >
                            <p className="text-[28px] font-bold font-comfortaa text-white max-w-[437px]">
                                Додати нового котика та зареєструвати на курс
                            </p>
                            <Button
                                color="default"
                                variant="solid"
                                radius="full"
                                className="h-11 w-37 mt-4 font-bold"
                                onPress={isOpenHandler}
                            >
                                Додати котика
                            </Button>
                        </div>

                        <div>
                            <span className="cat-add-block__circle"></span>
                            <span className="cat-add-block__second-circle"></span>
                            <img src="/image/dashboard-cat.png" alt="" style={
                                {
                                    maxWidth: "374px",
                                    position: 'absolute',
                                    right: "162px",
                                    top: 0
                                }
                            }/>
                        </div>

                    </CardBody>
                </Card>
            </div>
            <AddCatModal isOpen={isOpen} setIsOpen={setIsOpen}></AddCatModal>
        </section>
    )
}
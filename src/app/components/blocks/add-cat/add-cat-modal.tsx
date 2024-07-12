import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/react";
import {Dispatch, memo, SetStateAction, useEffect, useState} from "react";
import CourseBlock from "@/app/components/blocks/add-cat/course/course-block";
import CourseFormBlock from "@/app/components/blocks/add-cat/course/course-form-block";
import {CourseItem} from "@/types";

interface Props {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
}


async function getCourses() {
    const response = await fetch('http://localhost:3000/api/courses')

    return response.json()
}

const AddCatModal = (props: Props) => {
    const {isOpen, setIsOpen} = props;
    const [list, setList] = useState<CourseItem[]>([]);
    const [formData, setFormData] = useState({
        lastName: '',
        firstName: '',
        age: '',
        phone: ''
    });

    useEffect(() => {
        const fetchCourses = async () => {
            const data = await getCourses();

            setList(data);
        };

        if (isOpen) {
            fetchCourses();
        }
    }, [isOpen]);

    const isValid = () => {
        let chosenCourses = false;
        list.forEach((item: CourseItem) => {
            if (item.active) {
                chosenCourses = true
            }
        })
        if (!formData.firstName) {
            chosenCourses = false
        }
        if (!formData.lastName) {
            chosenCourses = false

        }
        if (!formData.phone) {
            chosenCourses = false

        }
        if (!formData.age) {
            chosenCourses = false

        }
        return chosenCourses
    }

    const totalCalc = () => {
        let total = 0;

        list.forEach((item: CourseItem) => {
            if (item.active) {
                console.log(11)
                total += item?.price
            }
        })
        return total;
    }


    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                placement="top-center"
                className="max-w-[1100px] max-h-[1090px]"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 px-20">
                                <div>
                                    <h2 className="font-comfortaa">Додати нового котика та зареєструвати на курс</h2>
                                    <h3 className="max-w-[680px]">
                                        Для реєстрації котика на курс заповніть, будь ласка, форму нижче.
                                        Всі поля обов’язкові для заповнення.
                                    </h3>
                                </div>
                            </ModalHeader>
                            <ModalBody className="px-20">
                                <div>
                                    <label
                                        className="mb-3 block font-comfortaa text-lg text-[#07074D] font-bold"
                                    >
                                        Дані котика:
                                    </label>
                                    <CourseFormBlock formData={formData} setFormData={setFormData}>
                                    </CourseFormBlock>
                                </div>
                                <CourseBlock
                                    list={list}
                                    setList={setList}
                                />
                            </ModalBody>
                            <ModalFooter className="justify-between px-20">
                                <div className="total-block font-comfortaa">
                                    Загальна сума: <span>{totalCalc()} грн</span>
                                </div>
                                <Button color="primary" onPress={onClose} isDisabled={!isValid()}>
                                    Зареєструватися
                                </Button>
                            </ModalFooter>
                        </>
                    )
                    }
                </ModalContent>
            </Modal>
        </>
    )
}

export default AddCatModal;
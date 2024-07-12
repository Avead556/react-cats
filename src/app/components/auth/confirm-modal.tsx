import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/react";
import {Input} from "@nextui-org/input";
import {Component, Dispatch, SetStateAction} from "react";
import {useEffect} from "react";

interface Props {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function RegisterModal(props: Props) {

    const {isOpen, setIsOpen} = props;

    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                placement="top-center"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                Реєстрація особистого кабінету
                                <p>Реєстрація особистого кабінету</p>
                            </ModalHeader>
                            <ModalBody>
                                <Input
                                    autoFocus
                                    placeholder="Введіть код"
                                    variant="bordered"
                                />
                            </ModalBody>
                            <ModalFooter className="flex flex-col items-center">
                                <Button color="primary" onPress={onClose} isDisabled>
                                    Зареєструватися
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}
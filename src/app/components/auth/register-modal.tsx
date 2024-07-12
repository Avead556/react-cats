import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/react";
import {Input} from "@nextui-org/input";
import {Dispatch, memo, SetStateAction, useCallback, useState} from "react";

interface Props {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
}


const MyButton = memo(function myButton(props: any) {
    return (
        <button onClick={props.onclicked}>123</button>
    )
})

export default function RegisterModal(props: Props) {
    const {isOpen, setIsOpen} = props;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onclickedHandler = useCallback(function () {
        console.log(123);
    }, []);

    function emailHandler(event: any) {
        setEmail(event?.target.value)
    }

    function passwordHandler(event: any) {
        setPassword(event?.target.value)
    }

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
                                    placeholder="Електронна адреса"
                                    variant="bordered"
                                    value={email}
                                    onChange={emailHandler}
                                />
                                <Input
                                    placeholder="Пароль"
                                    type="password"
                                    variant="bordered"
                                    value={password}
                                    onChange={passwordHandler}

                                />
                            </ModalBody>
                            <ModalFooter className="flex flex-col items-center">
                                <Button color="primary" onPress={onClose} isDisabled>
                                    Зареєструватися
                                </Button>
                                <MyButton onclicked={onclickedHandler}></MyButton>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}
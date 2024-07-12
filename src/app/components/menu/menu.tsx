"use client"
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
    Dropdown,
    DropdownTrigger, DropdownMenu, DropdownItem
} from "@nextui-org/react";
import React, {useState} from "react";
import Logo from "./logo"
import RegisterModal from "@/app/components/auth/register-modal";


export default function Menu() {

    const menuLinks = [
        {
            'title': 'Вступ',
            'link': '#',
        },
        {
            'title': 'Вартість',
            'link': '#',
        },
        {
            'title': 'Як ми вчимо',
            'link': '#',
        },
        {
            'title': 'Про школу',
            'link': '#',
        },
        {
            'title': 'Контакти',
            'link': '#',
        },
    ]
    const languages = [
        {
            key: "ua",
            title: "Укр",
        },
        {
            key: "en",
            title: "Анг",
        },
    ]

    const [selectedKeys, setSelectedKeys] = React.useState(new Set(["ua"]));

    const selectedValue = React.useMemo(
        () => {
            const selectedLanguages = languages?.filter((language) => {
                return selectedKeys.has(language.key);
            });

            return selectedLanguages.map((language) => language.title).join(", ").replaceAll("_", " ")
        },
        [selectedKeys]
    );

    const [isOpen, setIsOpen] = useState(false);

    function isOpenHandler() {
        setIsOpen(true);
    }

    return (
        <React.Fragment>
            <Navbar
                classNames={{
                    base: "bg-background/0 max-w-2xl mx-auto",
                    wrapper: "px-0",
                    brand: "whitespace-normal",
                }}
                maxWidth={"full"}
            >
                <NavbarBrand>
                    <Logo></Logo>
                    <div className="font-bold  font-comfortaa text-inherit w-20">Школа котиків</div>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    {
                        menuLinks?.map((item, index) => {
                            return (
                                <NavbarItem key={index}>
                                    <Link color="foreground" href={item.link}>
                                        {item.title}
                                    </Link>
                                </NavbarItem>
                            )
                        })
                    }

                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <Dropdown>
                        <NavbarItem>
                            <DropdownTrigger>
                                <Button
                                    disableRipple
                                    className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                                    radius="sm"
                                    variant="light"
                                >
                                    {selectedValue}
                                </Button>
                            </DropdownTrigger>
                        </NavbarItem>
                        <DropdownMenu
                            variant="flat"
                            disallowEmptySelection
                            selectionMode="single"
                            selectedKeys={selectedKeys}
                            onSelectionChange={setSelectedKeys}
                        >
                            {
                                languages?.map((item) => {
                                    return (
                                        <DropdownItem key={item.key}>{item.title}</DropdownItem>
                                    )
                                })
                            }

                        </DropdownMenu>
                    </Dropdown>
                </NavbarContent>


                <NavbarContent justify="end">
                    <NavbarItem className="hidden lg:flex">
                        <Button as={Link} color="primary" href="#" variant="flat" radius="full" className="h-11 w-37">
                            Увійти
                        </Button>
                    </NavbarItem>
                    <NavbarItem>
                        <Button color="primary" href="#" variant="solid" radius="full" className="h-11 w-37"
                                onPress={isOpenHandler}
                        >
                            Реєстрація
                        </Button>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
            <RegisterModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            >
            </RegisterModal>
        </React.Fragment>
    );
}
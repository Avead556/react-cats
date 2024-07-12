import React, {Dispatch, memo, SetStateAction, useState} from 'react';
import {Input} from "@nextui-org/input";

interface Props {
    formData: {
        lastName: string,
        firstName: string,
        age: string,
        phone: string,
    }
    setFormData: Dispatch<SetStateAction<any>>
}

const FormInput = memo(function formInput(props: any) {
    return (
        <Input
            classNames={{
                inputWrapper: "cat-form__input-wrapper",
                input: "cat-form__input"
            }}
            placeholder={props.placeholder}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            className="max-w-[460px] pb-[20px]"
        ></Input>
    )
})


const CourseFormBlock = (props: Props) => {
    const {formData, setFormData} = props;

    const handleChange = (e: any) => {
        const {name, value} = e.target;
        setFormData((prevFormData: any) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    return (
        <div className="grid grid-cols-2 gap-4 cat-form place-content-stretch">
            <FormInput
                placeholder="Прізвище"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
            />
            <FormInput
                placeholder="Ім’я"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
            />
            <FormInput
                placeholder="Вік"
                name="age"
                value={formData.age}
                onChange={handleChange}
            />
            <FormInput
                placeholder="Номер котофону"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
            />
        </div>
    );
};

export default CourseFormBlock;

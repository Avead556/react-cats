import React, {Dispatch, SetStateAction} from "react";
import {CourseItem} from "@/types";


interface Props {
    list: CourseItem[];
    setList: Dispatch<SetStateAction<CourseItem[]>>;
}

export default function CourseBlock(props: Props) {
    const {list, setList} = props;

    function setActive(item: CourseItem) {

        setList((prevList) => {
            return prevList.map((listItem) => {
                const updatedItem = {...listItem};
                if (updatedItem.title === item.title) {
                    updatedItem.active = !item.active;
                }
                return updatedItem;
            });
        });
    }

    return (
        <div>
            <label
                className="mb-3 block font-comfortaa text-lg text-[#07074D] font-bold"
            >
                Оберіть курси:
            </label>

            <ul className="grid gap-x-8 gap-y-4 grid-cols-2">
                {list?.map((item, index) => (
                    <li
                        key={index}
                        onClick={() => setActive(item)}
                        className="w-[460px] h-[148px] rounded-[10px] relative overflow-hidden grid grid-cols-2 cursor-pointer"
                        style={{backgroundColor: '#867CF4'}}
                    >
                        <div className="pl-6 pt-6">
                            <p className="course-item__title fixed font-comfortaa font-bold">
                                {item.title}
                            </p>
                            <p className="course-item__price font-comfortaa font-bold absolute bottom-6">
                                {item.price}
                            </p>
                        </div>
                        <div>
                            <span className="course-item__circle"></span>
                            <span className="course-item__second-circle"></span>
                            <img
                                src={item.image}
                                alt=""
                                style={{
                                    maxWidth: "158px",
                                    position: 'absolute',
                                    right: "34px",
                                }}
                            />
                        </div>
                        {item.active ? (
                            <img
                                className="course-item__checkbox"
                                src="/image/checkbox/checked-circle.svg"
                                alt=""
                            />
                        ) : (
                            <img
                                className="course-item__checkbox"
                                src="/image/checkbox/unchecked-circle.png"
                                alt=""
                            />
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

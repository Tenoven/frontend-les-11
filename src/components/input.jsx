import React from 'react';
import {useForm} from "react-hook-form";

function Input({titel, id, value, name, onchange }) {
    const { register } = useForm();
    return (
        <>
            <div className={"Input_class"}>
                <label htmlFor={id}>{titel}</label>
                <input
                    type="text"
                    id={id}
                    value={value}
                    name={name}
                    onChange={onchange}
                />
            </div>
        </>
    );
}

export default Input;
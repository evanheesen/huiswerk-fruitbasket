import React from "react";

function FormItem({label, inputType, value, labelName, onChange, name1}) {

    if (label === "") {
        return (
            <div>
                <input name={name1} type={inputType} id={labelName} value={value} onChange={onChange}/>
                <label>{labelName}</label>
            </div>
        );
    } else {
        return (
            <div>
                <label>{label}</label>
                <input name={name1} type={inputType} id={label} value={value} onChange={onChange}/>
            </div>
        );
    }

}

export default FormItem;

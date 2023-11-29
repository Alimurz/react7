import React from "react";
const Input = (props) =>{
    const{
        className,
        onChange,
        placeholder,
    } = props
    return(
        <div>
            <input 
            className={className}
            onChange={onChange}
            placeholder={placeholder} 
            />
        </div>
    )
}
export default Input;
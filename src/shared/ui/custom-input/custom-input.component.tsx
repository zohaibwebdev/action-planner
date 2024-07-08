import React, { FC } from 'react'
import { CustomInputProps } from './custom-input.types'
import { defaultInputStyles, defaultLabelStyles } from './custom-input.styles'

const CustomInput: FC<CustomInputProps> = ({
    label,
    labelClasses,
    className,
    placeholder,
    required,
    changeEvent,
    defaultValue,
    errorMessage,
}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeEvent?.(e)
    }
    return (
        <div className="flex flex-col gap-1">
            {label && <label className={`${defaultLabelStyles} ${labelClasses}`}>{label}:</label>}
            <input
                type="text"
                defaultValue={defaultValue}
                placeholder={placeholder}
                required={required}
                onChange={handleChange}
                className={`${defaultInputStyles} ${className}`}
            />
            {errorMessage && <div className="text-sm text-red-600 font-bold">{errorMessage}</div>}
        </div>
    )
}

export default CustomInput

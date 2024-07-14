import React, { FC } from 'react'
import { ICustomButton } from './custom-button.types'
import { customButtonStyles, customButtonSize } from './custom-button.styles'

const CustomButton: FC<ICustomButton> = ({ children, type, onClick, isDisable, hidden, size, classNames }) => {
    if (hidden) {
        return null
    }
    return (
        <button
            className={`${customButtonStyles[type]}  ${customButtonSize[size]} ${classNames}`}
            disabled={isDisable}
            onClick={() => onClick?.()}
        >
            {children}
        </button>
    )
}

export default CustomButton

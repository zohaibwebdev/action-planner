import React, { FC } from 'react'
import { ICustomButton } from './custom-button.types'
import { customButtonStyles, customButtonSize } from './custom-button.styles'

const CustomButton: FC<ICustomButton> = ({ children, type, onClick, isDisable, hidden, size }) => {
    if (hidden) {
        return null
    }
    return (
        <button
            className={`${customButtonStyles[type]} ${customButtonSize[size]}`}
            disabled={isDisable}
            onClick={() => onClick?.()}
        >
            {children}
        </button>
    )
}

export default CustomButton

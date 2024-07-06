import React, { FC } from 'react'
import { customButtonStyles, ICustomButton } from './custom-button.types'

const CustomButton: FC<ICustomButton> = ({ children, type, onClick, isDisable, hidden }) => {
    if (hidden) {
        return null
    }
    return (
        <button className={`${customButtonStyles[type]}`} disabled={isDisable} onClick={() => onClick?.()}>
            {children}
        </button>
    )
}

export default CustomButton

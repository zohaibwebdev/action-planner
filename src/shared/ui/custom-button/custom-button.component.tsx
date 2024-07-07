import React, { FC } from 'react'
import { ICustomButton } from './custom-button.types'
import { customButtonStyles } from './custom-button.styles'

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

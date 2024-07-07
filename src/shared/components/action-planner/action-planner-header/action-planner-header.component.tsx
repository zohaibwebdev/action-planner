import CustomButton from '@/shared/ui/custom-button/custom-button.component'
import { CustomButtonType, CustomButtonSize } from '@/shared/ui/custom-button/custom-button.types'
import React from 'react'

const Header = () => {
    const handle = () => {
        console.log('click')
    }

    return (
        <div className="flex justify-between items-center">
            <h1 className="font-extrabold text-3xl">Action Planner</h1>
            <CustomButton type={CustomButtonType.PRIMARY} onClick={handle} size={CustomButtonSize.MD} classNames="shadow-lg">
                <span className="text-xl mr-2">+</span>Add Action
            </CustomButton>
        </div>
    )
}

export default Header
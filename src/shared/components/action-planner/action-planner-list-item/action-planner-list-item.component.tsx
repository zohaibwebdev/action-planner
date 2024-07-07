import CustomButton from '@/shared/ui/custom-button/custom-button.component'
import { CustomButtonType, CustomButtonSize } from '@/shared/ui/custom-button/custom-button.types'
import React from 'react'
import ProgressCircle from '../../progress-circle/progress-circle.component'
import ActionButtons from '../action-planner-list-item-buttons/action-planner-list-item-buttons.component'

const ActionListItem = () => {
    return (
        <div className="w-full bg-white p-2 rounded-lg flex justify-around items-center mt-5">
            <div>
                <span className="text-gray-400 font-light text-sm">Task</span> <br />
                <h1>code code code</h1>
            </div>
            <div>
                <span className="text-gray-400 font-light text-sm">Priorty</span> <br />
                <h1 className="text-red-500 font-bold text-[15px]">High</h1>
            </div>
            <CustomButton type={CustomButtonType.SECONDARY} size={CustomButtonSize.XS}>
        To Do
            </CustomButton>
            <ProgressCircle percent={100} />
            <ActionButtons />
        </div>
    )
}

export default ActionListItem
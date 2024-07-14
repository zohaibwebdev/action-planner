import CustomButton from '@/shared/ui/custom-button/custom-button.component'
import { CustomButtonType, CustomButtonSize } from '@/shared/ui/custom-button/custom-button.types'
import React, { FC } from 'react'
import ProgressCircle from '../../progress-circle/progress-circle.component'
import ActionButtons from '../action-planner-list-item-buttons/action-planner-list-item-buttons.component'
import { ActionListItemProps } from './action-planner-list-item.types'
import { useActionPlannerContext } from '@/context/action-planner-context/action-planner-context'
import { priorityTypes, progressTypes } from '@/context/action-planner-context/action-planner-context-interfaces'

const ActionListItem: FC<ActionListItemProps> = ({ action, id, priority, progress }) => {
    const { updateProgress } = useActionPlannerContext()
    let percent
    switch (progress) {
    case progressTypes.TODO:
        percent = 0
        break
    case progressTypes.INPROGRESS:
        percent = 50
        break
    case progressTypes.DONE:
        percent = 100
        break
    default:
        percent = 0
    }

    function handleUpdateProgress() {
        updateProgress(id, progress as progressTypes)
    }

    return (
        <div className="w-full bg-white p-2 rounded-lg flex justify-around items-center mt-5">
            <div className="flex-none w-2/6">
                <span className="text-gray-400 font-light text-sm">Task</span> <br />
                <h1>{action}</h1>
            </div>
            <div className="flex-none w-1/6">
                <span className="text-gray-400 font-light text-sm">Priority</span> <br />
                <h1
                    className={`font-bold text-[15px] ${
                        priority === priorityTypes.HIGH
                            ? 'text-red-500'
                            : priority === priorityTypes.MEDIUM
                                ? 'text-yellow-500'
                                : 'text-green-500'
                    }`}
                >
                    {priority}
                </h1>
            </div>
            <div className="flex-none w-1/6">
                <CustomButton type={CustomButtonType.SECONDARY} size={CustomButtonSize.XS} onClick={handleUpdateProgress}>
                    {progress}
                </CustomButton>
            </div>
            <div className="flex-none w-1/6">
                <ProgressCircle percent={percent} />
            </div>
            <div className="flex-none w-1/6">
                <ActionButtons id={id} />
            </div>
        </div>
    )
}

export default ActionListItem

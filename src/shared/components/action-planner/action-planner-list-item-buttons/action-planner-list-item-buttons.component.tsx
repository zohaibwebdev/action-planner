import CustomButton from '@/shared/ui/custom-button/custom-button.component'
import { CustomButtonType, CustomButtonSize } from '@/shared/ui/custom-button/custom-button.types'
import DeleteIcon from '@/shared/icons/delete-icon'
import EditIcon from '@/shared/icons/edit-icon'
import React, { FC } from 'react'
import { ActionButtonsProps } from './action-planner-list-item-buttons.types'
import { useActionPlannerContext } from '@/context/action-planner-context/action-planner-context'

const ActionButtons: FC<ActionButtonsProps> = ({ id }) => {
    const { deleteAction } = useActionPlannerContext()

    function handleDelete(id: string) {
        deleteAction(id)
    }

    return (
        <div className="flex items-center gap-3">
            <CustomButton type={CustomButtonType.TRANSPARENT} size={CustomButtonSize.XS}>
                <EditIcon size={24} color="black" />
            </CustomButton>
            <CustomButton type={CustomButtonType.TRANSPARENT} size={CustomButtonSize.XS} onClick={() => handleDelete(id)}>
                <DeleteIcon size={24} color="red" />
            </CustomButton>
        </div>
    )
}

export default ActionButtons

import CustomButton from '@/shared/ui/custom-button/custom-button.component'
import { CustomButtonType, CustomButtonSize } from '@/shared/ui/custom-button/custom-button.types'
import DeleteIcon from '@/shared/icons/delete-icon'
import EditIcon from '@/shared/icons/edit-icon'
import React from 'react'

const ActionButtons = () => {
    return (
        <div className="flex items-center gap-3">
            <CustomButton type={CustomButtonType.TRANSPARENT} size={CustomButtonSize.XS}>
                <EditIcon size={24} color="black" />
            </CustomButton>
            <CustomButton type={CustomButtonType.TRANSPARENT} size={CustomButtonSize.XS}>
                <DeleteIcon size={24} color="red" />
            </CustomButton>
        </div>
    )
}

export default ActionButtons

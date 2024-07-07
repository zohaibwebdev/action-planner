import CustomButton from '@/shared/ui/custom-button/custom-button.component'
import { CustomButtonTypes } from '@/shared/ui/custom-button/custom-button.types'
import DeleteIcon from '@/shared/ui/icons/delete-icon'
import EditIcon from '@/shared/ui/icons/edit-icon'
import React from 'react'

const ActionButtons = () => {
    return (
        <div className="flex items-center gap-5">
            <CustomButton type={CustomButtonTypes.NORMAL}>
                <EditIcon size={24} color="black" />
            </CustomButton>
            <CustomButton type={CustomButtonTypes.NORMAL}>
                <DeleteIcon size={24} color="red" />
            </CustomButton>
        </div>
    )
}

export default ActionButtons

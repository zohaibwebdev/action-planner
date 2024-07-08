import { useActionPlannerContext } from '@/context/action-planner-context/action-planner-context'
import DeleteIcon from '@/shared/icons/delete-icon'
import CustomButton from '@/shared/ui/custom-button/custom-button.component'
import { CustomButtonSize, CustomButtonType } from '@/shared/ui/custom-button/custom-button.types'
import React, { FC, useState } from 'react'
import { DeleteButtonProps } from './action-planner-list-buttons.types'
import Modal from '../../modal/modal.component'

const DeleteButton: FC<DeleteButtonProps> = ({ id }) => {
    const { deleteAction } = useActionPlannerContext()
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const handleOpenModal = () => setIsModalOpen(true)
    const handleCloseModal = () => setIsModalOpen(false)

    function handleDelete(id: string) {
        deleteAction(id)
    }

    return (
        <>
            <CustomButton type={CustomButtonType.TRANSPARENT} size={CustomButtonSize.XS} onClick={handleOpenModal}>
                <DeleteIcon size={24} color="red" />
            </CustomButton>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <div className="flex flex-col gap-5 items-center justify-center p-10">
                    <h1 className="font-bold text-2xl">are you sure that you want to delete this action</h1>
                    <div className="flex gap-10 justify-center">
                        <CustomButton size={CustomButtonSize.SM} type={CustomButtonType.PRIMARY} onClick={() => handleDelete(id)}>
              Delete
                        </CustomButton>
                        <CustomButton size={CustomButtonSize.SM} type={CustomButtonType.SUCCESS} onClick={handleCloseModal}>
              Cancel
                        </CustomButton>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default DeleteButton

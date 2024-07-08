import CustomButton from '@/shared/ui/custom-button/custom-button.component'
import { CustomButtonType, CustomButtonSize } from '@/shared/ui/custom-button/custom-button.types'
import EditIcon from '@/shared/icons/edit-icon'
import React, { FC, useState } from 'react'
import { ActionButtonsProps } from './action-planner-list-item-buttons.types'
import DeleteButton from './action-planner-delete-button.component'
import Modal from '../../modal/modal.component'
import CustomInput from '@/shared/ui/custom-input/custom-input.component'
import { priorityTypes } from '@/context/action-planner-context/action-planner-context-interfaces'
import { useActionPlannerContext } from '@/context/action-planner-context/action-planner-context'

const ActionButtons: FC<ActionButtonsProps> = ({ id }) => {
    const [value, setValue] = useState('')
    const [priority, setPriority] = useState<priorityTypes>(priorityTypes.LOW)
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const { editAction } = useActionPlannerContext()

    const handleOpenModal = () => setIsModalOpen(true)
    const handleCloseModal = () => {
        setIsModalOpen(false)
        setValue('')
        setPriority(priorityTypes.LOW)
    }
    const handleEdit = () => {
        if (value.trim()) {
            editAction(value, priority, id)
            handleCloseModal()
        }
    }

    return (
        <>
            <div className="flex items-center gap-3">
                <CustomButton type={CustomButtonType.TRANSPARENT} size={CustomButtonSize.XS} onClick={handleOpenModal}>
                    <EditIcon size={24} color="black" />
                </CustomButton>
                <DeleteButton id={id} />
            </div>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center ">
                        <h1 className="font-bold text-2xl">Edit Action</h1>
                        <CustomButton
                            size={CustomButtonSize.LG}
                            type={CustomButtonType.TRANSPARENT}
                            classNames="text-gray-700 font-bold text-3xl"
                            onClick={handleCloseModal}
                        >
                            <span className="text-3xl font-extrabold text-black"> &times;</span>
                        </CustomButton>
                    </div>
                    <CustomInput changeEvent={(e) => setValue(e.target.value)} label="Task" defaultValue={value} />
                    <div className="flex flex-col gap-1">
                        <p className="text-gray-400 font-light text-sm ">Priority</p>
                        <div className="flex gap-3 ">
                            <CustomButton
                                type={CustomButtonType.DANGER}
                                size={CustomButtonSize.SM}
                                onClick={() => setPriority(priorityTypes.HIGH)}
                            >
                                {priorityTypes.HIGH}
                            </CustomButton>
                            <CustomButton
                                type={CustomButtonType.WARNING}
                                size={CustomButtonSize.SM}
                                onClick={() => setPriority(priorityTypes.MEDIUM)}
                            >
                                {priorityTypes.MEDIUM}
                            </CustomButton>
                            <CustomButton
                                type={CustomButtonType.SUCCESS}
                                size={CustomButtonSize.SM}
                                onClick={() => setPriority(priorityTypes.LOW)}
                            >
                                {priorityTypes.LOW}
                            </CustomButton>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <CustomButton size={CustomButtonSize.SM} type={CustomButtonType.PRIMARY} onClick={handleEdit}>
              Edit
                        </CustomButton>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default ActionButtons

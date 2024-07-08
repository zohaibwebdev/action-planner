import { useActionPlannerContext } from '@/context/action-planner-context/action-planner-context'
import { priorityTypes } from '@/context/action-planner-context/action-planner-context-interfaces'
import CustomButton from '@/shared/ui/custom-button/custom-button.component'
import { CustomButtonType, CustomButtonSize } from '@/shared/ui/custom-button/custom-button.types'
import React, { useState } from 'react'
import Modal from '../../modal/modal.component'
import CustomInput from '@/shared/ui/custom-input/custom-input.component'

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [action, setAction] = useState<string>('')
    const [priority, setPriority] = useState<priorityTypes>(priorityTypes.LOW)
    const { addAction } = useActionPlannerContext()
    const handleOpenModal = () => setIsModalOpen(true)
    const handleCloseModal = () => {
        setIsModalOpen(false)
        setAction('')
        setPriority(priorityTypes.LOW)
    }
    const handleSaveAction = () => {
        if (action.trim()) {
            addAction(action, priority)
            handleCloseModal()
        }
    }

    return (
        <div className="flex justify-between items-center">
            <h1 className="font-extrabold text-3xl">Action Planner</h1>
            <CustomButton
                type={CustomButtonType.PRIMARY}
                onClick={handleOpenModal}
                size={CustomButtonSize.MD}
                classNames="shadow-lg"
            >
                <span className="text-xl mr-2">+</span>Add Action
            </CustomButton>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center ">
                        <h1 className="font-bold text-2xl">Add Action</h1>
                        <CustomButton
                            size={CustomButtonSize.LG}
                            type={CustomButtonType.TRANSPARENT}
                            classNames="text-gray-700 font-bold text-3xl"
                            onClick={handleCloseModal}
                        >
                            <span className="text-3xl font-extrabold text-black"> &times;</span>
                        </CustomButton>
                    </div>
                    <CustomInput changeEvent={(e) => setAction(e.target.value)} label="Task" />
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
                        <CustomButton size={CustomButtonSize.SM} type={CustomButtonType.PRIMARY} onClick={handleSaveAction}>
              Add
                        </CustomButton>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default Header

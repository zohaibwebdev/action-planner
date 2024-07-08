// Modal.tsx
import React, { FC, PropsWithChildren } from 'react'
import { ModalProps } from '@/shared/types/model.types'

const Modal: FC<PropsWithChildren<ModalProps>> = ({ isOpen, children }) => {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg min-w-[480px] relative">{children}</div>
        </div>
    )
}

export default Modal

import React from 'react'

interface EditIconProps {
  size?: number
  color?: string
}

const EditIcon: React.FC<EditIconProps> = ({ size = 24, color = '#000000' }) => {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M4 21h16v-2H4v2zM17.708 6.293l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM12.707 9.293l1.414 1.414-8.485 8.485H4v-2.828l8.485-8.485z"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default EditIcon

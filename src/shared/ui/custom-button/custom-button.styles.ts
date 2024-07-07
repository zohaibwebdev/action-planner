import { CustomButtonType, CustomButtonSize } from './custom-button.types'

export const customButtonStyles = {
    [CustomButtonType.PRIMARY]: 'bg-blue-700 text-white px-5 py-2 border rounded-2xl shadow-md',
    [CustomButtonType.SECONDARY]: 'bg-gray-200 text-gray-400 py-[5px] px-[10px] text-[11px] font-bold border rounded-md',
    [CustomButtonType.DANGER]: 'bg-blue-700 text-white px-4 py-2 border rounded-md',
    [CustomButtonType.SUCCESS]: 'bg-blue-700 text-white px-4 py-2 border rounded-md',
    [CustomButtonType.WARNING]: 'bg-blue-700 text-white px-4 py-2 border rounded-md',
    [CustomButtonType.TRANSPARENT]: 'bg-transparent text-white p-2',
}

export const customButtonSize = {
    [CustomButtonSize.SM]: 'px-4 py-2 text-sm rounded-md focus:outline-none',
    [CustomButtonSize.MD]: 'px-6 py-3 text-base rounded-md  focus:outline-none',
    [CustomButtonSize.LG]: 'px-8 py-4 text-lg rounded-md focus:outline-none',
}

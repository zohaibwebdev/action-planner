import { CustomButtonType, CustomButtonSize } from './custom-button.types'

export const customButtonStyles = {
    [CustomButtonType.PRIMARY]: 'bg-blue-700 text-white',
    [CustomButtonType.SECONDARY]: 'bg-gray-200 text-gray-400 font-bold',
    [CustomButtonType.DANGER]: 'bg-transparent border-red-700 text-red-700',
    [CustomButtonType.SUCCESS]: 'bg-transparent border-green-700 text-green-700',
    [CustomButtonType.WARNING]: 'bg-transparent border-yellow-700 text-yellow-700',
    [CustomButtonType.TRANSPARENT]: 'bg-transparent text-white',
}

export const customButtonSize = {
    [CustomButtonSize.XS]: 'py-[5px] px-[10px] text-[11px] font-bold border rounded-md focus:outline-none',
    [CustomButtonSize.SM]: 'px-4 py-2 text-sm rounded-md focus:outline-none',
    [CustomButtonSize.MD]: 'px-6 py-3 text-base rounded-md  focus:outline-none',
    [CustomButtonSize.LG]: 'px-8 py-4 text-lg rounded-md focus:outline-none',
}

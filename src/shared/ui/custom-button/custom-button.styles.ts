import { CustomButtonType, CustomButtonSize } from './custom-button.types'

export const customButtonStyles = {
    [CustomButtonType.PRIMARY]: 'bg-[#713FFF] text-white',
    [CustomButtonType.SECONDARY]: 'bg-gray-200 text-gray-400 font-bold',
    [CustomButtonType.DANGER]: 'bg-transparent border border-red-700 text-red-700 focus:bg-red-700 focus:text-white',
    [CustomButtonType.SUCCESS]:
    'bg-transparent border border-green-700 text-green-700 focus:bg-green-700 focus:text-white',
    [CustomButtonType.WARNING]:
    'bg-transparent border border-yellow-600 text-yellow-600 focus:bg-yellow-600 focus:text-white',
    [CustomButtonType.TRANSPARENT]: 'bg-transparent text-white',
}

export const customButtonSize = {
    [CustomButtonSize.XS]: 'py-[5px] px-[10px] text-[11px] font-bold border rounded-md focus:outline-none',
    [CustomButtonSize.SM]: 'px-4 py-2 text-sm rounded-xl focus:outline-none',
    [CustomButtonSize.MD]: 'px-[30px] py-[10px] text-[16px] font-bold rounded-2xl  focus:outline-none',
    [CustomButtonSize.LG]: 'px-4 py-4 text-3xl rounded-md focus:outline-none',
    [CustomButtonSize.SP]: 'py-[5px] px-[10px] text-[11px] font-bold focus:outline-none',
}

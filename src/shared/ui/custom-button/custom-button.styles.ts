import { CustomButtonTypes } from './custom-button.types'

export const customButtonStyles = {
    [CustomButtonTypes.PRIMARY]: 'bg-blue-700 text-white px-5 py-2 border rounded-2xl shadow-md',
    [CustomButtonTypes.SECONDARY]: 'bg-gray-200 text-gray-400 py-[5px] px-[10px] text-[11px] font-bold border rounded-md',
    [CustomButtonTypes.DANGER]: 'bg-blue-700 text-white px-4 py-2 border rounded-md',
    [CustomButtonTypes.SUCCESS]: 'bg-blue-700 text-white px-4 py-2 border rounded-md',
    [CustomButtonTypes.WARNING]: 'bg-blue-700 text-white px-4 py-2 border rounded-md',
    [CustomButtonTypes.TRANSPARENT]: 'bg-transparent text-white p-2',
}

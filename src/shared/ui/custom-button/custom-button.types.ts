import { PropsWithChildren } from 'react'

export interface ICustomButton extends PropsWithChildren {
  type: CustomButtonTypes
  onClick?: () => void
  isDisable?: boolean
  hidden?: boolean
}
export enum CustomButtonTypes {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
  NORMAL = 'NORMAL',
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
}

export const customButtonStyles = {
    [CustomButtonTypes.PRIMARY]: 'bg-blue-700 text-white px-5 py-2 border rounded-2xl shadow-md',
    [CustomButtonTypes.SECONDARY]: 'bg-gray-200 text-gray-400 py-[5px] px-[10px] text-[11px] font-bold border rounded-md',
    [CustomButtonTypes.LOW]: 'bg-blue-700 text-white px-4 py-2 border rounded-md',
    [CustomButtonTypes.MEDIUM]: 'bg-blue-700 text-white px-4 py-2 border rounded-md',
    [CustomButtonTypes.HIGH]: 'bg-blue-700 text-white px-4 py-2 border rounded-md',
    [CustomButtonTypes.NORMAL]: 'bg-transparent text-white p-2',
}

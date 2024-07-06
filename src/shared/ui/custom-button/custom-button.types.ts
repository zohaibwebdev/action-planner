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
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
}

export const customButtonStyles = {
    [CustomButtonTypes.PRIMARY]: 'bg-blue-700 text-white px-4 py-2 border rounded-md',
    [CustomButtonTypes.SECONDARY]: 'bg-blue-700 text-white px-4 py-2 border rounded-md',
    [CustomButtonTypes.LOW]: 'bg-blue-700 text-white px-4 py-2 border rounded-md',
    [CustomButtonTypes.MEDIUM]: 'bg-blue-700 text-white px-4 py-2 border rounded-md',
    [CustomButtonTypes.HIGH]: 'bg-blue-700 text-white px-4 py-2 border rounded-md',
}

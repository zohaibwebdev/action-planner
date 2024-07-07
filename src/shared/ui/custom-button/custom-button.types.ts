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
  TRANSPARENT = 'TRANSPARENT',
  SUCCESS = 'SUCCESS',
  WARNING = 'WARNING',
  DANGER = 'DANGER',
}

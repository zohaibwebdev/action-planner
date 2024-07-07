import { PropsWithChildren } from 'react'

export interface ICustomButton extends PropsWithChildren {
  type: CustomButtonType
  onClick?: () => void
  isDisable?: boolean
  hidden?: boolean
  size?: CustomButtonSize
}

export enum CustomButtonType {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
  TRANSPARENT = 'TRANSPARENT',
  SUCCESS = 'SUCCESS',
  WARNING = 'WARNING',
  DANGER = 'DANGER',
}

export enum CustomButtonSize {
  SM = 'SM',
  MD = 'MD',
  LG = 'LG',
}

export interface CustomInputProps {
  label?: string
  labelClasses?: string
  className?: string
  placeholder?: string
  required?: boolean
  changeEvent?: (e: React.ChangeEvent<HTMLInputElement>) => void
  defaultValue?: string | number
  errorMessage?: string
}

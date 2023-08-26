import {
    FormControl,
    InputLabel,
    Input,
    InputAdornment,
    FormControlProps,
    SvgIconTypeMap,
} from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle'
import { Dispatch, SetStateAction } from 'react'
import { theme } from '@/utils'
import { OverridableComponent } from '@mui/material/OverridableComponent'

export interface IInputFieldProps extends FormControlProps {
    label: string
    value: string
    setValue: Dispatch<SetStateAction<string>>
    icon?: OverridableComponent<SvgIconTypeMap<object, 'svg'>> & {
        muiName: string
    }
    placeholder?: string
}

export function InputField({
    label,
    value,
    setValue,
    icon = AccountCircle,
    placeholder,
    ...props
}: IInputFieldProps) {
    const Icon = icon

    return (
        <FormControl
            variant="standard"
            fullWidth
            sx={{
                margin: theme.spacing(2, 0),
            }}
            {...props}
        >
            <InputLabel>{label}</InputLabel>
            <Input
                startAdornment={
                    <InputAdornment position="start">{<Icon />}</InputAdornment>
                }
                value={value}
                fullWidth
                onChange={(e) => setValue(e.target.value)}
                placeholder={placeholder}
            />
        </FormControl>
    )
}

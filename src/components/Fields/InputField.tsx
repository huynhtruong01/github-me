import {
    FormControl,
    InputLabel,
    Input,
    InputAdornment,
    FormControlProps,
} from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle'
import { Dispatch, SetStateAction } from 'react'
import { theme } from '@/utils'

export interface IInputFieldProps extends FormControlProps {
    label: string
    value: string
    setValue: Dispatch<SetStateAction<string>>
    placeholder?: string
}

export function InputField({
    label,
    value,
    setValue,
    placeholder,
    ...props
}: IInputFieldProps) {
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
                    <InputAdornment position="start">
                        <AccountCircle />
                    </InputAdornment>
                }
                value={value}
                fullWidth
                onChange={(e) => setValue(e.target.value)}
                placeholder={placeholder}
            />
        </FormControl>
    )
}

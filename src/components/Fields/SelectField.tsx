import { IOptionValue } from '@/models'
import { theme } from '@/utils'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { Dispatch, SetStateAction } from 'react'

export type ISelectFieldProps<T, IOption> = {
    label: string
    value: T
    setValue: Dispatch<SetStateAction<T>>
    options: IOption[]
}

export function SelectField<T, IOption>({
    label,
    value,
    setValue,
    options,
}: ISelectFieldProps<T, IOption>) {
    return (
        <FormControl
            fullWidth
            sx={{
                margin: theme.spacing(2, 0),
            }}
        >
            <InputLabel variant="standard">{label}</InputLabel>
            <Select
                variant="standard"
                value={value}
                sx={{
                    textTransform: 'capitalize',
                }}
                onChange={(e) => setValue(e.target.value as T)}
            >
                {options.map((option) => (
                    <MenuItem
                        key={(option as IOptionValue).value || (option as string)}
                        value={(option as IOptionValue).value || (option as string)}
                        sx={{
                            textTransform: 'capitalize',
                        }}
                    >
                        {(option as IOptionValue).name || (option as string)}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

import { theme } from '@/utils'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { Dispatch, SetStateAction } from 'react'

export type ISelectFieldProps<T> = {
    label: string
    value: T
    setValue: Dispatch<SetStateAction<T>>
    options: T[]
}

export function SelectField<T>({
    label,
    value,
    setValue,
    options,
}: ISelectFieldProps<T>) {
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
                defaultValue={value}
                value={value}
                sx={{
                    textTransform: 'capitalize',
                }}
                onChange={(e) => setValue(e.target.value as T)}
            >
                {options.map((val) => (
                    <MenuItem
                        key={val as any}
                        value={val as any}
                        sx={{
                            textTransform: 'capitalize',
                        }}
                    >
                        {val as any}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

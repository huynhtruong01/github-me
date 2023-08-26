import { theme } from '@/utils'
import { Autocomplete, Chip, TextField } from '@mui/material'
import { Dispatch, ReactNode, SetStateAction } from 'react'

export interface IAutocompleteFieldProps<T> {
    label: string
    value: T[]
    setValue: Dispatch<SetStateAction<T[]>>
    options: T[]
    placeholder?: string
}

export function AutocompleteField<T>({
    label,
    value,
    setValue,
    options,
    placeholder = '',
}: IAutocompleteFieldProps<T>) {
    return (
        <Autocomplete
            multiple
            freeSolo
            onChange={(e, value: (string | T)[]) => {
                setValue(value as any)
            }}
            value={value}
            options={options}
            renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                    <Chip label={option as ReactNode} {...getTagProps({ index })} />
                ))
            }
            renderInput={(params) => (
                <TextField
                    {...params}
                    variant="standard"
                    label={label}
                    placeholder={placeholder}
                />
            )}
            sx={{
                margin: theme.spacing(2, 0),
            }}
        />
    )
}

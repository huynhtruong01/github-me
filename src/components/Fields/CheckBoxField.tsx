import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import { Dispatch, SetStateAction } from 'react'

export interface ICheckBoxFieldProps {
    label: string
    checked: boolean
    setChecked: Dispatch<SetStateAction<boolean>>
}

export function CheckBoxField({ label, checked, setChecked }: ICheckBoxFieldProps) {
    return (
        <FormGroup
            sx={{
                marginBottom: 2,
            }}
        >
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked}
                        onChange={() => setChecked((prev) => !prev)}
                    />
                }
                label={label}
            />
        </FormGroup>
    )
}

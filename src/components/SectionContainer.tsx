import { BoxProps, Box, Container } from '@mui/material'
import { ReactNode } from 'react'

export type ISectionContainerProps = BoxProps & {
    children: ReactNode
}

export function SectionContainer({ children, ...props }: ISectionContainerProps) {
    return (
        <Box component="section" {...props}>
            <Container>{children}</Container>
        </Box>
    )
}

import { theme } from '@/utils'
import { Box, BoxProps, Typography } from '@mui/material'
import { ReactNode } from 'react'

export type ISectionItemStatsAndBadgeProps = BoxProps & {
    title: string
    children: ReactNode
    subTitle?: string
}

export function SectionItemStatsAndBadge({
    title,
    children,
    subTitle,
    ...props
}: ISectionItemStatsAndBadgeProps) {
    return (
        <Box
            sx={{
                padding: theme.spacing(6, 0),
            }}
            {...props}
        >
            <Typography
                component="h2"
                variant="h6"
                sx={{
                    marginBottom: 4,
                }}
            >
                <Typography
                    component="span"
                    variant="h6"
                    sx={{
                        fontWeight: 700,
                    }}
                >
                    {title}
                </Typography>{' '}
                {subTitle && <Typography component="span">({subTitle})</Typography>}
            </Typography>
            {children}
        </Box>
    )
}

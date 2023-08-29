import { IStep } from '@/models'
import { theme } from '@/utils'
import { Box, Typography } from '@mui/material'

export interface IHomeGuideStepProps {
    step: IStep
}

export function HomeGuideStep({ step }: IHomeGuideStepProps) {
    return (
        <Box
            sx={{
                display: 'flex',
                gap: 2,
                padding: 4,
                backgroundColor: '#ffffff',
                borderRadius: 2,
            }}
        >
            <Box
                sx={{
                    fontSize: theme.typography.h3,
                    fontWeight: 800,
                }}
            >
                {step.id}.
            </Box>
            <Box>
                <Typography
                    component="h3"
                    variant="h6"
                    sx={{
                        fontWeight: 700,
                        marginBottom: 0.5,
                    }}
                >
                    {step.title}
                </Typography>
                <Typography
                    sx={{
                        height: {
                            md: '96px',
                            xs: 'auto',
                        },
                    }}
                >
                    {step.content}
                </Typography>
            </Box>
        </Box>
    )
}

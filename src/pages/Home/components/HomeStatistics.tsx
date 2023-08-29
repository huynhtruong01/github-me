import { SectionContainer } from '@/components'
import { theme } from '@/utils'
import { Box, Typography } from '@mui/material'

export interface IHomeStatisticsProps {}

export function HomeStatistics() {
    return (
        <SectionContainer
            sx={{
                padding: theme.spacing(4, 0),
                margin: theme.spacing(2, 0),
            }}
        >
            <Box
                sx={{
                    margin: {
                        md: theme.spacing(2, 0, 6),
                        xs: theme.spacing(2, 0, 3),
                    },
                }}
            >
                <Typography
                    component="h2"
                    variant="h5"
                    sx={{
                        fontWeight: 800,
                        textAlign: 'center',
                        marginBottom: 0.5,
                    }}
                >
                    Thống kê Github
                </Typography>
                <Typography
                    sx={{
                        textAlign: 'center',
                    }}
                >
                    Thống kê hệ thống Github của bạn
                </Typography>
            </Box>
            <Box
                sx={{
                    width: {
                        md: '70%',
                        xs: '100%',
                    },
                    maxWidth: '100%',
                    margin: 'auto',
                }}
            >
                <Box component="img" src={'/images/statistics-readme.png'} />
            </Box>
        </SectionContainer>
    )
}

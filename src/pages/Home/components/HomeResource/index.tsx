import { SectionContainer } from '@/components'
import { resources } from '@/data'
import { theme } from '@/utils'
import { Box, Typography, Grid } from '@mui/material'
import { ResourceItem } from '@/pages/Home/components/HomeResource/components'

export interface IHomeResourceProps {}

export function HomeResource() {
    return (
        <SectionContainer
            sx={{
                padding: theme.spacing(4, 0, 8),
                margin: theme.spacing(2, 0),
            }}
        >
            <Box
                sx={{
                    margin: theme.spacing(2, 0, 6),
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
                    Resource
                </Typography>
                <Typography
                    sx={{
                        textAlign: 'center',
                    }}
                >
                    Những resource tạo icon và thống kê github cho bạn
                </Typography>
            </Box>
            <Grid container spacing={2}>
                {resources.map((resource) => (
                    <Grid key={resource.name} item md={4}>
                        <ResourceItem resource={resource} />
                    </Grid>
                ))}
            </Grid>
        </SectionContainer>
    )
}

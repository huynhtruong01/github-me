import { SectionContainer } from '@/components'
import { stepGuideList } from '@/data'
import { HomeGuideStep } from '@/pages/Home/components/HomeGuide/components'
import { theme } from '@/utils'
import { Box, Grid, Typography } from '@mui/material'

export interface IHomeGuideProps {}

export function HomeGuide() {
    return (
        <SectionContainer
            sx={{
                padding: theme.spacing(4, 0, 8),
                margin: theme.spacing(4, 0),
                backgroundColor: '#f5f5f5',
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
                    Làm thế nào có thể sử dụng được ứng dụng với GithubMe? 🙄🙄
                </Typography>
                <Typography
                    sx={{
                        textAlign: 'center',
                    }}
                >
                    Đừng lo lắng. Bạn chỉ cần thực hiện các bước sau.
                </Typography>
            </Box>
            <Grid container spacing={2}>
                {stepGuideList.map((step) => (
                    <Grid item xs={12} md={6}>
                        <HomeGuideStep key={step.id} step={step} />
                    </Grid>
                ))}
            </Grid>
        </SectionContainer>
    )
}

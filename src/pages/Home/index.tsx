import {
    HomeBadges,
    HomeGuide,
    HomeHeader,
    HomeResource,
    HomeSocialIcon,
    HomeStatistics,
} from '@/pages/Home/components'
import { Box } from '@mui/material'

export interface IHomePageProps {}

export function HomePage() {
    return (
        <Box>
            <HomeHeader />
            <HomeGuide />
            <HomeStatistics />
            <HomeSocialIcon />
            <HomeBadges />
            <HomeResource />
        </Box>
    )
}

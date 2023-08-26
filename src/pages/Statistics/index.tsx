import { SectionContainer } from '@/components'
import { Box } from '@mui/material'
import {
    GithubStats,
    LanguagesStats,
    RepoStats,
    WaketimeStats,
} from '@/pages/Statistics/components'

export interface IStatisticsProps {}

export function Statistics() {
    return (
        <SectionContainer>
            <Box>
                <GithubStats />
                <LanguagesStats />
                <RepoStats />
                <WaketimeStats />
            </Box>
        </SectionContainer>
    )
}

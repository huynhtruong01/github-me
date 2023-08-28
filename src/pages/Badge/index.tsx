import { SectionContainer } from '@/components'
import { Box } from '@mui/material'
import { SocialMediaBadge, LanguagesBadge, OtherBadge } from '@/pages/Badge/components'

export interface IBadgeProps {}

export function Badge() {
    return (
        <SectionContainer>
            <Box>
                <SocialMediaBadge />
                <hr />
                <LanguagesBadge />
                <hr />
                <OtherBadge />
            </Box>
        </SectionContainer>
    )
}

import { AccordingCopyCode, ImageReview, SectionItemStatsAndBadge } from '@/components'
import { SelectField } from '@/components/Fields'
import { ALL } from '@/consts'
import { themeBadges } from '@/data'
import { IOptionValue, IThemeBadge } from '@/models'
import { filterBadges } from '@/utils'
import { Grid } from '@mui/material'
import { useEffect, useState } from 'react'

export interface IOtherBadgeProps {}

export function OtherBadge() {
    const [themeBadge, setThemeBadge] = useState<IThemeBadge>(ALL)
    const [badges, setBadges] = useState<IOptionValue[]>([])
    const [badge, setBadge] = useState<string>(ALL)

    useEffect(() => {
        const badgeList = filterBadges(themeBadge)
        setBadges(badgeList)
    }, [themeBadge])

    return (
        <SectionItemStatsAndBadge title={'Các badge khác'} subTitle={'The other badge'}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <SelectField<IThemeBadge, IOptionValue>
                        label="Chủ đề về huy hiệu (Theme Badge)"
                        options={themeBadges}
                        value={themeBadge}
                        setValue={setThemeBadge}
                    />
                    <SelectField<string, IOptionValue>
                        label="Danh sách huy hiệu (Badge List)"
                        options={badges}
                        value={badge}
                        setValue={setBadge}
                    />
                    <AccordingCopyCode url={badge} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <ImageReview
                        url={badge}
                        sx={{
                            width: 200,
                            height: 'auto',
                        }}
                    />
                </Grid>
            </Grid>
        </SectionItemStatsAndBadge>
    )
}

import { AccordingCopyCode, ImageReview, SectionItemStatsAndBadge } from '@/components'
import { InputField, SelectField } from '@/components/Fields'
import { Layout } from '@/enums'
import { ILayout } from '@/models'
import { Grid, Box } from '@mui/material'
import { useEffect, useState } from 'react'

export interface IWaketimeStatsProps {}

export function WaketimeStats() {
    const [username, setUsername] = useState<string>('')
    const [layout, setLayout] = useState<ILayout>(Layout.DEFAULT)
    const [url, setUrl] = useState<string>(
        `https://github-readme-stats.vercel.app/api/wakatime?username=${
            username || 'huynhtruong01'
        }${layout === Layout.DEFAULT ? '' : `&layout=${layout}`}`
    )

    useEffect(() => {
        const url = `https://github-readme-stats.vercel.app/api/wakatime?username=${
            username || 'huynhtruong01'
        }${layout === Layout.DEFAULT ? '' : `&layout=${layout}`}`
        setUrl(url)
    }, [username, layout])

    return (
        <SectionItemStatsAndBadge
            title={'Số liệu thống kê thời gian Waka'}
            subTitle={'Wakatime Stats'}
        >
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <InputField
                        label={'Tên Repo Github của bạn'}
                        value={username}
                        setValue={setUsername}
                        placeholder="huynhtruong01"
                    />
                    <SelectField<ILayout, string>
                        label={'Layout'}
                        value={layout}
                        setValue={setLayout}
                        options={Object.values(Layout)}
                    />
                    <AccordingCopyCode url={url} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box>
                        <ImageReview url={url} />
                    </Box>
                </Grid>
            </Grid>
        </SectionItemStatsAndBadge>
    )
}

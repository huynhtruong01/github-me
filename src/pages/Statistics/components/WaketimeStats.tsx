import { AccordingCopyCode } from '@/components'
import { InputField, SelectField } from '@/components/Fields'
import { Layout } from '@/enums'
import { ILayout } from '@/models'
import { theme } from '@/utils'
import { Box, Typography, Grid } from '@mui/material'
import { useState, useEffect } from 'react'

export interface IWaketimeStatsProps {}

export function WaketimeStats() {
    const [username, setUsername] = useState<string>('')
    const [layout, setLayout] = useState<ILayout>(Layout.DEFAULT)
    const [url, setUrl] = useState<string>(
        `https://github-readme-stats.vercel.app/api/wakatime/?username=${
            username || 'huynhtruong01'
        }${layout === Layout.DEFAULT ? '' : `&layout=${layout}`}`
    )

    useEffect(() => {
        const url = `https://github-readme-stats.vercel.app/api/wakatime/?username=${
            username || 'huynhtruong01'
        }${layout === Layout.DEFAULT ? '' : `&layout=${layout}`}`
        setUrl(url)
    }, [username, layout])

    return (
        <Box
            sx={{
                padding: theme.spacing(4, 0),
                margin: theme.spacing(2, 0),
            }}
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
                    Số liệu thống kê thời gian Waka
                </Typography>{' '}
                <Typography component="span">(Wakatime Stats)</Typography>
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <InputField
                        label={'Tên Repo Github của bạn'}
                        value={username}
                        setValue={setUsername}
                        placeholder="huynhtruong01"
                    />
                    <SelectField<ILayout>
                        label={'Layout'}
                        value={layout}
                        setValue={setLayout}
                        options={Object.values(Layout)}
                    />
                    <AccordingCopyCode url={url} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box>
                        <Box component="img" src={url} />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

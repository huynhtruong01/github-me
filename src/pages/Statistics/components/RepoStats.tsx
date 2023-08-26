import { AccordingCopyCode } from '@/components'
import { InputField, SelectField } from '@/components/Fields'
import { themeData } from '@/data'
import { theme } from '@/utils'
import { Box, Typography, Grid } from '@mui/material'
import { useState, useEffect } from 'react'

export interface IRepoStatsProps {}

export function RepoStats() {
    const [username, setUsername] = useState<string>('')
    const [themeDt, setThemeDt] = useState<string>(themeData[0])
    const [repo, setRepo] = useState<string>('')
    const [url, setUrl] = useState<string>(
        `https://github-readme-stats.vercel.app/api/pin/?username=${
            username || 'huynhtruong01'
        }&theme=${themeDt}&repo=${repo || 'yody-app'}`
    )

    useEffect(() => {
        const url = `https://github-readme-stats.vercel.app/api/pin/?username=${
            username || 'huynhtruong01'
        }&theme=${themeDt}&repo=${repo || 'yody-app'}`
        setUrl(url)
    }, [username, themeDt, repo])

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
                    Số liệu thống kê kho lữu trữ
                </Typography>{' '}
                <Typography component="span">(Repo Stats)</Typography>
            </Typography>
            <Grid container spacing={4} alignItems={'center'}>
                <Grid item xs={12} md={6}>
                    <InputField
                        label={'Tên Repo Github của bạn'}
                        value={username}
                        setValue={setUsername}
                        placeholder="huynhtruong01"
                    />
                    <InputField
                        label={'Tên repo của bạn'}
                        value={repo}
                        setValue={setRepo}
                        placeholder="learn-reactjs"
                    />
                    <SelectField<string>
                        label={'Chủ đề'}
                        options={themeData}
                        value={themeDt}
                        setValue={setThemeDt}
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

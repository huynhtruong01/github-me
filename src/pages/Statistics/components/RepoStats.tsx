import { AccordingCopyCode, ImageReview, SectionItemStatsAndBadge } from '@/components'
import { InputField, SelectField } from '@/components/Fields'
import { themeData } from '@/data'
import { Grid } from '@mui/material'
import { useEffect, useState } from 'react'

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
        <SectionItemStatsAndBadge
            title={'Số liệu thống kê kho lữu trữ'}
            subTitle={'Repo Stats'}
        >
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
                    <SelectField<string, string>
                        label={'Chủ đề'}
                        options={themeData}
                        value={themeDt}
                        setValue={setThemeDt}
                    />
                    <AccordingCopyCode url={url} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <ImageReview url={url} />
                </Grid>
            </Grid>
        </SectionItemStatsAndBadge>
    )
}

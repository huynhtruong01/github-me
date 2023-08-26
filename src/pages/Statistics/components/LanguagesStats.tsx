import { AccordingCopyCode } from '@/components'
import {
    AutocompleteField,
    CheckBoxField,
    InputField,
    SelectField,
} from '@/components/Fields'
import { themeData } from '@/data'
import { Layout } from '@/enums'
import { ILayout } from '@/models'
import { theme } from '@/utils'
import { Box, Grid, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

export interface ILanguagesStatsProps {}

export function LanguagesStats() {
    const [username, setUsername] = useState<string>('')
    const [themeDt, setThemeDt] = useState<string>(themeData[0])
    const [hideProgressBar, setHideProgressBar] = useState<boolean>(false)
    const [hideLanguages, setHideLanguages] = useState<string[]>([])
    const [layout, setLayout] = useState<ILayout>(Layout.DEFAULT)
    const [count, setCount] = useState<string>('5')
    const [url, setUrl] = useState<string>(
        `https://github-readme-stats.vercel.app/api/top-langs/?username=huynhtruong01&theme=${
            themeData[0]
        }&langs_count=${count}${
            layout === Layout.DEFAULT ? '' : `&layout=${layout}`
        }&hide_progress=${hideProgressBar}&hide=${hideLanguages.join(',')}`
    )

    useEffect(() => {
        const newUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=huynhtruong01&theme=${
            themeData[0]
        }&langs_count=${count}${
            layout === Layout.DEFAULT ? '' : `&layout=${layout}`
        }&hide_progress=${hideProgressBar}&hide=${hideLanguages.join(',')}`
        setUrl(newUrl)
    }, [username, themeDt, layout, count, hideProgressBar, hideLanguages])

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
                    Số liệu thống kê ngôn ngữ
                </Typography>{' '}
                <Typography component="span">(Langs Stats)</Typography>
            </Typography>
            <Grid container spacing={4} alignItems={'center'}>
                <Grid item md={6}>
                    <InputField
                        label={'Tên Repo Github của bạn'}
                        value={username}
                        setValue={setUsername}
                        placeholder="huynhtruong01"
                    />
                    <SelectField<string>
                        label={'Chủ đề (Theme)'}
                        value={themeDt}
                        setValue={setThemeDt}
                        options={themeData}
                    />
                    <SelectField<string>
                        label={'Số lượng ngôn ngữ'}
                        value={count}
                        setValue={setCount}
                        options={Array.from({ length: 10 }, (value, idx) =>
                            (idx + 1).toString()
                        )}
                    />
                    <SelectField<ILayout>
                        label={'Layout'}
                        value={layout}
                        setValue={setLayout}
                        options={Object.values(Layout)}
                    />
                    <AutocompleteField<string>
                        label={'Ẩn ngôn ngữ (Hide languages)'}
                        value={hideLanguages}
                        setValue={setHideLanguages}
                    />
                    <CheckBoxField
                        label={'Ẩn thanh tiến trình (Hide progress bar)'}
                        checked={hideProgressBar}
                        setChecked={setHideProgressBar}
                    />
                    <AccordingCopyCode url={url} />
                </Grid>
                <Grid item md={6}>
                    <Box>
                        <Box
                            component="img"
                            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${
                                username || 'huynhtruong01'
                            }${
                                layout === Layout.DEFAULT ? '' : `&layout=${layout}`
                            }&langs_count=${count}&theme=${themeDt}&hide_progress=${hideProgressBar}&hide=${hideLanguages.join(
                                ','
                            )}`}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

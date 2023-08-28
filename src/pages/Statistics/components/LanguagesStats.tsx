import { AccordingCopyCode, ImageReview, SectionItemStatsAndBadge } from '@/components'
import {
    AutocompleteField,
    CheckBoxField,
    InputField,
    SelectField,
} from '@/components/Fields'
import { themeData } from '@/data'
import { Layout } from '@/enums'
import { ILayout } from '@/models'
import { Grid } from '@mui/material'
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
        `https://github-readme-stats.vercel.app/api/top-langs/?username=${
            username || 'huynhtruong01'
        }&theme=${themeData[0]}&langs_count=${count}${
            layout === Layout.DEFAULT ? '' : `&layout=${layout}`
        }&hide_progress=${hideProgressBar}&hide=${hideLanguages.join(',')}`
    )

    useEffect(() => {
        const newUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${
            username || 'huynhtruong01'
        }&theme=${themeDt}&langs_count=${count}${
            layout === Layout.DEFAULT ? '' : `&layout=${layout}`
        }&hide_progress=${hideProgressBar}&hide=${hideLanguages.join(',')}`
        setUrl(newUrl)
    }, [username, themeDt, layout, count, hideProgressBar, hideLanguages])

    return (
        <SectionItemStatsAndBadge
            title={'Số liệu thống kê ngôn ngữ'}
            subTitle={'Langs Stats'}
        >
            <Grid container spacing={4} alignItems={'center'}>
                <Grid item xs={12} md={6}>
                    <InputField
                        label={'Tên Repo Github của bạn'}
                        value={username}
                        setValue={setUsername}
                        placeholder="huynhtruong01"
                    />
                    <SelectField<string, string>
                        label={'Chủ đề (Theme)'}
                        value={themeDt}
                        setValue={setThemeDt}
                        options={themeData}
                    />
                    <SelectField<string, string>
                        label={'Số lượng ngôn ngữ'}
                        value={count}
                        setValue={setCount}
                        options={Array.from({ length: 10 }, (value, idx) =>
                            (idx + 1).toString()
                        )}
                    />
                    <SelectField<ILayout, string>
                        label={'Layout'}
                        value={layout}
                        setValue={setLayout}
                        options={Object.values(Layout)}
                    />
                    <AutocompleteField<string>
                        label={'Ẩn ngôn ngữ (Hide languages)'}
                        value={hideLanguages}
                        setValue={setHideLanguages}
                        options={[]}
                    />
                    <CheckBoxField
                        label={'Ẩn thanh tiến trình (Hide progress bar)'}
                        checked={hideProgressBar}
                        setChecked={setHideProgressBar}
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

import { AccordingCopyCode } from '@/components'
import {
    AutocompleteField,
    CheckBoxField,
    InputField,
    SelectField,
} from '@/components/Fields'
import { githubMoreKeys, themeData } from '@/data'
import { NumberFormat, RankIcon } from '@/enums'
import { theme } from '@/utils'
import { Box, Grid, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import TitleIcon from '@mui/icons-material/Title'

export interface IGithubStatsProps {}

export function GithubStats() {
    const [username, setUsername] = useState<string>('')
    const [title, setTitle] = useState<string>('')
    const [themeDt, setThemeDt] = useState<string>(themeData[0])
    const [rankIcon, setRankIcon] = useState<string>(RankIcon.DEFAULT)
    const [numFormat, setNumFormat] = useState<string>(NumberFormat.SHORT)
    const [showIcon, setShowIcon] = useState<boolean>(true)
    const [keyMore, setKeyMore] = useState<string[]>([])
    const [url, setUrl] = useState<string>(
        `https://github-readme-stats.vercel.app/api?username=${
            username || 'huynhtruong01'
        }&theme=${themeData[0]}&show_icons=true&count_private=true&custom_title=${
            title || `Github Stats của ${username || 'huynhtruong01'}`
        }${keyMore.length > 0 ? `&show=${keyMore.join(',')}` : ''}`
    )

    useEffect(() => {
        const newUrl = `https://github-readme-stats.vercel.app/api?username=${
            username || 'huynhtruong01'
        }&theme=${themeDt}&show_icons=${showIcon}&count_private=true${
            rankIcon === RankIcon.DEFAULT ? '' : `&rank_icon=${rankIcon}`
        }&custom_title=${
            title || `Github Stats của ${username || 'huynhtruong01'}`
        }&number_format=${numFormat}${
            keyMore.length > 0 ? `&show=${keyMore.join(',')}` : ''
        }`
        setUrl(newUrl)
    }, [username, themeDt, showIcon, rankIcon, title, numFormat, keyMore])

    return (
        <Box
            sx={{
                padding: theme.spacing(4, 0),
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
                    Số liệu thống kê Github
                </Typography>{' '}
                <Typography component="span">(Github Stats)</Typography>
            </Typography>
            <Grid container spacing={4} alignItems={'center'}>
                <Grid item xs={12} md={6}>
                    <InputField
                        value={username}
                        setValue={setUsername}
                        label={'Tên Repo Github của bạn'}
                        placeholder={'huynhtruong01'}
                    />
                    <InputField
                        value={title}
                        setValue={setTitle}
                        label={'Tạo tiêu đề cho github stats của bạn'}
                        icon={TitleIcon}
                        placeholder={'Github Stats của huynhtruong01'}
                    />
                    <SelectField<string>
                        label={'Chủ đề'}
                        options={themeData}
                        value={themeDt}
                        setValue={setThemeDt}
                    />
                    <SelectField<string>
                        label={'Icon xếp hạng'}
                        options={Object.values(RankIcon)}
                        value={rankIcon}
                        setValue={setRankIcon}
                    />
                    <SelectField<string>
                        label={'Format số view'}
                        options={Object.values(NumberFormat)}
                        value={numFormat}
                        setValue={setNumFormat}
                    />
                    <AutocompleteField<string>
                        label="Hiển thị thêm"
                        options={githubMoreKeys}
                        value={keyMore}
                        setValue={setKeyMore}
                    />
                    <CheckBoxField
                        label={'Hiển thị icon'}
                        checked={showIcon}
                        setChecked={setShowIcon}
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

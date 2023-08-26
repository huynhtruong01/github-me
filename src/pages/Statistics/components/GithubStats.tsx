import { themeData } from '@/data'
import { theme } from '@/utils'
import AccountCircle from '@mui/icons-material/AccountCircle'
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    FormControl,
    Input,
    InputAdornment,
    InputLabel,
    MenuItem,
    Select,
    Typography,
    Grid,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useState, useEffect } from 'react'

export interface IGithubStatsProps {}

export function GithubStats() {
    const [username, setUsername] = useState<string>('')
    const [copied, setCopied] = useState<boolean>(false)
    const [themeDt, setThemeDt] = useState<string>(themeData[0])
    const [imgElement, setImgElement] = useState<string>(
        `<img src="https://github-readme-stats.vercel.app/api?username=huynhtruong01&theme=${themeData[0]}&show_icons=true&count_private=true"></img>`
    )

    useEffect(() => {
        const imgElement = `<img src="https://github-readme-stats.vercel.app/api?username=${username}&theme=${themeDt}&show_icons=true&count_private=true"></img>`
        setImgElement(imgElement)
    }, [username, themeDt])

    const copyCode = async () => {
        try {
            await navigator.clipboard.writeText(imgElement)
            setCopied(true)
        } catch (error) {
            throw new Error(error as string)
        }
    }

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
                <Grid item md={6}>
                    <FormControl variant="standard" fullWidth margin="normal">
                        <InputLabel htmlFor="github-stats">Tên Github của bạn</InputLabel>
                        <Input
                            id="github-stats"
                            startAdornment={
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            }
                            fullWidth
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </FormControl>
                    <FormControl
                        fullWidth
                        margin="normal"
                        sx={{
                            marginBottom: 4,
                        }}
                    >
                        <InputLabel variant="standard" htmlFor="select-github-stats">
                            Theme
                        </InputLabel>
                        <Select
                            variant="standard"
                            defaultValue={themeData[0]}
                            sx={{
                                textTransform: 'capitalize',
                            }}
                            onChange={(e) => setThemeDt(e.target.value)}
                        >
                            {themeData.map((theme) => (
                                <MenuItem
                                    value={theme}
                                    sx={{
                                        textTransform: 'capitalize',
                                    }}
                                >
                                    {theme}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Accordion
                        sx={{
                            backgroundColor: theme.palette.primary.light,
                            color: '#ffffff',
                        }}
                    >
                        <AccordionSummary
                            expandIcon={
                                <ExpandMoreIcon
                                    sx={{
                                        color: '#ffffff',
                                    }}
                                />
                            }
                        >
                            <Typography
                                sx={{
                                    fontWeight: 700,
                                }}
                            >
                                Xem code
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography
                                sx={{
                                    display: 'inline-block',
                                    color: '#ffffff',
                                    fontWeight: 700,
                                    marginBottom: 2,
                                    whiteSpace: 'normal',
                                    overflow: 'hidden',
                                    maxWidth: '100%',
                                }}
                            >
                                {imgElement}
                            </Typography>
                            <Button
                                variant="outlined"
                                sx={{
                                    borderColor: '#ffffff',
                                    color: '#ffffff',
                                    fontSize: theme.typography.body2,
                                    padding: theme.spacing(1, 2),
                                    fontWeight: 700,
                                    '&:hover': {
                                        borderColor: '#ffffff',
                                    },
                                }}
                                onClick={copyCode}
                            >
                                {copied ? 'Đã copy' : 'Copy code'}
                            </Button>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
                <Grid item md={6}>
                    <Box>
                        <Box
                            component="img"
                            src={`https://github-readme-stats.vercel.app/api?username=${
                                username || 'huynhtruong01'
                            }&theme=${themeDt}&show_icons=true&count_private=true`}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

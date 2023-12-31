import { CodeCopyType } from '@/enums'
import { ICodeCopyType } from '@/models'
import { theme } from '@/utils'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    Typography,
} from '@mui/material'
import { useState } from 'react'

export interface IAccordingCopyCodeProps {
    url: string
    link?: string
    type?: ICodeCopyType
}

export function AccordingCopyCode({
    url,
    link,
    type = CodeCopyType.IMAGE,
}: IAccordingCopyCodeProps) {
    const [copied, setCopied] = useState<boolean>(false)

    const copyCode = async () => {
        try {
            const element =
                type === CodeCopyType.IMAGE
                    ? `<img src="${url}" alt='' />`
                    : `<a href='${link}' target="_blank">
                        <img src="${url}" alt='' />
                    </a>`
            await navigator.clipboard.writeText(element)
            setCopied(true)
        } catch (error) {
            throw new Error(error as string)
        }
    }

    return (
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
                    {type === CodeCopyType.IMAGE
                        ? `<img src="${url}" alt='' />`
                        : `<a href='${link}' target="_blank"><img src="${url}" alt='' /></a>`}
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
    )
}

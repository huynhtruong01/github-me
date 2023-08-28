import { monacoOptions } from '@/data'
import { theme } from '@/utils'
import Editor from '@monaco-editor/react'
import { Box, Button, Container, Grid } from '@mui/material'
import 'github-markdown-css/github-markdown-light.css'
import 'katex/dist/katex.min.css'
import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialLight } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import rehypeKatex from 'rehype-katex'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import FileDownloadIcon from '@mui/icons-material/FileDownload'

export interface ICreateReadmeProps {}

export function CreateReadme() {
    const [content, setContent] = useState<string>('Hello, World <p>hello world</p>')

    const handleContentChange = (value: string | undefined) => {
        if (value) {
            setContent(value)
        }
    }

    const handleDownloadFile = () => {
        const blob = new Blob([content], { type: 'text/markdown' })

        const link = document.createElement('a')
        link.href = URL.createObjectURL(blob)
        link.download = 'README.md'

        link.click()
    }

    return (
        <Box
            component={'section'}
            sx={{
                padding: theme.spacing(4, 0, 8),
                textarea: {
                    fontWeight: 500,
                },
            }}
        >
            <Container
                sx={{
                    marginBottom: 3,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Button
                        variant="contained"
                        startIcon={<FileDownloadIcon />}
                        sx={{
                            padding: theme.spacing(1.2, 2),
                            fontSize: theme.typography.body2,
                            fontWeight: 700,
                        }}
                        onClick={handleDownloadFile}
                    >
                        Tải code ở đây
                    </Button>
                </Box>
            </Container>
            <Box
                sx={{
                    padding: {
                        md: theme.spacing(0, 8),
                        xs: theme.spacing(0, 2),
                    },
                }}
            >
                <Grid container spacing={8}>
                    <Grid item xs={12} md={6}>
                        <Editor
                            height="600px"
                            defaultLanguage="markdown"
                            defaultValue={content}
                            onChange={handleContentChange}
                            options={monacoOptions}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box
                            className="markdown-body"
                            sx={{
                                height: 600,
                                maxHeight: 600,
                                overflowY: 'auto',
                                overflowX: 'hidden',
                                padding: theme.spacing(0, 4),
                            }}
                        >
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm, remarkMath]}
                                rehypePlugins={[rehypeRaw as any, rehypeKatex]}
                                children={content}
                                components={{
                                    code({
                                        node,
                                        inline,
                                        className,
                                        children,
                                        ...props
                                    }) {
                                        const match = /language-(\w+)/.exec(
                                            className || ''
                                        )

                                        return !inline && match ? (
                                            <SyntaxHighlighter
                                                style={materialLight as any}
                                                PreTag="div"
                                                language={match[1]}
                                                children={String(children).replace(
                                                    /\n$/,
                                                    ''
                                                )}
                                                {...props}
                                            />
                                        ) : (
                                            <code
                                                className={className ? className : ''}
                                                {...props}
                                            >
                                                {children}
                                            </code>
                                        )
                                    },
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

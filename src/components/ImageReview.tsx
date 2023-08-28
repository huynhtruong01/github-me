import { ALL } from '@/consts'
import { CodeCopyType } from '@/enums'
import { ICodeCopyType } from '@/models'
import { Box, BoxProps } from '@mui/material'

export interface IImageReviewProps extends BoxProps {
    url: string
    type?: ICodeCopyType
    link?: string
}

export function ImageReview({
    url,
    link,
    type = CodeCopyType.IMAGE,
    ...props
}: IImageReviewProps) {
    return (
        <>
            {url !== ALL && (
                <>
                    {type === CodeCopyType.IMAGE ? (
                        <Box component="img" src={url} {...props} />
                    ) : (
                        <Box component="a" href={link} target="_blank">
                            <Box component="img" src={url} {...props} />
                        </Box>
                    )}
                </>
            )}
            {url === ALL && (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Box
                        component={'img'}
                        src={'/images/no-image.jpg'}
                        sx={{
                            width: 250,
                            height: 'auto',
                            margin: 'auto',
                        }}
                    />
                </Box>
            )}
        </>
    )
}

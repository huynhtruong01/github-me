import { IResource } from '@/models'
import { theme } from '@/utils'
import { Box } from '@mui/material'

export interface IResourceItemProps {
    resource: IResource
}

export function ResourceItem({ resource }: IResourceItemProps) {
    return (
        <Box>
            <Box
                sx={{
                    width: '200px',
                    height: '200px',
                    margin: 'auto',
                    marginBottom: 2,
                }}
            >
                <Box component="img" src={resource.iconLink} />
            </Box>
            <Box
                component="a"
                href={resource.link}
                target="_blank"
                sx={{
                    display: 'block',
                    textAlign: 'center',
                    fontWeight: 600,
                    '&:hover': {
                        color: theme.palette.primary.dark,
                        textDecoration: 'underline',
                    },
                }}
            >
                {resource.name}
            </Box>
        </Box>
    )
}

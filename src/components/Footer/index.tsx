import { theme } from '@/utils'
import { Box, Container, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'

export interface IFooterProps {}

export function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                borderTop: `1px solid ${grey[200]}`,
            }}
        >
            <Container>
                <Typography
                    sx={{
                        textAlign: 'center',
                        padding: theme.spacing(2, 0),
                    }}
                >
                    © Github Me - Được tạo bởi{' '}
                    <Typography
                        component="span"
                        sx={{
                            fontWeight: 700,
                        }}
                    >
                        Athetics Huynh
                    </Typography>
                </Typography>
            </Container>
        </Box>
    )
}

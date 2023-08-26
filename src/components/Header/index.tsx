import { navLinks } from '@/data'
import { theme } from '@/utils'
import { Box, Container, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export interface IHeaderProps {}

export function Header() {
    return (
        <Box
            component="header"
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                backdropFilter: 'blur(8px)',
                zIndex: 50,
            }}
        >
            <Container>
                <Box
                    sx={{
                        padding: theme.spacing(2.5, 0),
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Box
                        sx={{
                            fontSize: theme.typography.h6,
                            fontWeight: 700,
                        }}
                    >
                        <Link to={''}>GithubMe</Link>
                    </Box>
                    <Box component="nav">
                        <Box
                            component="ul"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 5,
                            }}
                        >
                            {navLinks.map((link) => {
                                const Icon = link.icon
                                return (
                                    <Box
                                        component="li"
                                        key={link.name}
                                        sx={{
                                            a: {
                                                display: 'inline-flex',
                                                gap: 0.5,
                                                alignItems: 'center',
                                            },
                                        }}
                                    >
                                        <Link to={link.link}>
                                            <Icon />
                                            <Typography
                                                component="span"
                                                sx={{
                                                    fontWeight: 600,
                                                }}
                                            >
                                                {link.name}
                                            </Typography>
                                        </Link>
                                    </Box>
                                )
                            })}
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

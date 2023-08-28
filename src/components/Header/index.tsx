import { HEIGHT_HEADER } from '@/consts'
import { navLinks } from '@/data'
import { theme } from '@/utils'
import AddIcon from '@mui/icons-material/Add'
import { Box, Button, Container, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export interface IHeaderProps {}

export function Header() {
    const navigate = useNavigate()
    const location = useLocation()
    const [pathname, setPathname] = useState<string>(location.pathname)

    useEffect(() => {
        setPathname(location.pathname)
    }, [navigate, location])

    return (
        <Box
            component="header"
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                backdropFilter: 'blur(8px)',
                height: HEIGHT_HEADER,
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
                            fontWeight: 800,
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
                            }}
                        >
                            {navLinks.map((link) => (
                                <Box
                                    component="li"
                                    key={link.name}
                                    sx={{
                                        a: {
                                            position: 'relative',
                                            padding: theme.spacing(1, 3),
                                        },
                                    }}
                                >
                                    <Link to={link.link}>
                                        <Typography
                                            component="span"
                                            sx={{
                                                fontWeight: 700,
                                            }}
                                        >
                                            {link.name}
                                        </Typography>
                                        {pathname === link.link && (
                                            <Typography
                                                component="span"
                                                sx={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    position: 'absolute',
                                                    bottom: 0,
                                                    left: 0,
                                                    width: '100%',
                                                    height: '2px',
                                                }}
                                            >
                                                <Typography
                                                    component="span"
                                                    sx={{
                                                        display: 'inline-block',
                                                        width: '30%',
                                                        height: '2px',
                                                        backgroundColor:
                                                            theme.palette.primary.light,
                                                        borderRadius: 4,
                                                        animation:
                                                            'lineLink 0.3s ease-in-out',
                                                    }}
                                                ></Typography>
                                            </Typography>
                                        )}
                                    </Link>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                    <Box>
                        <Button
                            startIcon={<AddIcon />}
                            variant="contained"
                            sx={{
                                padding: theme.spacing(1.5, 3),
                                fontSize: theme.typography.body2,
                                fontWeight: 700,
                            }}
                            onClick={() => navigate('/create-readme')}
                        >
                            Tạo Readme File
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

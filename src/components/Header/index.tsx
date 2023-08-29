import { HEIGHT_HEADER } from '@/consts'
import { navLinks } from '@/data'
import { theme } from '@/utils'
import AddIcon from '@mui/icons-material/Add'
import {
    Box,
    Button,
    Container,
    IconButton,
    Typography,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import DehazeIcon from '@mui/icons-material/Dehaze'

export interface IHeaderProps {}

export function Header() {
    const navigate = useNavigate()
    const location = useLocation()
    const [pathname, setPathname] = useState<string>(location.pathname)
    const [openDrawer, setOpenDrawer] = useState<boolean>(false)

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
                        {/* desktop */}
                        <Box
                            component="ul"
                            sx={{
                                display: {
                                    md: 'flex',
                                    xs: 'none',
                                },
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
                        {/* mobile */}
                        <Box
                            sx={{
                                display: {
                                    md: 'none',
                                    xs: 'block',
                                },
                            }}
                        >
                            <IconButton onClick={() => setOpenDrawer(true)}>
                                <DehazeIcon />
                            </IconButton>
                            <Drawer
                                anchor={'right'}
                                open={openDrawer}
                                onClose={() => setOpenDrawer(false)}
                            >
                                <Box
                                    sx={{
                                        paddingTop: 2,
                                        width: 250,
                                        height: '100dvh',
                                        backgroundColor: '#ffffff',
                                    }}
                                >
                                    <List>
                                        {navLinks.map((nav) => {
                                            const Icon = nav.icon
                                            return (
                                                <ListItem
                                                    key={nav.link}
                                                    disablePadding
                                                    sx={{
                                                        display: 'block',
                                                        a: {
                                                            display: 'block',
                                                        },
                                                        backgroundColor:
                                                            nav.link === pathname
                                                                ? theme.palette.primary
                                                                      .main
                                                                : 'transparent',
                                                        color:
                                                            nav.link === pathname
                                                                ? theme.palette.primary
                                                                      .contrastText
                                                                : 'inherit',
                                                    }}
                                                >
                                                    <Link
                                                        to={nav.link}
                                                        onClick={() =>
                                                            setOpenDrawer(false)
                                                        }
                                                    >
                                                        <ListItemButton>
                                                            <ListItemIcon
                                                                sx={{
                                                                    color:
                                                                        nav.link ===
                                                                        pathname
                                                                            ? theme
                                                                                  .palette
                                                                                  .primary
                                                                                  .contrastText
                                                                            : theme
                                                                                  .palette
                                                                                  .primary
                                                                                  .main,
                                                                }}
                                                            >
                                                                <Icon />
                                                            </ListItemIcon>
                                                            <ListItemText
                                                                primary={nav.name}
                                                                sx={{
                                                                    color:
                                                                        nav.link ===
                                                                        pathname
                                                                            ? theme
                                                                                  .palette
                                                                                  .primary
                                                                                  .contrastText
                                                                            : 'inherit',
                                                                    fontWeight: 600,
                                                                }}
                                                            />
                                                        </ListItemButton>
                                                    </Link>
                                                </ListItem>
                                            )
                                        })}
                                    </List>
                                </Box>
                            </Drawer>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: {
                                md: 'block',
                                xs: 'none',
                            },
                        }}
                    >
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

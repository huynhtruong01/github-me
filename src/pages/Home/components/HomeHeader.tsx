import { SectionContainer } from '@/components'
import { theme } from '@/utils'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Box, Button, Grid, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export interface IHomeHeaderProps {}

export function HomeHeader() {
    const navigate = useNavigate()

    return (
        <SectionContainer
            sx={{
                margin: {
                    md: theme.spacing(0, 0, 14),
                    xs: theme.spacing(0, 0, 6),
                },
            }}
        >
            <Grid
                container
                spacing={4}
                sx={{
                    padding: {
                        md: theme.spacing(14, 0, 8),
                        xs: theme.spacing(4, 0),
                    },
                    alignItems: 'center',
                }}
            >
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                        textAlign: {
                            md: 'left',
                            xs: 'center',
                        },
                    }}
                >
                    <Typography
                        component="h1"
                        variant="h4"
                        sx={{
                            fontWeight: 800,
                            marginBottom: theme.spacing(2),
                        }}
                    >
                        Welcome, <br />
                        Chào mừng bạn đến với GithubMe
                    </Typography>
                    <Typography
                        sx={{
                            width: {
                                md: '100%',
                                xs: '85%',
                            },
                            textAlign: {
                                md: 'left',
                                xs: 'center',
                            },
                            margin: {
                                xs: 'auto',
                            },
                            marginBottom: {
                                xs: 3,
                            },
                        }}
                    >
                        Đây là trang web bạn cần để tạo một Readme đẹp mắt trên Github và
                        đồng thời tạo ấn tượng tốt đối với các nhà tuyển dụng <br />
                        khi xem Github của bạn
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: theme.palette.primary.light,
                            '&:hover': {
                                backgroundColor: theme.palette.primary.dark,
                            },
                        }}
                        endIcon={<ArrowForwardIosIcon />}
                        onClick={() => navigate('/statistics')}
                    >
                        Thống kê Github ngay
                    </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box component="img" src={'/images/home_page.png'} />
                </Grid>
            </Grid>
        </SectionContainer>
    )
}

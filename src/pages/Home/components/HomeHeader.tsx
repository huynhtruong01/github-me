import { SectionContainer } from '@/components'
import { theme } from '@/utils'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Box, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export interface IHomeHeaderProps {}

export function HomeHeader() {
    const navigate = useNavigate()

    return (
        <SectionContainer
            sx={{
                margin: theme.spacing(0, 0, 14),
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                    paddingTop: 10,
                }}
            >
                <Box
                    sx={{
                        flex: 1,
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
                            marginBottom: 3,
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
                </Box>
                <Box
                    sx={{
                        flex: 1,
                    }}
                >
                    <Box component="img" src={'/images/home_page.png'} />
                </Box>
            </Box>
        </SectionContainer>
    )
}

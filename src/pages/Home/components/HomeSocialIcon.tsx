import { SectionContainer } from '@/components'
import { theme } from '@/utils'
import { Box, Typography } from '@mui/material'

export interface IHomeSocialIconProps {}

export function HomeSocialIcon() {
    return (
        <SectionContainer
            sx={{
                padding: theme.spacing(4, 0),
                margin: theme.spacing(2, 0),
            }}
        >
            <Box
                sx={{
                    margin: theme.spacing(2, 0, 6),
                }}
            >
                <Typography
                    component="h2"
                    variant="h5"
                    sx={{
                        fontWeight: 800,
                        textAlign: 'center',
                        marginBottom: 0.5,
                    }}
                >
                    Icon Mạng xã hội
                </Typography>
                <Typography
                    sx={{
                        textAlign: 'center',
                    }}
                >
                    Thêm các icon mạng xã hội sinh động
                </Typography>
            </Box>
            <Box
                sx={{
                    width: '70%',
                    maxWidth: '100%',
                    margin: 'auto',
                }}
            >
                <Box
                    sx={{
                        marginBottom: 2,
                    }}
                >
                    <Box component="img" src={'/images/social-icons.png'} />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                        '& span': {
                            fontWeight: 700,
                        },
                    }}
                >
                    <Typography>
                        Trong việc phát triển dự án trên GitHub, việc thêm các biểu tượng
                        mạng xã hội vào tệp README có thể giúp tạo điểm nhấn và tạo liên
                        kết dễ dàng đến các trang cá nhân của bạn trên các mạng xã hội như
                        Facebook, Twitter, LinkedIn và nhiều mạng khác. Điều này không chỉ
                        làm cho tệp README trở nên hấp dẫn hơn mà còn giúp kết nối người
                        dùng và nhóm phát triển với nhau một cách thuận tiện.
                    </Typography>
                    <Typography>
                        Thông qua việc sử dụng mã{' '}
                        <Typography component="span">Markdown</Typography> hoặc{' '}
                        <Typography component="span">HTML</Typography>, bạn có thể dễ dàng
                        nhúng biểu tượng của mạng xã hội vào tệp{' '}
                        <Typography component="span">README</Typography> một cách linh
                        hoạt và tùy chỉnh theo ý muốn. Việc thêm các biểu tượng này không
                        chỉ tạo thêm màu sắc và sự hấp dẫn cho tệp README mà còn giúp bạn
                        xây dựng mối quan hệ với cộng đồng và tạo sự tin cậy trong dự án
                        của mình.
                    </Typography>
                    <Typography>
                        Bất kỳ ai truy cập vào dự án của bạn đều có thể dễ dàng nhận biết
                        và theo dõi bạn trên các mạng xã hội thông qua những biểu tượng
                        tương ứng. Điều này là một cách tuyệt vời để tạo liên kết và kết
                        nối với những người quan tâm đến dự án của bạn, mở ra cơ hội cho
                        việc chia sẻ thông tin và tương tác với cộng đồng một cách dễ
                        dàng.
                    </Typography>
                </Box>
            </Box>
        </SectionContainer>
    )
}

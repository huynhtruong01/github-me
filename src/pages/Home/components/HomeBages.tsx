import { SectionContainer } from '@/components'
import { theme } from '@/utils'
import { Box, Typography } from '@mui/material'

export interface IHomeBadgesProps {}

export function HomeBadges() {
    return (
        <SectionContainer
            sx={{
                padding: theme.spacing(4, 0),
                margin: theme.spacing(2, 0),
            }}
        >
            <Box
                sx={{
                    margin: {
                        md: theme.spacing(2, 0, 6),
                        xs: theme.spacing(2, 0, 3),
                    },
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
                    Huy hiệu Github
                </Typography>
                <Typography
                    sx={{
                        textAlign: 'center',
                    }}
                >
                    Tạo những huy hiệu để thể hiện bản thân đã học gì❓❓
                </Typography>
            </Box>
            <Box
                sx={{
                    width: {
                        md: '70%',
                        xs: '100%',
                    },
                    maxWidth: '100%',
                    margin: 'auto',
                }}
            >
                <Box
                    sx={{
                        marginBottom: 2,
                    }}
                >
                    <Box component="img" src={'/images/badge.png'} />
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
                        Trong tệp README của dự án trên GitHub, việc thêm các biểu tượng
                        (badges) là một cách tuyệt vời để cung cấp thông tin nhanh chóng
                        và trực quan về trạng thái và tính năng của dự án. Các biểu tượng
                        này thường được liên kết với các dịch vụ, trạng thái hoặc thông
                        tin liên quan đến dự án của bạn, giúp người đọc dễ dàng tiếp cận
                        các thông tin quan trọng mà không cần đọc qua nhiều văn bản.
                    </Typography>
                    <Typography>
                        Ví dụ, bạn có thể sử dụng biểu tượng để hiển thị các icon về ngôn
                        ngữ lập trình, các framework, số lượng người dùng đã star dự án
                        của bạn trên GitHub, số lượng fork, giấy phép sử dụng, trạng thái
                        xây dựng từ CI/CD, bảng điểm của dự án, và nhiều thông tin khác.
                    </Typography>
                    <Typography>
                        Các biểu tượng thường được tạo ra bằng cách sử dụng hình ảnh được
                        lấy từ dịch vụ hoặc sử dụng các biểu tượng mà GitHub cung cấp sẵn.
                        Để tạo và nhúng các biểu tượng này vào tệp README, bạn có thể sử
                        dụng cú pháp Markdown đơn giản. Chúng giúp tạo nên một giao diện
                        hấp dẫn cho dự án của bạn và thu hút sự chú ý từ phía người sử
                        dụng và đồng phát triển.
                    </Typography>
                    <Typography>
                        Với việc thêm các biểu tượng vào README, bạn có thể cung cấp một
                        cái nhìn tổng quan về dự án và làm cho thông tin quan trọng dễ
                        dàng tiếp cận, giúp tạo ra một trải nghiệm tốt hơn cho người đọc
                        và người sử dụng dự án của bạn trên GitHub.
                    </Typography>
                </Box>
            </Box>
        </SectionContainer>
    )
}

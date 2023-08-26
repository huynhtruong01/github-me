import { IResource, IStep } from '@/models'

export const stepGuideList: IStep[] = [
    {
        id: 1,
        title: 'Đăng nhập/ Đăng ký tài khoản Github',
        content:
            'Đăng nhập/ Đăng ký tài khoản Github của bạn để tạo Readme bằng file Markdown với những nội dung thú vị và tạo ấn tượng.',
    },
    {
        id: 2,
        title: 'Tạo file bằng Markdown 👍👍',
        content:
            'Tạo một file Readme bằng Markdown để bạn có thể viết những nội dung để giới thiệu về bản thân, thống kê những gì bạn đã làm được trong Github của bạn.',
    },
    {
        id: 3,
        title: 'Nhập bất kỳ nội dung bạn muốn 😊😊',
        content:
            'Viết những nội dung để giới thiệu về bản thân, thống kê những gì bạn đã làm được trong Github của bạn. Ví dụ về các ngôn ngữ bạn làm, các đường link dự án tâm huyết nhất của bạn,...',
    },
    {
        id: 4,
        title: 'Sử dụng ứng dụng của tui 😁😁',
        content:
            'Bạn có thể sử dụng ứng dụng của tui để tạo ra các hình thống kê, các icon về ngôn ngữ lập trình, các huy hiệu vô cùng xịn xò để làm nổi bật và gây ấn tượng với người xem, các nhà tuyển dụng,...',
    },
]

export const resources: IResource[] = [
    {
        name: "Anurag's Github",
        link: 'https://github.com/anuraghazra/github-readme-stats/blob/master/themes/README.md',
        iconLink: '/images/resource_1.png',
    },
    {
        name: "Ileriayo's Github",
        link: 'https://github.com/Ileriayo/markdown-badges',
        iconLink: '/images/resource_2.png',
    },
    {
        name: "Alexandresanlim's Github",
        link: 'https://github.com/alexandresanlim/Badges4-README.md-Profile',
        iconLink: '/images/resource_3.png',
    },
]

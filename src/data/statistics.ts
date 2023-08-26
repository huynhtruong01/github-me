import { RankIcon } from '@/enums'

export const themeData: string[] = [
    'tokyonight',
    'default',
    'dark',
    'radical',
    'merko',
    'onedark',
    'cobalt',
    'synthwave',
    'highcontrast',
    'dracula',
    'pussian',
    'vue',
    'vue-dark',
    'shades-of-purple',
    'nightowl',
    'buefy',
    'algolia',
    'gotham',
    'midnight-purple',
    'react',
    'jolly',
    'github_dark',
    'outrun',
]

export const githubMoreKeys = [
    'reviews',
    'discussions_started',
    'discussions_answered',
    'prs_merged',
    'prs_merged_percentage',
]

export const rankIcon = [
    {
        name: 'Mặc định',
        value: RankIcon.DEFAULT,
    },
    {
        name: 'Github icon',
        value: RankIcon.GITHUB,
    },
    {
        name: 'Phần trăm',
        value: RankIcon.PERCENTILE,
    },
]

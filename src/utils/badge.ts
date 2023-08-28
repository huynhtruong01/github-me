import {
    stores,
    testings,
    versionControls,
    works,
    artificialIntelligences,
    blogs,
    cds,
    cis,
    cryptoCurrencies,
    databases,
    designs,
    editors,
    educations,
    gamings,
    hostings,
    musics,
    operatingSystems,
    orms,
} from '@/data'
import { ThemeBadge } from '@/enums'
import { IOptionValue, IThemeBadge } from '@/models'

export const filterBadges = (theme: IThemeBadge) => {
    let badgeList: IOptionValue[] = []
    switch (theme) {
        case ThemeBadge.ARTIFICIAL_INTELLIGENCE: {
            badgeList = artificialIntelligences
            break
        }
        case ThemeBadge.BLOG: {
            badgeList = blogs
            break
        }
        case ThemeBadge.BROWSER: {
            badgeList = blogs
            break
        }
        case ThemeBadge.CD: {
            badgeList = cds
            break
        }
        case ThemeBadge.CI: {
            badgeList = cis
            break
        }
        case ThemeBadge.CRYPTOCURRENCY: {
            badgeList = cryptoCurrencies
            break
        }
        case ThemeBadge.DATABASES: {
            badgeList = databases
            break
        }
        case ThemeBadge.DESIGN: {
            badgeList = designs
            break
        }
        case ThemeBadge.EDITORS: {
            badgeList = editors
            break
        }
        case ThemeBadge.EDUCATION: {
            badgeList = educations
            break
        }
        case ThemeBadge.GAMING: {
            badgeList = gamings
            break
        }
        case ThemeBadge.HOSTING: {
            badgeList = hostings
            break
        }
        case ThemeBadge.MUSIC: {
            badgeList = musics
            break
        }
        case ThemeBadge.OPERATING_SYSTEM: {
            badgeList = operatingSystems
            break
        }
        case ThemeBadge.ORM: {
            badgeList = orms
            break
        }
        case ThemeBadge.STORE: {
            badgeList = stores
            break
        }
        case ThemeBadge.TESTING: {
            badgeList = testings
            break
        }
        case ThemeBadge.VERSION_CONTROL: {
            badgeList = versionControls
            break
        }
        case ThemeBadge.WORKS: {
            badgeList = works
            break
        }
        default: {
            badgeList = []
        }
    }

    return badgeList
}

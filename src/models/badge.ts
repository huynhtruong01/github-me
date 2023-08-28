import { ALL } from '@/consts'
import { TechStack, ThemeBadge } from '@/enums'

export interface IOptionValue {
    name: string
    value: string
}

export type ITechStack = TechStack.FRAMEWORK | TechStack.PROGRAMMING
export type IThemeBadge = `${ThemeBadge}` | typeof ALL

import { CodeCopyType, Layout } from '@/enums'

export * from '@/models/home'
export * from '@/models/badge'

export type ILayout =
    | Layout.DEFAULT
    | Layout.COMPACT
    | Layout.DONUT
    | Layout.DONUT_VERTICAL
    | Layout.PIE

export type ICodeCopyType = CodeCopyType.IMAGE | CodeCopyType.LINK

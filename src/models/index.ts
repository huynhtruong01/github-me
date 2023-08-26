import { Layout } from '@/enums'

export * from '@/models/home'

export type ILayout =
    | Layout.DEFAULT
    | Layout.COMPACT
    | Layout.DONUT
    | Layout.DONUT_VERTICAL
    | Layout.PIE

import { AccordingCopyCode, ImageReview, SectionItemStatsAndBadge } from '@/components'
import { SelectField } from '@/components/Fields'
import { ALL } from '@/consts'
import { frameWorks, programmingLanguages, techStacks } from '@/data'
import { TechStack } from '@/enums'
import { IOptionValue, ITechStack } from '@/models'
import { Grid } from '@mui/material'
import { useEffect, useState } from 'react'

export interface ILanguagesBadgeProps {}

export function LanguagesBadge() {
    const [techStack, setTechStack] = useState<ITechStack>(TechStack.PROGRAMMING)
    const [techList, setTechList] = useState<IOptionValue[]>([])
    const [tech, setTech] = useState<string>('')

    useEffect(() => {
        switch (techStack) {
            case TechStack.FRAMEWORK:
                setTechList(frameWorks.length ? frameWorks : [])
                setTech(frameWorks.length ? frameWorks[0].value : ALL)
                break
            default:
                setTechList(programmingLanguages.length ? programmingLanguages : [])
                setTech(programmingLanguages.length ? programmingLanguages[0].value : ALL)
        }
    }, [techStack])

    return (
        <SectionItemStatsAndBadge
            title={'Công nghệ lập trình'}
            subTitle={'Programming Tech'}
        >
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <SelectField<ITechStack, IOptionValue>
                        label={'Công nghệ'}
                        value={techStack}
                        setValue={setTechStack}
                        options={techStacks}
                    />
                    <SelectField<string, IOptionValue>
                        label={'Ngôn ngữ lập trình/Framework'}
                        value={tech}
                        setValue={setTech}
                        options={techList}
                    />
                    <AccordingCopyCode url={tech} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <ImageReview
                        url={tech}
                        sx={{
                            width: 200,
                            height: 'auto',
                        }}
                    />
                </Grid>
            </Grid>
        </SectionItemStatsAndBadge>
    )
}

import { AccordingCopyCode, ImageReview, SectionItemStatsAndBadge } from '@/components'
import { InputField, SelectField } from '@/components/Fields'
import { socials } from '@/data/badge'
import { CodeCopyType } from '@/enums'
import { IOptionValue } from '@/models'
import LinkIcon from '@mui/icons-material/Link'
import { Grid } from '@mui/material'
import { grey } from '@mui/material/colors'
import { useState } from 'react'

export interface ISocialMediaBadgeProps {}

export function SocialMediaBadge() {
    const [social, setSocial] = useState<string>(socials[0].value)
    const [linkSocial, setLinkSocial] = useState<string>('')

    return (
        <SectionItemStatsAndBadge title={'Mạng xã hội'} subTitle={'Social media'}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <InputField
                        label={'Đường dẫn mạng xã hội của bạn'}
                        value={linkSocial}
                        setValue={setLinkSocial}
                        icon={LinkIcon}
                    />
                    <SelectField<string, IOptionValue>
                        label={'Mạng xã hội'}
                        value={social}
                        setValue={setSocial}
                        options={socials}
                    />
                    <AccordingCopyCode
                        url={social}
                        link={linkSocial}
                        type={CodeCopyType.LINK}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <ImageReview
                        url={social}
                        type={CodeCopyType.LINK}
                        link={linkSocial}
                        sx={{
                            width: 200,
                            height: 'auto',
                            cursor: 'pointer',
                            border: `4px solid ${grey[200]}`,
                            borderRadius: 2.5,
                            '&:hover': {
                                borderColor: grey[300],
                                transition: '0.2s ease-in-out',
                            },
                        }}
                    />
                </Grid>
            </Grid>
        </SectionItemStatsAndBadge>
    )
}

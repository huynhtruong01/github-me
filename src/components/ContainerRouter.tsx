import { Box } from '@mui/material'
import { ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export interface IContainerRouterProps {
    children: ReactNode
}

export function ContainerRouter({ children }: IContainerRouterProps) {
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        })
    }, [navigate])

    return <Box>{children}</Box>
}

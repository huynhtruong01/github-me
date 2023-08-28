import '@/App.css'
import { ContainerRouter, Footer, Header } from '@/components'
import { Badge, CreateReadme, HomePage, Statistics } from '@/pages'
import { Box } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import { HEIGHT_HEADER } from './consts'

function App() {
    return (
        <>
            <Header />
            <Box
                component="main"
                sx={{
                    minHeight: '100vh',
                    paddingTop: HEIGHT_HEADER,
                }}
            >
                <ContainerRouter>
                    <Routes>
                        <Route path="" element={<HomePage />} />
                        <Route path="statistics" element={<Statistics />} />
                        <Route path="badges" element={<Badge />} />
                        <Route path="create-readme" element={<CreateReadme />} />
                    </Routes>
                </ContainerRouter>
            </Box>
            <Footer />
        </>
    )
}

export default App

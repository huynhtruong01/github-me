import { Route, Routes } from 'react-router-dom'
import '@/App.css'
import { Badge, HomePage, Socials, Statistics } from '@/pages'
import { Footer, Header } from '@/components'
import { Box, Container } from '@mui/material'
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
                <Routes>
                    <Route path="" element={<HomePage />} />
                    <Route path="statistics" element={<Statistics />} />
                    <Route path="socials" element={<Socials />} />
                    <Route path="badges" element={<Badge />} />
                </Routes>
            </Box>
            <Footer />
        </>
    )
}

export default App

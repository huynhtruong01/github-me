import '@/App.css'
import { Footer, Header } from '@/components'
import { Badge, HomePage, Statistics } from '@/pages'
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
                <Routes>
                    <Route path="" element={<HomePage />} />
                    <Route path="statistics" element={<Statistics />} />
                    <Route path="badges" element={<Badge />} />
                </Routes>
            </Box>
            <Footer />
        </>
    )
}

export default App

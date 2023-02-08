import { CssBaseline } from "@mui/material";
import  Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import { Copyright } from "./Copyright";

export const StickyFooter = () => {
    return (
        <Box 
            sx={
            {
                display: 'flex',
                flexDirection: 'column'
            }
        }>
            <CssBaseline />
            <Box 
                component='footer'
                sx={{
                    px: 3,
                    py: 2,
                    mt: 'auto',
                    backgroundColor: (theme) => theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800]
                }}
                >
                    <Container
                        maxWidth='sm'>
                        <Copyright sx={{
                            pt: 4
                            }}/>
                    </Container>
            </Box>
        </Box>
    )
}
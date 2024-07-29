// src/components/Footer.js
import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                py: 3,
                backgroundColor: 'black',
                color: 'white',
                mt: 'auto',
                width: '100%',
                '@media (max-width: 600px)': {
                    py: 2,
                },
            }}
        >
            <Typography variant="body1">
                &copy; {new Date().getFullYear()} Your Company. All rights reserved.
            </Typography>
            <Box sx={{ mt: 1 }}>
                <Link href="#" color="inherit" sx={{ mx: 2 }}>
                    Privacy Policy
                </Link>
                <Link href="#" color="inherit" sx={{ mx: 2 }}>
                    Terms of Service
                </Link>
                <Link href="#" color="inherit" sx={{ mx: 2 }}>
                    Contact
                </Link>
            </Box>
            <Box sx={{ mt: 1, display: 'flex', justifyContent: 'center' }}>
                <IconButton
                    color="inherit"
                    component="a"
                    href="https://www.linkedin.com/in/p-anita-705980258/"
                    target="_blank"
                    sx={{ mx: 1 }}
                >
                    <LinkedInIcon />
                </IconButton>
                <IconButton
                    color="inherit"
                    component="a"
                    href="https://api.whatsapp.com/send?phone=9360087346"
                    target="_blank"
                    sx={{ mx: 1 }}
                >
                    <WhatsAppIcon />
                </IconButton>
            </Box>
        </Box>
    );
};

export default Footer;

import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const About = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                backgroundImage: 'url(https://img.officetimeline.com/website/Content/images/articles/PM-Task-Management/task-management-hero-banner.png)', // Replace with your background image URL
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                padding: 2,
                color: '#fff', 
            }}
        >
            <Container maxWidth="md">
                <Typography variant="h3" gutterBottom align="center" color="black">
                    About Us
                </Typography>
                {/* <Typography variant="body1" paragraph align="center" color="black">
                    Welcome to our About page. Here, you will learn more about our mission and values.
                </Typography> */}

                {/* Main Content */}
                <Box
                    sx={{
                        backgroundColor: 'rgba(0, 0, 0, 0.7)', 
                        borderRadius: 2,
                        padding: 3,
                        boxShadow: 2,
                        textAlign: 'center',
                        maxWidth: '800px',
                        margin: 'auto',
                        color: '#fff', 
                    }}
                >
                    <Typography variant="h5" gutterBottom>
                        Our Mission
                    </Typography>
                    <Typography variant="body1">
                        We strive to provide top-notch task management solutions to help you stay organized and productive. Our mission is to enhance productivity through innovative and user-friendly tools.
                    </Typography>
                    <br />
                    <Typography variant="body1">
                        We are committed to continuous improvement and adapting our solutions to meet your needs effectively. Explore our platform to discover how we can assist you in achieving your goals.
                    </Typography>
                </Box>

                {/* <Typography variant="body1" paragraph align="center" color="inherit">
                    Thank you for visiting our page. We look forward to helping you with your task management needs!
                </Typography> */}
            </Container>
        </Box>
    );
};

export default About;

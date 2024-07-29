import React from 'react';
import { Box, Typography, Container, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer'; 

const Home = () => {
    const navigate = useNavigate(); 

    const handleGetStarted = () => {
        navigate('/signup'); 
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            <Box sx={{ flexGrow: 1, padding: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Box
                            component="img"
                            src="https://img.freepik.com/free-vector/task-management-abstract-concept-illustration_335657-2127.jpg"
                            alt="Task Management"
                            sx={{ width: '100%', height: 'auto', borderRadius: 2 }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Container>
                            <Typography variant="h3" gutterBottom color="black">
                                GET YOUR TASK DONE EASILY
                            </Typography>
                            <Typography variant="body1" color="black" paragraph>
                                Break down large projects into manageable tasks. Prioritize tasks based on deadlines and importance. Use categories or labels to keep similar tasks grouped together.
                            </Typography>
                            <Typography variant="body1" color="black" paragraph>
                                Use progress bars and status updates to visualize your task completion. Review completed tasks to reflect on your achievements and areas for improvement. Generate reports to analyze your productivity and identify bottlenecks.
                            </Typography>
                            <Typography variant="body1" color="black" paragraph>
                                Adapt your task management system to fit your specific needs and preferences. Create custom workflows for different projects or teams. Use templates for recurring tasks to save time and maintain consistency.
                            </Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleGetStarted}
                                sx={{
                                    mt: 3,
                                    py: 2, 
                                    px: 4, 
                                    fontSize: '1.2rem', 
                                    borderRadius: '8px', 
                                    boxShadow: 3, 
                                    textTransform: 'uppercase', 
                                    backgroundColor: 'blue', 
                                    
                                }}
                            >
                                Get Started
                            </Button>
                        </Container>
                    </Grid>
                </Grid>
            </Box>
            <Footer />
        </Box>
    );
};

export default Home;

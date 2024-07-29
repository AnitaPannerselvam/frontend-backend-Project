import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Avatar, Divider, List, ListItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const User = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch user details from an API or static data
        const fetchUserDetails = async () => {
            // Simulate fetching data
            const userData = {
                name: "Maria",
                email: "mariaterasa@gmail.com",
                profilePicture: "https://via.placeholder.com/100",
                address: "3/60 Kuniamuthur",
                phone: "(123) 456-7890",
                taskCount: 5, // Simulated number of tasks
                tasks: [
                    "Complete React project",
                    "Review pull requests",
                    "Write documentation",
                    "Update website",
                    "Prepare presentation"
                ] // Simulated task list
            };
            setUser(userData);
        };
        fetchUserDetails();
    }, []);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                backgroundImage: 'url(https://png.pngtree.com/thumb_back/fw800/background/20240209/pngtree-task-management-business-planning-app-illustration-vector-image_15623958.jpg)', // Replace with your image path
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                padding: 2,
               
            }}
        >
            {user ? (
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        borderRadius: 2,
                        padding: 2,
                        width: '80%',
                        maxWidth: '600px',
                        textAlign: 'center',
                    }}
                >
                    <Avatar 
                        alt={user.name}
                        src={user.profilePicture}
                        sx={{ width: 100, height: 100, mb: 2 }}
                    />
                    <Typography variant="h4" gutterBottom>
                        {user.name}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        <strong>Email:</strong> {user.email}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        <strong>Address:</strong> {user.address}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        <strong>Phone:</strong> {user.phone}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        <strong>Tasks Added:</strong> {user.taskCount}
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <Typography variant="h6" gutterBottom>
                        <strong>Task List:</strong>
                    </Typography>
                    <List>
                        {user.tasks.map((task, index) => (
                            <ListItem key={index} sx={{ justifyContent: 'center' }}>
                                {task}
                            </ListItem>
                        ))}
                    </List>
                    <Divider sx={{ my: 2 }} />
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={() => navigate('/user/settings')}
                        sx={{ mt: 2 }}
                    >
                        Edit Profile
                    </Button>
                </Box>
            ) : (
                <Typography variant="h6">Loading user details...</Typography>
            )}
        </Box>
    );
};

export default User;

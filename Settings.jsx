import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, Avatar, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        profilePicture: "https://via.placeholder.com/100"
    });
    const [isEditing, setIsEditing] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch user details from an API or static data
        const fetchUserDetails = async () => {
            // Simulate fetching data
            const userData = {
                name: "John Doe",
                email: "john.doe@example.com",
                phone: "(123) 456-7890",
                address: "1234 Elm Street",
                profilePicture: "https://via.placeholder.com/100"
            };
            setUser(userData);
        };
        fetchUserDetails();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSave = () => {
        // Save updated user details to API or local storage
        console.log("Updated User Details:", user);
        setIsEditing(false);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                backgroundImage: 'url(https://media.istockphoto.com/id/1700755909/photo/project-management-system.webp?b=1&s=170667a&w=0&k=20&c=Rtr2s95lqfvGE0Y-lcjCfOVHGaVbvrMnstsXO7I8CCk=)', // Replace with your image path
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                padding: 2,
            
            }}
        >
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
                    User Settings
                </Typography>
                <TextField
                    name="name"
                    label="Name"
                    value={user.name}
                    onChange={handleChange}
                    variant="outlined"
                    sx={{ mb: 2, width: '100%' }}
                    disabled={!isEditing}
                />
                <TextField
                    name="email"
                    label="Email"
                    value={user.email}
                    onChange={handleChange}
                    variant="outlined"
                    sx={{ mb: 2, width: '100%' }}
                    disabled={!isEditing}
                />
                <TextField
                    name="phone"
                    label="Phone"
                    value={user.phone}
                    onChange={handleChange}
                    variant="outlined"
                    sx={{ mb: 2, width: '100%' }}
                    disabled={!isEditing}
                />
                <TextField
                    name="address"
                    label="Address"
                    value={user.address}
                    onChange={handleChange}
                    variant="outlined"
                    sx={{ mb: 2, width: '100%' }}
                    disabled={!isEditing}
                />
                <Divider sx={{ my: 2 }} />
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={() => setIsEditing(!isEditing)}
                    sx={{ mt: 2 }}
                >
                    {isEditing ? "Cancel" : "Edit"}
                </Button>
                {isEditing && (
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={handleSave}
                        sx={{ mt: 2, ml: 2 }}
                    >
                        Save
                    </Button>
                )}
            </Box>
        </Box>
    );
};

export default Settings;

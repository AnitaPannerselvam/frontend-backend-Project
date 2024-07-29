import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        AdminId: '',
        AdminName: '',
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        
        console.log('Form submitted with:', formData);

        if (
            formData.AdminId === 'ANITA_2005' &&
            formData.AdminName === 'ANITA' &&
            formData.email === 'ap7278053@gmail.com'
        ) {
            navigate('/adminpage');
        } else {
            alert('Invalid admin credentials');
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                backgroundImage: 'url(https://png.pngtree.com/thumb_back/fh260/background/20220427/pngtree-tiny-business-people-and-manager-at-tasks-and-goals-accomplishment-chart-image_1091427.jpg)', // Replace with your image path
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                padding: 2,
            }}
        >
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    mt: -6,
                    mx: 2,
                    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                    borderRadius: 2,
                    padding: 2,
                    width: '40%', 
                    maxWidth: '500px', 
                    marginLeft: '-600px', 
                }}
            >
                <Typography variant="h4" gutterBottom color="black">
                    ADMIN
                </Typography>
                <TextField
                    required
                    id="AdminId"
                    label="AdminId"
                    type="text"
                    variant="outlined"
                    margin="normal"
                    value={formData.AdminId}
                    onChange={handleChange}
                    sx={{ width: '100%' }}
                />
                <TextField
                    required
                    id="AdminName"
                    label="AdminName"
                    type="text"
                    variant="outlined"
                    margin="normal"
                    value={formData.AdminName}
                    onChange={handleChange}
                    sx={{ width: '100%' }}
                />
                <TextField
                    required
                    id="email"
                    label="Email"
                    type="email"
                    variant="outlined"
                    margin="normal"
                    value={formData.email}
                    onChange={handleChange}
                    sx={{ width: '100%' }}
                />
                <TextField
                    required
                    id="password"
                    label="Password"
                    type="password"
                    variant="outlined"
                    margin="normal"
                    value={formData.password}
                    onChange={handleChange}
                    sx={{ width: '100%' }}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    sx={{ mt: 3, mb: 2, width: '40%' }}
                >
                    LOGIN
                </Button>
            </Box>
        </Box>
    );
};

export default Admin;

import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Alert } from '@mui/material';

const Contact = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!form.name) newErrors.name = "Name is required";
        if (!form.email) newErrors.email = "Email is required";
        if (!form.subject) newErrors.subject = "Subject is required";
        if (!form.message) newErrors.message = "Message is required";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            console.log("Form Submitted:", form);
            setSubmitted(true);
            setErrors({});
            setForm({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
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
                padding: 2,
                backgroundImage: 'url(https://www.shutterstock.com/image-photo/human-communication-network-concept-resources-600nw-2003840618.jpg)', // Replace with your image path
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                // padding: 2,
            }}
        >
            <Box
                component="form"
                onSubmit={handleSubmit}
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
                <Typography variant="h4" gutterBottom>
                    Contact Us
                </Typography>
                {submitted && <Alert severity="success">Thank you for contacting us!</Alert>}
                <TextField
                    name="name"
                    label="Name"
                    value={form.name}
                    onChange={handleChange}
                    variant="outlined"
                    sx={{ mb: 2, width: '100%' }}
                    error={!!errors.name}
                    helperText={errors.name}
                />
                <TextField
                    name="email"
                    label="Email"
                    value={form.email}
                    onChange={handleChange}
                    variant="outlined"
                    sx={{ mb: 2, width: '100%' }}
                    error={!!errors.email}
                    helperText={errors.email}
                />
                <TextField
                    name="subject"
                    label="Subject"
                    value={form.subject}
                    onChange={handleChange}
                    variant="outlined"
                    sx={{ mb: 2, width: '100%' }}
                    error={!!errors.subject}
                    helperText={errors.subject}
                />
                <TextField
                    name="message"
                    label="Message"
                    value={form.message}
                    onChange={handleChange}
                    variant="outlined"
                    sx={{ mb: 2, width: '100%' }}
                    multiline
                    rows={4}
                    error={!!errors.message}
                    helperText={errors.message}
                />
                <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                    Submit
                </Button>
            </Box>
        </Box>
    );
};

export default Contact;


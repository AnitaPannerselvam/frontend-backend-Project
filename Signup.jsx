// import React, { useState } from 'react';
// import { TextField, Button, Box, Typography, IconButton, InputAdornment } from '@mui/material';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import { useNavigate } from 'react-router-dom';

// const Signup = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: '',
//         phoneno: '',
//     });

//     const [errors, setErrors] = useState({});
//     const [showPassword, setShowPassword] = useState(false);
//     const navigate = useNavigate();

//     const handleChange = (event) => {
//         const { id, value } = event.target;
//         setFormData((prevData) => ({ ...prevData, [id]: value }));
//     };

//     const validatePassword = (password) => {
       
//         const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//         return passwordPattern.test(password);
//     };

//     const validatePhoneNo = (phoneno) => {
        
//         const phonePattern = /^\d{10}$/;
//         return phonePattern.test(phoneno);
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         const errors = {};
//         if (!validatePassword(formData.password)) {
//             errors.password = 'Password must be at least 8 characters long, include at least one uppercase letter, one number, and one special character.';
//         }
//         if (!validatePhoneNo(formData.phoneno)) {
//             errors.phoneno = 'Phone number must be exactly 10 digits.';
//         }

//         if (Object.keys(errors).length > 0) {
//             setErrors(errors);
//             return;
//         }

//         console.log('Form submitted with:', formData);
//         navigate('/about'); 
//     };

//     return (
//         <Box
//             sx={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 minHeight: '100vh',
//                 backgroundImage: 'url(https://www.shutterstock.com/image-photo/project-manager-working-on-laptop-260nw-2175846471.jpg)', // Replace with your image path
//                 backgroundSize: 'cover',
//                 backgroundRepeat: 'no-repeat',
//                 backgroundPosition: 'center',
//                 padding: 2,
//             }}
//         >
//             <Box
//                 component="form"
//                 onSubmit={handleSubmit}
//                 sx={{
//                     display: 'flex',
//                     flexDirection: 'column',
//                     alignItems: 'center',
//                     mt: 1,
//                     mx: 2,
//                     backgroundColor: 'rgba(255, 255, 255, 0.8)', 
//                     borderRadius: 2,
//                     padding: 2,
//                     width: '65%',
//                     maxWidth: '500px', 
//                 }}
//             >
//                 <Typography variant="h4" gutterBottom color="black">
//                     REGISTER
//                 </Typography>
//                 <TextField
//                     required
//                     id="name"
//                     label="Name"
//                     type="text"
//                     variant="outlined"
//                     margin="normal"
//                     value={formData.name}
//                     onChange={handleChange}
//                     sx={{ width: '100%' }}
//                 />
//                 <TextField
//                     required
//                     id="email"
//                     label="Email"
//                     type="email"
//                     variant="outlined"
//                     margin="normal"
//                     value={formData.email}
//                     onChange={handleChange}
//                     sx={{ width: '100%' }}
//                 />
//                 <TextField
//                     required
//                     id="password"
//                     label="Password"
//                     type={showPassword ? 'text' : 'password'}
//                     variant="outlined"
//                     margin="normal"
//                     value={formData.password}
//                     onChange={handleChange}
//                     sx={{ width: '100%' }}
//                     helperText={errors.password}
//                     error={Boolean(errors.password)}
//                     InputProps={{
//                         endAdornment: (
//                             <InputAdornment position="end">
//                                 <IconButton
//                                     aria-label="toggle password visibility"
//                                     onClick={() => setShowPassword(!showPassword)}
//                                     edge="end"
//                                 >
//                                     {showPassword ? <VisibilityOff /> : <Visibility />}
//                                 </IconButton>
//                             </InputAdornment>
//                         ),
//                     }}
//                 />
//                 <TextField
//                     required
//                     id="phoneno"
//                     label="Phone No"
//                     type="text"
//                     variant="outlined"
//                     margin="normal"
//                     value={formData.phoneno}
//                     onChange={handleChange}
//                     sx={{ width: '100%' }}
//                     helperText={errors.phoneno}
//                     error={Boolean(errors.phoneno)}
//                     inputProps={{ maxLength: 10 }}
//                 />
//                 <Button
//                     type="submit"
//                     variant="contained"
//                     color="primary"
//                     sx={{ mt: 3, mb: 2, width: '40%' }}
//                 >
//                     REGISTER
//                 </Button>
//                 <Button
//                     onClick={() => navigate('/signin')}
//                     color="primary"
//                     sx={{ mt: 1 }}
//                 >
//                     Already have an account? Login
//                 </Button>
//             </Box>
//         </Box>
//     );
// };

// export default Signup;


import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Box, Typography, IconButton, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phoneno: '',
        roles: 'USER',
    });

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    const validatePassword = (password) => {
        const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordPattern.test(password);
    };

    const validatePhoneNo = (phoneno) => {
        const phonePattern = /^\d{10}$/;
        return phonePattern.test(phoneno);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const errors = {};
        if (!validatePassword(formData.password)) {
            errors.password = 'Password must be at least 8 characters long, include at least one uppercase letter, one number, and one special character.';
        }
        if (!validatePhoneNo(formData.phoneno)) {
            errors.phoneno = 'Phone number must be exactly 10 digits.';
        }

        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }

        try {
            const response = await axios.post(
                "http://localhost:8080/api/auth/register",
                formData
            );
            console.log('Form submitted successfully:', response.data);
            navigate('/signin'); 
        } catch (error) {
            console.error('Error submitting form:', error);
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
                backgroundImage: 'url(https://www.shutterstock.com/image-photo/project-manager-working-on-laptop-260nw-2175846471.jpg)', 
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
                    mt: 1,
                    mx: 2,
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    borderRadius: 2,
                    padding: 2,
                    width: '65%',
                    maxWidth: '500px',
                }}
            >
                <Typography variant="h4" gutterBottom color="black">
                    REGISTER
                </Typography>
                <TextField
                    required
                    id="name"
                    label="Name"
                    type="text"
                    variant="outlined"
                    margin="normal"
                    value={formData.name}
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
                    type={showPassword ? 'text' : 'password'}
                    variant="outlined"
                    margin="normal"
                    value={formData.password}
                    onChange={handleChange}
                    sx={{ width: '100%' }}
                    helperText={errors.password}
                    error={Boolean(errors.password)}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => setShowPassword(!showPassword)}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    required
                    id="phoneno"
                    label="Phone No"
                    type="text"
                    variant="outlined"
                    margin="normal"
                    value={formData.phoneno}
                    onChange={handleChange}
                    sx={{ width: '100%' }}
                    helperText={errors.phoneno}
                    error={Boolean(errors.phoneno)}
                    inputProps={{ maxLength: 10 }}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{ mt: 3, mb: 2, width: '40%' }}
                >
                    REGISTER
                </Button>
                <Button
                    onClick={() => navigate('/signin')}
                    color="primary"
                    sx={{ mt: 1 }}
                >
                    Already have an account? Login
                </Button>
            </Box>
        </Box>
    );
};

export default Signup;

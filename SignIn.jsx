
// import React, { useState } from 'react';
// import { TextField, Button, Box, Typography, IconButton, InputAdornment } from '@mui/material';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { login } from '../Redux/authSlice';

// const SignIn = () => {
//     const [formData, setFormData] = useState({
//         name: '', 
//         email: '',
//         password: '',
//     });

//     const [errors, setErrors] = useState({});
//     const [showPassword, setShowPassword] = useState(false);
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     const handleChange = (event) => {
//         const { id, value } = event.target;
//         setFormData((prevData) => ({ ...prevData, [id]: value }));
//     };

//     const validatePassword = (password) => {
//         const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//         return passwordPattern.test(password);
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         const errors = {};
//         if (!validatePassword(formData.password)) {
//             errors.password = 'Password must be at least 8 characters long, include at least one uppercase letter, one number, and one special character.';
//         }

//         if (Object.keys(errors).length > 0) {
//             setErrors(errors);
//             return;
//         }

//         const user = { name: formData.name, email: formData.email }; 
//         dispatch(login(user));

//         console.log('Form submitted with:', formData);
//         navigate('/tasks'); 
//     };

//     return (
//         <Box
//             sx={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 minHeight: '100vh',
//                 backgroundImage: 'url(https://projectsly.com/images/task-management-system-screenshot-1.png?v=1691124479409199525)',
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
//                     mt: -2,
//                     mx: 2,
//                     backgroundColor: 'rgba(255, 255, 255, 0.8)',
//                     borderRadius: 2,
//                     padding: 2,
//                     width: '30%',
//                     maxWidth: '500px',
//                 }}
//             >
//                 <Typography variant="h4" gutterBottom color="black">
//                     LOGIN
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
//                     sx={{ width: '100%', maxWidth: '400px' }}
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
//                     sx={{ width: '100%', maxWidth: '400px' }}
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
//                 <Button
//                     type="submit"
//                     variant="contained"
//                     color="primary"
//                     sx={{ mt: 3, mb: 2, width: '50%', maxWidth: '400px' }}
//                 >
//                     LOGIN
//                 </Button>
//                 <Button
//                     onClick={() => navigate('/signup')}
//                     color="primary"
//                     sx={{ mt: 1 }}
//                 >
//                     Don't have an account? Register
//                 </Button>
//             </Box>
//         </Box>
//     );
// };

// export default SignIn;


import React, { useState } from 'react';
import { TextField, Button, Box, Typography, IconButton, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from '../Redux/authSlice';

const SignIn = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    const validatePassword = (password) => {
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordPattern.test(password);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const errors = {};
        if (!validatePassword(formData.password)) {
            errors.password = 'Password must be at least 8 characters long, include at least one uppercase letter, one number, and one special character.';
        }

        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }

        try {
            const response = await axios.post(
                "http://localhost:8080/api/auth/login",
                formData
            );

            const { accessToken, role } = response.data;
            localStorage.setItem("token", accessToken);
            localStorage.setItem("role", role);

            console.log("Token:", localStorage.getItem("token"));
            alert("Login Success!");

            const user = { email: formData.email };
            dispatch(login(user));

            if (role === "ADMIN") {
                navigate("/admin");
            } else {
                navigate("/tasks");
            }
        } catch (error) {
            console.error(error);
            alert("Invalid Credentials!");
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
                backgroundImage: 'url(https://projectsly.com/images/task-management-system-screenshot-1.png?v=1691124479409199525)',
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
                    mt: -2,
                    mx: 2,
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    borderRadius: 2,
                    padding: 2,
                    width: '30%',
                    maxWidth: '500px',
                }}
            >
                <Typography variant="h4" gutterBottom color="black">
                    LOGIN
                </Typography>
                <TextField
                    required
                    id="email"
                    label="Email"
                    type="email"
                    variant="outlined"
                    margin="normal"
                    value={formData.email}
                    onChange={handleChange}
                    sx={{ width: '100%', maxWidth: '400px' }}
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
                    sx={{ width: '100%', maxWidth: '400px' }}
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
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{ mt: 3, mb: 2, width: '50%', maxWidth: '400px' }}
                >
                    LOGIN
                </Button>
                <Button
                    onClick={() => navigate('/signup')}
                    color="primary"
                    sx={{ mt: 1 }}
                >
                    Don't have an account? Register
                </Button>
            </Box>
        </Box>
    );
};

export default SignIn;





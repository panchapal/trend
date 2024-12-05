import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { logIn } from '../../Redux/authSlice';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Login.css';
import { toast } from 'react-toastify';

const Login = () => {
  const {upload_reg} = useSelector((state) => state.contents);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    dispatch(logIn(data)).then(() => {
      if (upload_reg === 'success') {
      }
      toast.success('Login successfully')
      RedirectLog();
    });
  };

  const RedirectLog = () => {
    let token = localStorage.getItem("token");
    let isInLoginPage = window.location.pathname.toLowerCase() === "/login";
    if (token !== null && token !== undefined && token !== "") {
      isInLoginPage && navigate("/");
    }
  };

  return (
    <Box className='content123'>
      <Box className='grid1'>
        <form onSubmit={handleSubmit(onSubmit)} >
          <Typography variant="h4" padding={3} textAlign={'center'}>
          Sign In
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="email"
                variant="outlined"
                label="Email"
                {...register('email', { 
                  required: 'Email address is required', 
                  pattern: { 
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
                    message: 'Invalid email address' 
                  } 
                })}
                error={!!errors.email}
                sx={{
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'black', 
      },
      '&:hover fieldset': {
        borderColor: 'black',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'black',
      },
    },
    '& .MuiFormLabel-root': {
      color: 'black',
      '&.Mui-focused': {
        color: 'black', 
      },
    },
  }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="password"
                variant="outlined"
                label="Password"
                {...register('password', { required: 'Password is required' })}
                error={!!errors.password}
                sx={{
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'black', 
      },
      '&:hover fieldset': {
        borderColor: 'black',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'black',
      },
    },
    '& .MuiFormLabel-root': {
      color: 'black',
      '&.Mui-focused': {
        color: 'black', 
      },
    },
  }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                sx={{
                        mt: 2,
                        borderRadius: 3,
                        color: 'black',
                        fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
                        backgroundColor: '#81c7fb',
                        '&:hover': {
                            borderColor: 'black',
                            color: 'black',
                            border: '1px solid black',
                        },
                    }}              >
                Login
              </Button>
              <Typography variant='h6'>Not Sign Up?<Button color="info" variant="outlined" component={Link} to="/register" sx={{ 
    margin: 2, 
    color: 'black', 
    borderColor: 'black', 
    '&:hover': {
      borderColor: 'black',
      color: 'black',
    },
  }}>Sign Up</Button>
</Typography>

            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default Login;



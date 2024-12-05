import React, { useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { registerUser } from "../../Redux/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Register.css";
import { useMutation } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const Register = () => {
  const navigate = useNavigate();
  const [img, setImg] = useState(null);
  const [imgName, setImageName] = useState("");
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (formData) => {
      const resultAction = await dispatch(registerUser(formData));
      return resultAction.payload;
    },
    onSuccess: (data) => {
      if (data?.status === 200) {
        if (data?.data?.email) {
          localStorage.setItem("email", data.data.email);
          toast.success('Registration successfull')
          navigate("/login");
        } else {
          console.error("Email not found in response", data);
        }
      } else if (data?.status === 201) {

        console.error("Email already exists");
        toast.error("Email already registered. Please use a different email.");
      } else {
        console.error("Unexpected success response", data);
      }
    },
    onError: (error) => {
      console.error("Signup failed", error);
    },
  });

  const handleUpload = (e) => {
    let file = e.target.files[0];
    if (file) {
      setImg(file);
      setImageName(file.name);
    }
  };

  const onSubmit = (data) => {
    let formdata = new FormData();
    formdata.append("first_name", data.first_name);
    formdata.append("last_name", data.last_name);
    formdata.append("email", data.email);
    formdata.append("password", data.password);
    formdata.append("profile_pic", img);
    mutation.mutate(formdata);
  };

  return (
    <Box className="register">
      <Box className="grid">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography variant="h4" padding={2} textAlign={"center"}>
            Sign Up
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="text"
                variant="outlined"
                label="First Name"
                {...register("first_name", { required: "Enter first name" })}
                error={!!errors.first_name}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "black",
                    },
                    "&:hover fieldset": {
                      borderColor: "black",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "black",
                    },
                  },
                  "& .MuiFormLabel-root": {
                    color: "black",
                    "&.Mui-focused": {
                      color: "black",
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="text"
                variant="outlined"
                label="Last Name"
                {...register("last_name", { required: "Enter last name" })}
                error={!!errors.last_name}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "black",
                    },
                    "&:hover fieldset": {
                      borderColor: "black",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "black",
                    },
                  },
                  "& .MuiFormLabel-root": {
                    color: "black",
                    "&.Mui-focused": {
                      color: "black",
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="email"
                variant="outlined"
                label="Email"
                {...register("email", {
                  required: "Enter email",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Wrong input",
                  },
                })}
                error={!!errors.email}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "black",
                    },
                    "&:hover fieldset": {
                      borderColor: "black",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "black",
                    },
                  },
                  "& .MuiFormLabel-root": {
                    color: "black",
                    "&.Mui-focused": {
                      color: "black",
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
                {...register("password", { required: "Enter password" })}
                error={!!errors.password}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "black",
                    },
                    "&:hover fieldset": {
                      borderColor: "black",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "black",
                    },
                  },
                  "& .MuiFormLabel-root": {
                    color: "black",
                    "&.Mui-focused": {
                      color: "black",
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Box>
                <input
                  accept="image/*"
                  id="upload-photo"
                  type="file"
                  onChange={handleUpload}
                  style={{ display: "none" }}
                />
                <label htmlFor="upload-photo">
                  <Button
                    variant="outlined"
                    component="span"
                    fullWidth
                    sx={{
                      borderColor: imgName ? "black" : "black",
                      color: imgName ? "black" : "black",
                      backgroundColor: imgName ? "transparent" : "transparent",
                      textAlign: "center",
                      padding: "10px",
                      fontSize: "12px",
                      borderRadius: "8px",
                      fontWeight: "600",
                      "&:hover": {
                        borderColor: "black",
                        color: "black",
                        backgroundColor: "transparent",
                      },
                      transition:
                        "background-color 0.3s, color 0.3s, border-color 0.3s",
                    }}
                  >
                    {imgName || "Choose Photo"}
                  </Button>
                </label>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                disabled={mutation.isLoading}
                sx={{
                  // mt: 2,
                  borderRadius: 3,
                  color: "black",
                  fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                  backgroundColor: "#ab63f3",
                  "&:hover": {
                    borderColor: "black",
                    color: "black",
                    border: "1px solid black",
                  },
                }}
              >
                Register
              </Button>
              <Typography variant="h6">
                Not Sign Up?
                <Button
                  color="info"
                  variant="outlined"
                  component={Link}
                  to="/login"
                  sx={{
                    margin: 1,
                    color: "black",
                    borderColor: "black",
                    "&:hover": {
                      borderColor: "black",
                      color: "black",
                    },
                  }}
                >
                  Sign In
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default Register;

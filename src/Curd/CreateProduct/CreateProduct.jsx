import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  Box,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { product_create } from "../../Redux/cartSlice";
import Typed from "typed.js";
import "./CreateProduct.css";
import { toast } from "react-toastify";

const CreateProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [image, setImage] = React.useState(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(file);
    } else {
      setImage(null);
      toast.error("Please upload a valid image file (e.g., jpg, png, gif).");
    }
  };

  const onSubmit = (data) => {
    if (!image) {
      toast.error("Please upload an image.");
      return;
    }

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("image", image);

    dispatch(product_create(formData)).then(() => {
      toast.success("Product added successfully");
      navigate("/showproduct");
    });
  };

  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Add Product"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
      startDelay: 500,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Box className="productt">
      <form onSubmit={handleSubmit(onSubmit)} className="formm">
        <Box className="anim">
          <Typography className="h1">
            <span ref={typedRef}></span>
          </Typography>
        </Box>

        <TextField
          margin="normal"
          type="text"
          variant="outlined"
          placeholder="Title"
          fullWidth
          {...register("title", { required: "Title is required" })}
          error={!!errors.title}
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

        <TextField
          margin="normal"
          type="text"
          variant="outlined"
          placeholder="Description"
          fullWidth
          {...register("description", { required: "Description is required" })}
          error={!!errors.description}
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

        <input
          type="file"
          id="image-upload"
          accept="image/*"
          onChange={handleUpload}
          style={{ display: "none" }}
        />
        <label htmlFor="image-upload">
          <Button
            component="span"
            variant="outlined"
            fullWidth
            sx={{
              borderColor: "black",
              color: "black",
              textAlign: "center",
              backgroundColor: "transparent",
              borderRadius: "8px",
              "&:hover": {
                borderColor: "black",
                backgroundColor: "transparent",
              },
              padding: "12px",
              fontSize: "10px",
              fontWeight: "600",
            }}
          >
            {image ? image.name : "Choose Image"}
          </Button>
        </label>

        <Button
          fullWidth
          type="submit"
          sx={{
            fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
            mt: 2,
            borderRadius: 3,
            color: "black",
            backgroundColor: "#ffb656",
            "&:hover": {
              borderColor: "black",
              color: "black",
              border: "1px solid black",
            },
          }}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default CreateProduct;

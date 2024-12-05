// import React, { useEffect, useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate, useParams } from "react-router-dom";
// import { product_update, product_edit } from "../../Redux/cartSlice";
// import { Box, Grid, TextField, Typography, Button } from "@mui/material";
// import { useForm } from "react-hook-form";
// import Typed from "typed.js";
// import "./EditProduct.css";

// const EditProduct = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { id } = useParams();

//   useEffect(() => {
//     dispatch(product_edit(id));
//   }, [id]);

//   const { product } = useSelector((state) => state.productt);
//   const {
//     register,
//     handleSubmit,
//     setValue,
//     formState: { errors },
//   } = useForm();

//   useEffect(() => {
//     if (product) {
//       setValue("title", product.title);
//       setValue("description", product.description);
//     }
//   }, [product, setValue]);

//   const onSubmit = (data) => {
//     const formData = new FormData();
//     formData.append("title", data.title);
//     formData.append("description", data.description);
//     formData.append("image", data.image[0]);
//     formData.append("id", id);

//     dispatch(product_update(formData)).then(() => {
//       alert("Edit successful");
//       navigate("/showproduct");
//     });
//   };

//   const typedRef = useRef(null);

//   useEffect(() => {
//     const options = {
//       strings: ["Edit Product"],
//       typeSpeed: 100,
//       backSpeed: 100,
//       loop: true,
//       startDelay: 500,
//     };

//     const typed = new Typed(typedRef.current, options);

//     return () => {
//       typed.destroy();
//     };
//   }, []);

//   return (
//     <Box className="box3">
//       <Box className="box4">
//         <Box className="anim">
//           <Typography className="h1">
//             <span ref={typedRef}></span>
//           </Typography>
//         </Box>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 label="Title"
//                 variant="outlined"
//                 {...register("title", { required: "Title is required" })}
//                 error={!!errors.title}
//                 InputLabelProps={{ shrink: true }}
//                 sx={{
//                   "& .MuiOutlinedInput-root": {
//                     "& fieldset": {
//                       borderColor: "black",
//                     },
//                     "&:hover fieldset": {
//                       borderColor: "black",
//                     },
//                     "&.Mui-focused fieldset": {
//                       borderColor: "black",
//                     },
//                   },
//                   "& .MuiFormLabel-root": {
//                     color: "black",
//                     "&.Mui-focused": {
//                       color: "black",
//                     },
//                   },
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 label="Description"
//                 variant="outlined"
//                 {...register("description", {
//                   required: "Description is required",
//                 })}
//                 error={!!errors.description}
//                 InputLabelProps={{ shrink: true }}
//                 sx={{
//                   "& .MuiOutlinedInput-root": {
//                     "& fieldset": {
//                       borderColor: "black",
//                     },
//                     "&:hover fieldset": {
//                       borderColor: "black",
//                     },
//                     "&.Mui-focused fieldset": {
//                       borderColor: "black",
//                     },
//                   },
//                   "& .MuiFormLabel-root": {
//                     color: "black",
//                     "&.Mui-focused": {
//                       color: "black",
//                     },
//                   },
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 type="file"
//                 variant="outlined"
//                 accept="image/*"
//                 {...register("image", { required: "Image is required" })}
//                 error={!!errors.image}
//                 helperText={errors.image?.message}
//                 sx={{
//                   "& .MuiOutlinedInput-root": {
//                     "& fieldset": {
//                       borderColor: "black",
//                     },
//                     "&:hover fieldset": {
//                       borderColor: "black",
//                     },
//                     "&.Mui-focused fieldset": {
//                       borderColor: "black",
//                     },
//                     backgroundColor: "transparent",
//                   },
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <Button
//                 fullWidth
//                 type="submit"
//                 sx={{
//                   fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
//                   mt: 2,
//                   borderRadius: 3,
//                   color: "black",
//                   backgroundColor: "#ffb656",
//                   "&:hover": {
//                     borderColor: "black",
//                     color: "black",
//                     border: "1px solid black",
//                   },
//                 }}
//               >
//                 Submit
//               </Button>
//             </Grid>
//           </Grid>
//         </form>
//       </Box>
//     </Box>
//   );
// };

// export default EditProduct;
// import React, { useEffect, useRef, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate, useParams } from "react-router-dom";
// import { product_update, product_edit } from "../../Redux/cartSlice";
// import { Box, Grid, TextField, Typography, Button } from "@mui/material";
// import { useForm } from "react-hook-form";
// import Typed from "typed.js";
// import "./EditProduct.css";

// const EditProduct = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const [imagePreview, setImagePreview] = useState("");

//   useEffect(() => {
//     dispatch(product_edit(id));
//   }, [id]);

//   const { product } = useSelector((state) => state.productt);
//   const {
//     register,
//     handleSubmit,
//     setValue,
//     formState: { errors },
//   } = useForm();

//   useEffect(() => {
//     if (product) {
//       setValue("title", product.title);
//       setValue("description", product.description);
//       if (product.image) {
//         setImagePreview(`https://wtsacademy.dedicateddevelopers.us/uploads/product/${product.image}`);
//       }
//     }
//   }, [product, setValue]);

//   const onSubmit = (data) => {
//     const formData = new FormData();
//     formData.append("title", data.title);
//     formData.append("description", data.description);
//     formData.append("image", data.image[0]);
//     formData.append("id", id);

//     dispatch(product_update(formData)).then(() => {
//       alert("Edit successful");
//       navigate("/showproduct");
//     });
//   };

//   const typedRef = useRef(null);

//   useEffect(() => {
//     const options = {
//       strings: ["Edit Product"],
//       typeSpeed: 100,
//       backSpeed: 100,
//       loop: true,
//       startDelay: 500,
//     };

//     const typed = new Typed(typedRef.current, options);

//     return () => {
//       typed.destroy();
//     };
//   }, []);

//   const handleImageChange = (event) => {
//     if (event.target.files.length > 0) {
//       const file = event.target.files[0];
//       setImagePreview(URL.createObjectURL(file));
//     }
//   };

//   return (
//     <Box className="box3">
//       <Box className="box4">
//         <Box className="anim">
//           <Typography className="h1">
//             <span ref={typedRef}></span>
//           </Typography>
//         </Box>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 label="Title"
//                 variant="outlined"
//                 {...register("title", { required: "Title is required" })}
//                 error={!!errors.title}
//                 InputLabelProps={{ shrink: true }}
//                 sx={{
//                   "& .MuiOutlinedInput-root": {
//                     "& fieldset": {
//                       borderColor: "black",
//                     },
//                     "&:hover fieldset": {
//                       borderColor: "black",
//                     },
//                     "&.Mui-focused fieldset": {
//                       borderColor: "black",
//                     },
//                   },
//                   "& .MuiFormLabel-root": {
//                     color: "black",
//                     "&.Mui-focused": {
//                       color: "black",
//                     },
//                   },
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 label="Description"
//                 variant="outlined"
//                 {...register("description", {
//                   required: "Description is required",
//                 })}
//                 error={!!errors.description}
//                 InputLabelProps={{ shrink: true }}
//                 sx={{
//                   "& .MuiOutlinedInput-root": {
//                     "& fieldset": {
//                       borderColor: "black",
//                     },
//                     "&:hover fieldset": {
//                       borderColor: "black",
//                     },
//                     "&.Mui-focused fieldset": {
//                       borderColor: "black",
//                     },
//                   },
//                   "& .MuiFormLabel-root": {
//                     color: "black",
//                     "&.Mui-focused": {
//                       color: "black",
//                     },
//                   },
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                 {imagePreview && (
//                   <img
//                     src={imagePreview}
//                     alt="Current Preview"
//                     style={{ maxWidth: "80px", maxHeight: "80px", marginRight: "16px" }}
//                   />
//                 )}
//                 <TextField
//                   fullWidth
//                   type="file"
//                   variant="outlined"
//                   accept="image/*"
//                   {...register("image", { required: "Image is required" })}
//                   error={!!errors.image}
//                   helperText={errors.image?.message}
//                   onChange={handleImageChange}
//                   sx={{
//                     "& .MuiOutlinedInput-root": {
//                       "& fieldset": {
//                         borderColor: "black",
//                       },
//                       "&:hover fieldset": {
//                         borderColor: "black",
//                       },
//                       "&.Mui-focused fieldset": {
//                         borderColor: "black",
//                       },
//                       backgroundColor: "transparent",
//                     },
//                   }}
//                 />
//               </Box>
//             </Grid>
//             <Grid item xs={12}>
//               <Button
//                 fullWidth
//                 type="submit"
//                 sx={{
//                   fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
//                   mt: 2,
//                   borderRadius: 3,
//                   color: "black",
//                   backgroundColor: "#ffb656",
//                   "&:hover": {
//                     borderColor: "black",
//                     color: "black",
//                     border: "1px solid black",
//                   },
//                 }}
//               >
//                 Submit
//               </Button>
//             </Grid>
//           </Grid>
//         </form>
//       </Box>
//     </Box>
//   );
// };

// export default EditProduct;

import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { product_update, product_edit } from "../../Redux/cartSlice";
import { Box, Grid, TextField, Typography, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import Typed from "typed.js";
import "./EditProduct.css";
import { toast } from "react-toastify";

const EditProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    dispatch(product_edit(id));
  }, [id, dispatch]);

  const { product } = useSelector((state) => state.productt);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (product) {
      setValue("title", product.title);
      setValue("description", product.description);
      if (product.image) {
        setImagePreview(
          `https://wtsacademy.dedicateddevelopers.us/uploads/product/${product.image}`
        );
      }
    }
  }, [product, setValue]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    if (data.image && data.image.length > 0) {
      formData.append("image", data.image[0]);
    }
    formData.append("id", id);

    dispatch(product_update(formData)).then(() => {
      toast.success("Edit successful");
      navigate("/showproduct");
    });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImagePreview(URL.createObjectURL(file));
    } else {
      toast.error("Please upload a valid image file");
      event.target.value = null; 
    }
  };

  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Edit Product"],
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
    <Box className="box3">
      <Box className="box4">
        <Box className="anim">
          <Typography className="h1">
            <span ref={typedRef}></span>
          </Typography>
        </Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Title"
                variant="outlined"
                {...register("title", { required: "Title is required" })}
                error={!!errors.title}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                variant="outlined"
                {...register("description", {
                  required: "Description is required",
                })}
                error={!!errors.description}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt="Current Preview"
                    style={{
                      maxWidth: "80px",
                      maxHeight: "80px",
                      marginRight: "16px",
                    }}
                  />
                )}
                <TextField
                  fullWidth
                  type="file"
                  variant="outlined"
                  accept="image/*"
                  {...register("image")}
                  error={!!errors.image}
                  helperText={errors.image?.message}
                  onChange={handleImageChange}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                type="submit"
                sx={{
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
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default EditProduct;

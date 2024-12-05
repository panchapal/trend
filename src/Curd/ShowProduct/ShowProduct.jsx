import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { product_get, product_delete } from "../../Redux/cartSlice";
import {
  // Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Grid,
  Pagination,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
// import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import "./ShowProduct.css";
import SweetAlert from "react-bootstrap-sweetalert";

const ShowProduct = () => {
  const dispatch = useDispatch();
  const { list,totalPages } = useSelector((state) => state.productt);
  const [isDelete, setIsDelete] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  // const [searchTerm, setSearchTerm] = useState("");
  const [totalRecords, setPage] = useState();


  useEffect(() => {
    dispatch(product_get());
  }, [dispatch]);

  const handleDelete = () => {
    if (deleteId !== "") {
      dispatch(product_delete({ id: deleteId })).then(() => {
        dispatch(product_get());
      });
    }
    setDeleteId("");
    setIsDelete(false);
  };

  const handelchange = (item, pageno) => {
    setPage(pageno);
    dispatch(
      product_get({
        page: pageno,
        perPage: 10,
      })
    );
  };
  // const filteredProducts = list?.filter((item) =>
  //   (item.title || "").toLowerCase().includes(searchTerm.toLowerCase())
  // );

  return (
    <>
    <Box
      sx={{ paddingX: 6, paddingBottom: 50, paddingTop: 12 }}
      className="grid"
    >
      {/* <Box display="flex" justifyContent="flex-end" mb={2}>
        <TextField
          label="Search"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ width: 200 }}
          InputProps={{
            endAdornment: <SearchIcon />,
          }}
        />
      </Box> */}
      <Grid container spacing={4}>
        {list?.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item._id}>
            <Card className="car">
              <CardMedia
                sx={{
                  height: "auto",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={`https://wtsacademy.dedicateddevelopers.us/uploads/product/${item?.image}`}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    borderRadius: 6,
                  }}
                />
              </CardMedia>
              <CardContent className="con">
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Title: {item.title}
                </Typography>
                <Typography sx={{ mt: 1, }} className="des">
                  Description: {item.description}
                </Typography>
              </CardContent>
              <Box display="flex" justifyContent="space-between" p={2} className='con2'>
                <Link
                  to=""
                  onClick={() => {
                    setDeleteId(item?._id);
                    setIsDelete(true);
                  }}
                >
                  <button
                    variant="contained"
                    startIcon={<DeleteIcon />}
                    color="error"
                    className="button1"
                  >
                    Delete
                  </button>
                </Link>
                {isDelete && (
                  <SweetAlert
                    warning
                    showCancel
                    title="Are you sure?"
                    subtitle={"You will not be able to recover"}
                    cancelBtnStyle={{
                      backgroundColor: "red",
                      padding: 10,
                      textDecoration: "none",
                      color: "white",
                    }}
                    confirmBtnStyle={{
                      backgroundColor: "#024b98",
                      padding: 10,
                      textDecoration: "none",
                      color: "white",
                    }}
                    onConfirm={handleDelete}
                    onCancel={() => setIsDelete(false)}
                  >
                    You will not be able to recover this imaginary file!
                  </SweetAlert>
                )}
                <Link to={`/Edit/${item?._id}`}>
                  <button
                    variant="contained"
                    startIcon={<EditIcon />}
                    color="primary"
                    className="button2"
                  >
                    Edit
                  </button>
                </Link>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    <Box display="flex" justifyContent="center"  bgcolor={'brown'}>
        <Pagination
          count={totalPages}
          totalRecords={totalRecords}
          onChange={handelchange}
        />
      </Box>
      </>
  );
};

export default ShowProduct;

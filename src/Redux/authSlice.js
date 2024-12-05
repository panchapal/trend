import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../Helper/Helper";
import { signup,signin } from "../API/endpoint";

const initialState = {
  upload_status: "idle",
  upload_reg:'idle',
  isRegistration: false,
  isLogin: false,
  redirectContact: null,
  redirectTo: null,
  registrationError: null,
  userDetails: null,
  upload:'idle'
  
};


export const registerUser = createAsyncThunk(
  "signup",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post(signup.registration, formData);
      const resData = await res?.data;
      return resData;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);


export const logIn = createAsyncThunk("signin", async (formData) => {
    const res = await axiosInstance.post(signin.login, formData);
    if (res.status === 200) {
        return res.data;
      } else {
        throw new Error('Login failed');
      }
    
  });

  export const fetchUserDetails = createAsyncThunk(
    "user/fetchDetails",
    async () => {
      try {
        const res = await axiosInstance.get("https://wtsacademy.dedicateddevelopers.us/api/user/profile-details");
        console.log("Api",res.data)
        return res.data;
      } catch (err) {
        console.error("Error fetching user details:", err);     
       }
    }
  );
  

export const authSlice = createSlice({
  name: "Authentication",
  initialState,
  reducers: {
    
    check_token: (state, { payload }) => {
      const token = localStorage.getItem("token");
      if (token !== null && token !== undefined) {
        state.isLogin = true;
      }
    },
    logout: (state, { payload }) => {
      localStorage.removeItem("token");
      localStorage.removeItem('Name');
      state.isLogin = false;
    },
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state, { payload }) => {
        state.upload_status = "loading";
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.upload_status = "success";
        localStorage.setItem("Name", payload?.data.first_name);
        state.redirectContact = '/login';
        state.isRegistration = true;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.upload_status= "failed";
        // state.registrationError = payload?.message || "Registration failed";
      })
      .addCase(logIn.pending, (state, { payload }) => {
        state.upload_reg = "loading";
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.upload_reg = "200";
        localStorage.setItem("token", payload?.token);
        localStorage.setItem("Name", payload?.data.first_name);
        state.isLogin = true;
      })
      .addCase(logIn.rejected, (state, { payload }) => {
        state.upload_reg = "failed";
      })

      .addCase(fetchUserDetails.pending, (state) => {
        state.upload = "loading";
      })
      .addCase(fetchUserDetails.fulfilled, (state, { payload }) => {
        state.upload = "success";
        state.userDetails = payload.data

      })
      .addCase(fetchUserDetails.rejected, (state) => {
        state.upload = "failed";
      });
  },
});

export const {
  check_token,
  logout,
} = authSlice.actions;

export default authSlice.reducer;

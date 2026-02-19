import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = [];

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push({
        id: Date.now(),
        fullname: action.payload.fullname,
        mobile: action.payload.mobile,
        balance: 0
      });
    },

    deposit: (state, action) => {
      const user = state.find(u => u.id === action.payload.id);
      if (user) {
        user.balance += Number(action.payload.amount);
      }
    },

    withdraw: (state, action) => {
      const user = state.find(u => u.id === action.payload.id);
      if (user && user.balance >= action.payload.amount) {
        user.balance -= Number(action.payload.amount);
      }
    },
    deleteUser:(state,action)=>{
        return state.filter(u => u.id != action.payload.id)
    }
    
  }
});

export const { addUser, deposit, withdraw } = userSlice.actions;

const store = configureStore({
  reducer: {
    users: userSlice.reducer
  }
});

export default store;
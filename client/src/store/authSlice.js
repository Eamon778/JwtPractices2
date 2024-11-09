import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    inAuthenticated: false,
    user: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action)=>{
            state.inAuthenticated = true;
            state.user = action.payload;
        },
        logout: (state)=>{
            state.inAuthenticated = false;
        }
    }
})

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;
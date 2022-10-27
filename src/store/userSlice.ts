import User from '../model/User';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    value: User;
}

const initialState: UserState = {
    value: {
        userId: '',
        password: '',
        email: '',
        name: '',
    },
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserValue: (state, action: PayloadAction<User>) => {
            state.value = action.payload;
        },
    },
});

export const { setUserValue } = userSlice.actions;

export default userSlice.reducer;

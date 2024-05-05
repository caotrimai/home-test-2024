import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TokenBalance {
    token: string;
    balance: number;
}

interface UserSliceState {
    username: string;
    name: string;
    balance: TokenBalance[];
}

const initialState: UserSliceState = {
    username: 'john.smth1',
    name: 'John Smith',
    balance: [
        {
            token: 'ETH',
            balance: 23341,
        },
    ],
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setBalance: (state, action: PayloadAction<TokenBalance[]>) => {
            state.balance = action.payload;
        },
    },
    selectors: {
        selectBalance: (user) => user.balance,
        selectUsername: (user) => user.username,
        selectName: (user) => user.name,
    },
});

export const { setBalance } = userSlice.actions;

export const { selectBalance, selectUsername, selectName } =
    userSlice.selectors;

export default userSlice.reducer;

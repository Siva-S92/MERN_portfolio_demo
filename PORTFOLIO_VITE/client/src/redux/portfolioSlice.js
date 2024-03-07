import {createSlice} from '@reduxjs/toolkit'

const portfolioSlice = createSlice({
    name: 'portfoliocontents',
    initialState: {
        loading: false, portfolioData: null, reloadData: false,
    },
    reducers: {
        showLoading: (state, action) => {
            state.loading = true;
        },
        hideLoading: (state, action) => {
            state.loading = false;
        },
        setPortfolioData: (state, action) => {
            state.portfolioData = action.payload;
        },
        setReloadData: (state, action) => {
            state.reloadData = action.payload;
        },
    }
});

export const { showLoading, hideLoading, setPortfolioData, setReloadData } = portfolioSlice.actions;
export default portfolioSlice.reducer;
import {configureStore} from '@reduxjs/toolkit';
import PortfolioReducer from './portfolioSlice'





const store = configureStore({
    reducer: {
        portfolio: PortfolioReducer,
    },
});

export default store;
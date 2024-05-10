
import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialProducts = [
{ id: 1, name: 'Product 1', description: 'Description for Product 1', price: 10, available: true },
{ id: 2, name: 'Product 2', description: 'Description for Product 2', price: 20, available: false }
];

const productsSlice = createSlice({
name: 'products',
initialState: initialProducts,
reducers: {
    addProduct: (state, action) => {
    state.push(action.payload);
    },
    deleteProduct: (state, action) => {
    return state.filter(product => product.id !== action.payload);
    },
    updateProduct: (state, action) => {
    const index = state.findIndex(product => product.id === action.payload.id);
    if (index !== -1) {
        state[index] = action.payload;
    }
    },
    toggleAvailability: (state, action) => {
    const index = state.findIndex(product => product.id === action.payload);
    if (index !== -1) {
        state[index].available = !state[index].available;
    }
    }
}
});

export const { addProduct, deleteProduct, updateProduct, toggleAvailability } = productsSlice.actions;

export default configureStore({
reducer: {
    products: productsSlice.reducer
}
});


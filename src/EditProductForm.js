
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProduct } from './store';

const EditProductForm = ({ product }) => {
const dispatch = useDispatch();
const [name, setName] = useState(product.name);
const [description, setDescription] = useState(product.description);
const [price, setPrice] = useState(product.price);
const [available, setAvailable] = useState(product.available);

const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct({ ...product, name, description, price: Number(price), available }));
};

return (
    <form onSubmit={handleSubmit}>
    <label>Name:</label>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
    <label>Description:</label>
    <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
    <label>Price:</label>
    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
    <label>Available:</label>
    <input type="checkbox" checked={available} onChange={(e) => setAvailable(e.target.checked)} />
    <button type="submit">Save Changes</button>
    </form>
);
};

export default EditProductForm;

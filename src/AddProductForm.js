
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from './store';

const AddProductForm = () => {
const dispatch = useDispatch();
const [name, setName] = useState('');
const [description, setDescription] = useState('');
const [price, setPrice] = useState('');
const [available, setAvailable] = useState(true);

const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct({ name, description, price: Number(price), available }));
    setName('');
    setDescription('');
    setPrice('');
    setAvailable(true);
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
    <button type="submit">Add Product</button>
    </form>
);
};

export default AddProductForm;

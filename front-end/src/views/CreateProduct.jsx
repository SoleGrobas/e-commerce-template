import React, {useState} from 'react';
import './createProduct.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const endpoint = 'http://127.0.0.1:8000/api/product'

const CreateProduct = () => {
   
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [discount, setDiscount] = useState(0)
    const [stock, setStock] = useState(0)
    const [image, setImage] = useState('')
    const [size, setSize] = useState('')
    const navigate = useNavigate()
    
    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, {title: title, description: description, price: price, discount: discount, stock: stock, image: image, size: size})
        navigate('/')
    }
  return (
    <div>
        
        <form id="create_product" onSubmit={store}>
            <h3>Create Product</h3>
            <div className="container">
                <div className="mb">
                    <label className="form-label">Title</label>
                    <input value={title} onChange={ (e)=> setTitle(e.target.value)} type='text' className="form-control"></input>
                </div>
                <div className="mb">
                    <label className="form-label">Description</label>
                    <input value={description} onChange={ (e)=> setDescription(e.target.value)} type='text' className="form-control" id="exampleFormControlTextarea1" rows="3"></input>
                </div>
                <div className="mb">
                    <label className="form-label">Price</label>
                    <input value={price} onChange={ (e)=> setPrice(e.target.value)} type='number' className="form-control"/>
                </div>
                <div className="mb">
                    <label className="form-label">Discount</label>
                    <input value={discount} onChange={ (e)=> setDiscount(e.target.value)} type='number' className="form-control"/>
                </div>
                <div className="mb">
                    <label className="form-label">Stock</label>
                    <input value={stock} onChange={ (e)=> setStock(e.target.value)} type='number' className="form-control"/>
                </div>
                <div className="mb">
                    <label className="form-label">Image</label>
                    <input  value={image} onChange={ (e)=> setImage(e.target.value)} className="form-control form-control-sm" id="formFileSm" type="file"/>
                </div>
                
                <div className="mb">
                    <select className="form-select form-select-sm" value={size} onChange={ (e)=> setSize(e.target.value)}>
                        <option selected>Size</option>
                        <option value="XXS">XXS</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                        <option value="XXXL">XXXL</option>
                    </select>
                 
                </div>
            </div>
            <button type='submit' id="buttonStore" className='btn btn-outline-success'>Store</button>
        </form>
        
            
    </div>
    
  )
}

export default CreateProduct;
